// --- CONFIGURATION SRS (spaced repetition) VERSION BIBLE ---

const card = document.querySelector('.card');
const verseRef = document.getElementById('verse-reference');
const verseText = document.getElementById('verse-text');

let currentIndex = 0;
let currentVerse = null;

// Variables SWIPE mobile
let touchstartX = 0;
let touchendX = 0;
const SWIPE_THRESHOLD = 50;

// Variables SWIPE souris
let mouseDownX = 0;
let mouseUpX = 0;


// --- Fonction SRS pondérée ---
function getRandomVerseIndex() {
  const totalWeight = bibleData.reduce((sum, v) => sum + v.weight, 0);
  let randomWeight = Math.random() * totalWeight;

  for (let i = 0; i < bibleData.length; i++) {
    if (randomWeight < bibleData[i].weight) return i;
    randomWeight -= bibleData[i].weight;
  }
}


// --- Chargement du verset ---
function loadVerse() {
  const idx = getRandomVerseIndex();
  currentIndex = idx;
  currentVerse = bibleData[idx];

  verseRef.innerText = currentVerse.reference;
  verseText.innerText = currentVerse.text;
}


// --- Mise à jour des poids (SRS) ---
function updateWeight(isKnown) {
  let v = bibleData[currentIndex];
  if (isKnown) v.weight = Math.max(0.1, v.weight * 0.5);
  else v.weight = Math.min(5.0, v.weight * 2);
}


// --- Flip ---
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


// --- Carte suivante ---
function nextCard(e) {
  if (e) e.stopPropagation();
  card.classList.remove("is-flipped", "is-known", "is-unknown", "swipe-right", "swipe-left");
  setTimeout(loadVerse, 50);
}


// --- SWIPE MOBILE ---
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


// --- SWIPE SOURIS ---
card.addEventListener("mousedown", e => mouseDownX = e.clientX);
card.addEventListener("mouseup", e => {
  mouseUpX = e.clientX;
  const dist = mouseUpX - mouseDownX;

  if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
  handleSwipe(dist);
});


// --- SWIPE LOGIC (commun à souris & tactile) ---
function handleSwipe(dist) {
  if (!card.classList.contains("is-flipped")) return flipCard();

  if (dist > 0) {
    updateWeight(true);
    card.classList.add("is-known", "swipe-right");
  } else {
    updateWeight(false);
    card.classList.add("is-unknown", "swipe-left");
  }

  setTimeout(nextCard, 300);
}


// --- DOUBLE CLIC = JE SAIS ---
card.addEventListener("dblclick", e => {
  e.preventDefault();
  if (card.classList.contains("is-flipped")) {
    updateWeight(true);
    card.classList.add("is-known", "swipe-right");
    setTimeout(nextCard, 300);
  } else flipCard();
});


// --- CLIC DROIT = J'HÉSITE ---
card.addEventListener("contextmenu", e => {
  e.preventDefault();
  if (card.classList.contains("is-flipped")) {
    updateWeight(false);
    card.classList.add("is-unknown", "swipe-left");
    setTimeout(nextCard, 300);
  } else flipCard();
});


// --- CLAVIER (Desktop) ---
document.addEventListener("keydown", e => {

  if (e.key === "Enter" || e.key === " ") {
    // Flip
    flipCard();
  }

  if (!card.classList.contains("is-flipped")) return;

  if (e.key === "ArrowRight") {
    updateWeight(true);
    card.classList.add("is-known", "swipe-right");
    setTimeout(nextCard, 300);
  }

  if (e.key === "ArrowLeft") {
    updateWeight(false);
    card.classList.add("is-unknown", "swipe-left");
    setTimeout(nextCard, 300);
  }
});


// --- Initialisation ---
loadVerse();
