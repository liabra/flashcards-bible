// --- CONFIGURATION SRS (spaced repetition) VERSION BIBLE ---

const card = document.querySelector('.card');
const verseRef = document.getElementById('verse-reference');
const verseText = document.getElementById('verse-text');

let currentIndex = 0;
let currentVerse = null;

// Variables SWIPE
let touchstartX = 0;
let touchendX = 0;
const SWIPE_THRESHOLD = 50;


// --- Fonction SRS pondérée ---
function getRandomVerseIndex() {
  const totalWeight = bibleData.reduce((sum, v) => sum + v.weight, 0);

  let randomWeight = Math.random() * totalWeight;

  for (let i = 0; i < bibleData.length; i++) {
    if (randomWeight < bibleData[i].weight) {
      return i;
    }
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

  if (isKnown) {
    v.weight = Math.max(0.1, v.weight * 0.5);
  } else {
    v.weight = Math.min(5.0, v.weight * 2);
  }
}


// --- Flip de la carte ---
function flipCard() {
  if (!card.classList.contains("is-flipped")) {
    card.classList.add("is-flipped");

    // Confettis à l'affichage du verset
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

  card.classList.remove(
    "is-flipped",
    "is-known",
    "is-unknown",
    "swipe-right",
    "swipe-left"
  );

  setTimeout(loadVerse, 50);
}


// --- SWIPE LOGIC ---
function checkDirection() {
  const dist = touchendX - touchstartX;

  if (Math.abs(dist) < SWIPE_THRESHOLD) return;

  if (card.classList.contains("is-flipped")) {
    if (dist > 0) {
      updateWeight(true);
      card.classList.add("is-known", "swipe-right");
    } else {
      updateWeight(false);
      card.classList.add("is-unknown", "swipe-left");
    }

    setTimeout(nextCard, 300);
  } else {
    flipCard();
  }
}

card.addEventListener("touchstart", e => {
  touchstartX = e.changedTouches[0].screenX;
});

card.addEventListener("touchend", e => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});

card.onclick = () => {
  if (!card.classList.contains("is-flipped")) flipCard();
};


// --- Initialisation ---
loadVerse();
