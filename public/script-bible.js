// --- CONFIGURATION SRS (spaced repetition) VERSION BIBLE ---

const card = document.querySelector('.card');
const verseRef = document.getElementById('verse-reference');
const verseText = document.getElementById('verse-text');

let currentIndex = 0;
let currentVerse = null;

// Base de données active (modifiable par les onglets)
let activeData = [...bibleData]; // par défaut = versets


// ---------------------------
//      SRS & RANDOM PICK
// ---------------------------
function getRandomVerseIndex() {
  if (!activeData || activeData.length === 0) return 0;

  const totalWeight = activeData.reduce((sum, v) => sum + v.weight, 0);
  let randomWeight = Math.random() * totalWeight;

  for (let i = 0; i < activeData.length; i++) {
    if (randomWeight < activeData[i].weight) return i;
    randomWeight -= activeData[i].weight;
  }
  return 0;
}

function loadVerse() {
  if (!activeData || activeData.length === 0) return;

  const idx = getRandomVerseIndex();
  currentIndex = idx;
  currentVerse = activeData[idx];

  verseRef.innerText = currentVerse.reference;

  // Versets simples OU promesses avec application
  if (currentVerse.application) {
    verseText.innerHTML = `
      ${currentVerse.text}
      <br><br>
      <span class="application-title">Application :</span>
      <br>
      <span class="application-text">${currentVerse.application}</span>
    `;
  } else {
    verseText.innerText = currentVerse.text;
  }
}

function updateWeight(isKnown) {
  let v = activeData[currentIndex];

  if (isKnown) {
    v.weight = Math.max(0.1, v.weight * 0.5);
  } else {
    v.weight = Math.min(5.0, v.weight * 2);
  }
}


// ---------------------------
//           FLIP
// ---------------------------
function flipCard() {
  if (!card.classList.contains("is-flipped")) {
    card.classList.add("is-flipped");

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}


// ---------------------------
//        NEXT CARD (CORRIGÉE)
// ---------------------------
function nextCard(e) {
  if (e) e.stopPropagation();

  // On enlève les classes d'état visuel
  card.classList.remove("is-known", "is-unknown", "swipe-right", "swipe-left");

  // On écoute la fin de la transition du swipe
  const onTransitionEnd = () => {
    card.removeEventListener("transitionend", onTransitionEnd);

    // On retourne la carte à son état normal
    card.classList.remove("is-flipped");

    // On charge ensuite la nouvelle data
    loadVerse();
  };

  // On attend la fin de la transition
  card.addEventListener("transitionend", onTransitionEnd);
}


// ---------------------------
//       SWIPE TOUCH
// ---------------------------
let touchstartX = 0;
let touchendX = 0;
const SWIPE_THRESHOLD = 50;

function checkDirectionTouch() {
  const dist = touchendX - touchstartX;
  if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
  handleSwipe(dist);
}

card.addEventListener("touchstart", e => touchstartX = e.changedTouches[0].screenX);
card.addEventListener("touchend", e => {
  touchendX = e.changedTouches[0].screenX;
  checkDirectionTouch();
});


// ---------------------------
//       SWIPE MOUSE
// ---------------------------
let mouseDownX = 0;
let mouseUpX = 0;

card.addEventListener("mousedown", e => mouseDownX = e.clientX);
card.addEventListener("mouseup", e => {
  mouseUpX = e.clientX;
  const dist = mouseUpX - mouseDownX;

  if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
  handleSwipe(dist);
});


// ---------------------------
//        COMMON SWIPE
// ---------------------------
function handleSwipe(dist) {
  if (!card.classList.contains("is-flipped")) return flipCard();

  if (dist > 0) {
    updateWeight(true);
    card.classList.add("is-known", "swipe-right");
  } else {
    updateWeight(false);
    card.classList.add("is-unknown", "swipe-left");
  }

  // ❌ IMPORTANT : plus de setTimeout ici
  // Le changement se fait via transitionend dans nextCard()
}


// ---------------------------
//     DOUBLE CLICK / RIGHT CLICK
// ---------------------------
card.addEventListener("dblclick", e => {
  e.preventDefault();
  if (card.classList.contains("is-flipped")) {
    updateWeight(true);
    card.classList.add("is-known", "swipe-right");
    nextCard(); // PAS de timeout
  } else flipCard();
});

card.addEventListener("contextmenu", e => {
  e.preventDefault();
  if (card.classList.contains("is-flipped")) {
    updateWeight(false);
    card.classList.add("is-unknown", "swipe-left");
    nextCard(); // PAS de timeout
  } else flipCard();
});


// ---------------------------
//           CLAVIER
// ---------------------------
document.addEventListener("keydown", e => {

  if (e.key === "Enter" || e.key === " ") {
    flipCard();
  }

  if (!card.classList.contains("is-flipped")) return;

  if (e.key === "ArrowRight") {
    updateWeight(true);
    card.classList.add("is-known", "swipe-right");
    nextCard();
  }

  if (e.key === "ArrowLeft") {
    updateWeight(false);
    card.classList.add("is-unknown", "swipe-left");
    nextCard();
  }
});


// ---------------------------
//         ONGLET : CHOIX DU MODE
// ---------------------------
function setMode(mode) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));

  if (mode === "verses") {
    activeData = [...bibleData];
    document.querySelector('button[onclick="setMode(\'verses\')"]').classList.add("active");
  }

  if (mode === "promises") {
    activeData = [...promisesData];
    document.querySelector('button[onclick="setMode(\'promises\')"]').classList.add("active");
  }

  if (mode === "mix") {
    activeData = [...bibleData, ...promisesData];
    document.querySelector('button[onclick="setMode(\'mix\')"]').classList.add("active");
  }

  // Reset visuel + chargement d’une nouvelle carte
  card.classList.remove("is-flipped", "is-known", "is-unknown", "swipe-right", "swipe-left");
  loadVerse();
}


// ---------------------------
//         INIT
// ---------------------------
loadVerse();
