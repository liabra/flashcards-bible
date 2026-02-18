import fs from "node:fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";

const inputDir = "./public/bible/raw-usx/Sg1910-usx_v11n";
const outputFile = "./public/bible-full.json";

const parser = new XMLParser({
  ignoreAttributes: false,
  preserveOrder: true,
  attributeNamePrefix: "",
  textNodeName: "#text",
});

const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".usx"));

function normalizeText(s) {
  return String(s || "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Parse "EXO 1:2" -> { book:"EXO", chapter:"1", verse:"2" }
function parseSidEid(ref) {
  const [book, cv] = String(ref || "").split(" ");
  if (!cv) return { book: book || null, chapter: null, verse: null };
  const [chapter, verse] = cv.split(":");
  return { book: book || null, chapter: chapter || null, verse: verse || null };
}

// Walk tolérant: array/object/string, en respectant l'ordre
function walk(x, onNode) {
  if (x == null) return;

  if (Array.isArray(x)) {
    for (const n of x) walk(n, onNode);
    return;
  }

  if (typeof x === "string") return;

  if (typeof x === "object") {
    onNode(x);

    // Descendre dans tous les enfants (sauf attributs et text node)
    for (const k of Object.keys(x)) {
      if (k === ":@" || k === "#text") continue;
      walk(x[k], onNode);
    }
  }
}

let bible = [];

for (const file of files) {
  const filePath = path.join(inputDir, file);
  const xml = fs.readFileSync(filePath, "utf8");
  const doc = parser.parse(xml);

  const bookCode = file.split("-")[1].replace(".usx", "");

  let currentChapter = null;
  let currentVerse = null;
  let collecting = false;
  let buffer = "";

  function flush() {
    const text = normalizeText(buffer);
    if (currentChapter && currentVerse && text) {
      bible.push({
        book: bookCode,
        chapter: Number(currentChapter),
        verse: Number(currentVerse),
        reference: `${bookCode} ${currentChapter}:${currentVerse}`,
        text,
        weight: 1.0,
      });
    }
    buffer = "";
  }

  walk(doc, (node) => {
    // Texte brut
    if (node["#text"] !== undefined) {
      if (collecting) buffer += " " + node["#text"];
      return;
    }

    const attrs = node[":@"] || {};

    // Détection chapitre (rarement nécessaire car sid contient déjà chap:vers)
    if (node.chapter !== undefined && attrs.number) {
      // Nouveau chapitre -> on ferme tout
      flush();
      collecting = false;
      currentChapter = String(attrs.number);
      currentVerse = null;
      return;
    }

    // Détection verset (c'est le cœur)
    if (node.verse !== undefined) {
      // Début verset via sid
      if (attrs.sid) {
        // On ferme le précédent, puis on démarre le nouveau
        flush();

        const parsed = parseSidEid(attrs.sid);
        if (parsed.chapter) currentChapter = parsed.chapter;
        if (parsed.verse) currentVerse = parsed.verse;

        collecting = true;
        return;
      }

      // Fin verset via eid
      if (attrs.eid) {
        // On flush et stop
        flush();
        collecting = false;
        return;
      }

      // Fallback: certains exports utilisent number sans sid/eid
      if (attrs.number) {
        flush();
        currentVerse = String(attrs.number);
        collecting = true;
        return;
      }
    }
  });

  // Sécurité fin de fichier
  flush();

  console.log(`✅ ${bookCode} traité`);
}

fs.writeFileSync(outputFile, JSON.stringify(bible, null, 2), "utf8");

console.log("\nBible convertie avec succès 🚀");
console.log("Nombre total de versets :", bible.length);
console.log("Fichier généré :", outputFile);
