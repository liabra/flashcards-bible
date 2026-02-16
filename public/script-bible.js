// =============================================
//   CONFIGURATION
// =============================================
const card = document.querySelector('.card');
const verseRef = document.getElementById('verse-reference');
const verseBackRef = document.getElementById('verse-back-ref');
const verseText = document.getElementById('verse-text');

let currentIndex = 0;
let currentVerse = null;
let activeData = [];

// =============================================
//   STATISTIQUES SESSION
// =============================================
let stats = { total: 0, known: 0 };

function updateStats(isKnown) {
  stats.total++;
  if (isKnown) stats.known++;

  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-known').textContent = stats.known;
  const pct = stats.total > 0 ? Math.round((stats.known / stats.total) * 100) : 0;
  document.getElementById('stat-percent').textContent = pct;
  document.getElementById('progress-fill').style.width = pct + '%';
}

// =============================================
//   PERSISTANCE SRS (localStorage)
// =============================================
const SRS_KEY = 'bible-flashcards-srs-v1';

function loadSRSWeights() {
  try {
    const saved = localStorage.getItem(SRS_KEY);
    if (!saved) return;
    const weights = JSON.parse(saved);

    // Appliquer les poids sauvegardés aux deux datasets
    [bibleData, promisesData].forEach(dataset => {
      dataset.forEach(v => {
        if (weights[v.reference] !== undefined) {
          v.weight = weights[v.reference];
        }
      });
    });
  } catch(e) { console.warn('SRS load error:', e); }
}

function saveSRSWeights() {
  try {
    const weights = {};
    [...bibleData, ...promisesData].forEach(v => {
      weights[v.reference] = v.weight;
    });
    localStorage.setItem(SRS_KEY, JSON.stringify(weights));
  } catch(e) { console.warn('SRS save error:', e); }
}

// =============================================
//   DARK MODE
// =============================================
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
  document.querySelector('.theme-toggle').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('bible-theme', isDark ? 'light' : 'dark');
}

function initTheme() {
  const saved = localStorage.getItem('bible-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
}

// =============================================
//   SRS — SÉLECTION PONDÉRÉE
// =============================================
function getRandomVerseIndex() {
  if (!activeData || activeData.length === 0) return 0;
  const totalWeight = activeData.reduce((sum, v) => sum + v.weight, 0);
  let r = Math.random() * totalWeight;
  for (let i = 0; i < activeData.length; i++) {
    if (r < activeData[i].weight) return i;
    r -= activeData[i].weight;
  }
  return 0;
}

function updateWeight(isKnown) {
  let v = activeData[currentIndex];
  if (isKnown) {
    v.weight = Math.max(0.1, v.weight * 0.5);
  } else {
    v.weight = Math.min(5.0, v.weight * 2.0);
  }
  saveSRSWeights();
}

// =============================================
//   CHARGEMENT D'UN VERSET
// =============================================
function loadVerse() {
  if (!activeData || activeData.length === 0) return;

  const idx = getRandomVerseIndex();
  currentIndex = idx;
  currentVerse = activeData[idx];

  // Recto
  verseRef.textContent = currentVerse.reference;
  verseBackRef.textContent = currentVerse.reference;

  // Verso
  if (currentVerse.application) {
    verseText.innerHTML = `
      ${currentVerse.text}
      <br><br>
      <span class="application-title">Application :</span>
      <br>
      <span class="application-text">${currentVerse.application}</span>
    `;
  } else {
    verseText.textContent = currentVerse.text;
  }
}

// =============================================
//   FLIP
// =============================================
function flipCard() {
  if (card.classList.contains("is-flipped")) return;
  card.classList.add("is-flipped");
  confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
}

// =============================================
//   CARTE SUIVANTE
// =============================================
function nextCard(e, fromSwipe = false) {
  if (e) e.stopPropagation();

  if (!fromSwipe) {
    card.classList.remove("is-flipped", "is-known", "is-unknown");
    loadVerse();
    return;
  }

  const onTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;
    card.removeEventListener("transitionend", onTransitionEnd);
    card.classList.remove("swipe-right", "swipe-left", "is-known", "is-unknown", "is-flipped");
    loadVerse();
  };
  card.addEventListener("transitionend", onTransitionEnd);
}

// =============================================
//   SWIPE TOUCH
// =============================================
let touchstartX = 0;
const SWIPE_THRESHOLD = 50;

card.addEventListener("touchstart", e => touchstartX = e.changedTouches[0].screenX);
card.addEventListener("touchend", e => {
  const dist = e.changedTouches[0].screenX - touchstartX;
  if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
  handleSwipe(dist);
});

// =============================================
//   SWIPE SOURIS
// =============================================
let mouseDownX = 0;
card.addEventListener("mousedown", e => mouseDownX = e.clientX);
card.addEventListener("mouseup", e => {
  const dist = e.clientX - mouseDownX;
  if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
  handleSwipe(dist);
});

// =============================================
//   GESTION SWIPE COMMUN
// =============================================
function handleSwipe(dist) {
  if (!card.classList.contains("is-flipped")) return flipCard();

  const isKnown = dist > 0;
  updateWeight(isKnown);
  updateStats(isKnown);
  card.classList.add(isKnown ? "is-known" : "is-unknown");
  card.classList.add(isKnown ? "swipe-right" : "swipe-left");
  nextCard(null, true);
}

// =============================================
//   DOUBLE CLICK / CLIC DROIT
// =============================================
card.addEventListener("dblclick", e => {
  e.preventDefault();
  if (card.classList.contains("is-flipped")) {
    updateWeight(true);
    updateStats(true);
    card.classList.add("is-known");
    nextCard(null, false);
  } else flipCard();
});

card.addEventListener("contextmenu", e => {
  e.preventDefault();
  if (card.classList.contains("is-flipped")) {
    updateWeight(false);
    updateStats(false);
    card.classList.add("is-unknown");
    nextCard(null, false);
  } else flipCard();
});

// =============================================
//   CLAVIER
// =============================================
document.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    flipCard();
  }
  if (!card.classList.contains("is-flipped")) return;
  if (e.key === "ArrowRight") {
    updateWeight(true); updateStats(true);
    card.classList.add("is-known");
    nextCard(null, false);
  }
  if (e.key === "ArrowLeft") {
    updateWeight(false); updateStats(false);
    card.classList.add("is-unknown");
    nextCard(null, false);
  }
});

// =============================================
//   ONGLETS / MODES
// =============================================
function setMode(mode) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`button[onclick="setMode('${mode}')"]`).classList.add("active");

  if (mode === 'verses') activeData = [...bibleData];
  else if (mode === 'promises') activeData = [...promisesData];
  else activeData = [...bibleData, ...promisesData];

  // Dédoublonner (Ésaïe 41:10 est dans les deux fichiers)
  const seen = new Set();
  activeData = activeData.filter(v => {
    if (seen.has(v.reference)) return false;
    seen.add(v.reference);
    return true;
  });

  card.classList.remove("is-flipped", "is-known", "is-unknown", "swipe-right", "swipe-left");
  loadVerse();
}

// =============================================
//   INITIALISATION
// =============================================
initTheme();
loadSRSWeights();
setMode('verses');