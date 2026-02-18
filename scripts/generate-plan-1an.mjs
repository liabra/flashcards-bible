import fs from "node:fs";

const bible = JSON.parse(fs.readFileSync("./public/bible-full.json", "utf8"));

// Construire index automatique book -> nombre de chapitres
const bookChapters = new Map();

for (const v of bible) {
  if (!bookChapters.has(v.book)) {
    bookChapters.set(v.book, new Set());
  }
  bookChapters.get(v.book).add(v.chapter);
}

// Transformer en nombre max de chapitres
const index = [...bookChapters.entries()].map(([book, chaptersSet]) => ({
  book,
  chapters: Math.max(...chaptersSet)
}));

// Ordre canonique
const order = [
  "GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST",
  "JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM",
  "HAB","ZEP","HAG","ZEC","MAL",
  "MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM",
  "HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV"
];

const nt = ["MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV"];
const ot = order.filter(b => !nt.includes(b));

// map book -> chaptersCount
const chaptersCount = new Map(index.map(b => [b.book, b.chapters]));

// Helper
function nextChapters(state, bookList, countPerDay) {
  const readings = [];
  let remaining = countPerDay;

  while (remaining > 0 && state.bookIdx < bookList.length) {
    const book = bookList[state.bookIdx];
    const total = chaptersCount.get(book) || 0;

    const chapters = [];
    while (remaining > 0 && state.chapter <= total) {
      chapters.push(state.chapter);
      state.chapter++;
      remaining--;
    }

    if (chapters.length) readings.push({ book, chapters });

    if (state.chapter > total) {
      state.bookIdx++;
      state.chapter = 1;
    }
  }

  return readings;
}

const otState = { bookIdx: 0, chapter: 1 };
const ntState = { bookIdx: 0, chapter: 1 };

const plan = [];

for (let day = 1; day <= 365; day++) {
  const readings = [
    ...nextChapters(otState, ot, 3),
    ...nextChapters(ntState, nt, 1),
  ];
  plan.push({ day, readings });
}

fs.mkdirSync("./public/plans", { recursive: true });
fs.writeFileSync("./public/plans/plan-1an.json", JSON.stringify(plan, null, 2), "utf8");

console.log("✅ Plan généré :", plan.length, "jours");
