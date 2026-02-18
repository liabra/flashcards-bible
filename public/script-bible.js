// ===============================
//  Flashcards Bible – Version Finale
// ===============================

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  console.log('🚀 Initialisation...');

  // --- UI ---
  const card = document.querySelector('.card');
  const verseRef = document.getElementById('verse-reference');
  const verseBackRef = document.getElementById('verse-back-ref');
  const verseText = document.getElementById('verse-text');
  const categoryBadge = document.getElementById('category-badge');
  const dayInput = document.getElementById('day-input');
  const bookSelect = document.getElementById('book-select');
  const categorySelect = document.getElementById('category-select');
  const modeInfo = document.getElementById('mode-info');

  // --- Data ---
  let fullBibleData = [];
  let planData = [];
  let activeData = [];
  let currentMode = 'plan';
  let selectedCategory = 'all';
  let selectedBook = 'all';

  let currentIndex = 0;
  let currentVerse = null;

  // --- Stats ---
  let stats = { total: 0, known: 0 };

  function updateStats(isKnown) {
    stats.total++;
    if (isKnown) stats.known++;

    document.getElementById('stat-total').textContent = stats.total;
    document.getElementById('stat-known').textContent = stats.known;
    const pct = stats.total > 0 ? Math.round((stats.known / stats.total) * 100) : 0;
    document.getElementById('stat-percent').textContent = pct;
    document.getElementById('progress-fill').style.width = pct + '%';
    
    // Sauvegarder
    saveStats();
  }

  function saveStats() {
    localStorage.setItem('bible-stats', JSON.stringify(stats));
  }

  function loadStats() {
    try {
      const saved = localStorage.getItem('bible-stats');
      if (saved) {
        stats = JSON.parse(saved);
        document.getElementById('stat-total').textContent = stats.total;
        document.getElementById('stat-known').textContent = stats.known;
        const pct = stats.total > 0 ? Math.round((stats.known / stats.total) * 100) : 0;
        document.getElementById('stat-percent').textContent = pct;
        document.getElementById('progress-fill').style.width = pct + '%';
      }
    } catch(e) { console.warn('Stats load error:', e); }
  }

  window.resetStats = function() {
    if (confirm('Réinitialiser les statistiques ?')) {
      stats = { total: 0, known: 0 };
      saveStats();
      document.getElementById('stat-total').textContent = '0';
      document.getElementById('stat-known').textContent = '0';
      document.getElementById('stat-percent').textContent = '0';
      document.getElementById('progress-fill').style.width = '0%';
      console.log('✅ Stats réinitialisées');
    }
  }

  // --- Swipe ---
  const SWIPE_THRESHOLD = 50;
  let touchstartX = 0;
  let mouseStartX = 0;

  // -------------------------------
  // Dark Mode
  // -------------------------------
  window.toggleTheme = function() {
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

  // -------------------------------
  // LocalStorage SRS
  // -------------------------------
  const SRS_KEY = 'bible-flashcards-srs-v2';

  function loadSRSWeights() {
    try {
      const saved = localStorage.getItem(SRS_KEY);
      if (!saved) return;
      const weights = JSON.parse(saved);

      if (typeof bibleData !== 'undefined') {
        bibleData.forEach(v => {
          if (weights[v.reference]) v.weight = weights[v.reference];
        });
      }
      
      if (typeof promisesData !== 'undefined') {
        promisesData.forEach(v => {
          if (weights[v.reference]) v.weight = weights[v.reference];
        });
      }
    } catch(e) { console.warn('SRS load error:', e); }
  }

  function saveSRSWeights() {
    try {
      const weights = {};
      
      if (typeof bibleData !== 'undefined') {
        bibleData.forEach(v => {
          weights[v.reference] = v.weight || 1.0;
        });
      }
      
      if (typeof promisesData !== 'undefined') {
        promisesData.forEach(v => {
          weights[v.reference] = v.weight || 1.0;
        });
      }
      
      localStorage.setItem(SRS_KEY, JSON.stringify(weights));
    } catch(e) { console.warn('SRS save error:', e); }
  }

  function getSavedDay() {
    const d = parseInt(localStorage.getItem('day') || '1', 10);
    return Number.isFinite(d) ? Math.min(365, Math.max(1, d)) : 1;
  }
  
  function saveDay(day) {
    localStorage.setItem('day', String(day));
  }

  // -------------------------------
  // Fetch JSON
  // -------------------------------
  async function loadJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erreur fetch ${url}: ${res.status}`);
    return res.json();
  }

  // -------------------------------
  // Livres
  // -------------------------------
  function getBibleBooks() {
    if (!fullBibleData || fullBibleData.length === 0) return [];
    const books = new Set();
    fullBibleData.forEach(v => {
      if (v.book) books.add(v.book);
    });
    return Array.from(books).sort();
  }

  function filterByBook(book) {
    if (book === 'all') return fullBibleData;
    return fullBibleData.filter(v => v.book === book);
  }

  // -------------------------------
  // Plan du jour
  // -------------------------------
  function buildDeckForDay(day) {
    const entry = planData.find(p => p.day === day);
    if (!entry) return [];

    const allowed = new Set();
    for (const r of entry.readings) {
      for (const ch of r.chapters) {
        allowed.add(`${r.book}-${ch}`);
      }
    }

    return fullBibleData.filter(v => allowed.has(`${v.book}-${v.chapter}`));
  }

  // -------------------------------
  // Promesses
  // -------------------------------
  function getPromisesCategories() {
    if (typeof promisesData === 'undefined') {
      console.error('❌ promisesData non défini');
      return [];
    }
    const cats = new Set();
    promisesData.forEach(p => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats).sort();
  }

  function filterPromisesByCategory(category) {
    if (typeof promisesData === 'undefined') {
      console.error('❌ promisesData non défini pour filtrage');
      return [];
    }
    if (category === 'all') {
      return [...promisesData];
    }
    return promisesData.filter(p => p.category === category);
  }

  // -------------------------------
  // SRS
  // -------------------------------
  function getRandomVerseIndex(deck) {
    if (!deck || deck.length === 0) return 0;
    const totalWeight = deck.reduce((sum, v) => sum + (v.weight || 1.0), 0);
    let randomWeight = Math.random() * totalWeight;

    for (let i = 0; i < deck.length; i++) {
      const w = deck[i].weight || 1.0;
      if (randomWeight < w) return i;
      randomWeight -= w;
    }
    return 0;
  }

  function updateWeight(isKnown) {
    const v = activeData[currentIndex];
    if (!v) return;

    if (isKnown) {
      v.weight = Math.max(0.1, (v.weight || 1.0) * 0.5);
    } else {
      v.weight = Math.min(5.0, (v.weight || 1.0) * 2);
    }
    saveSRSWeights();
  }

  // -------------------------------
  // Chargement verset
  // -------------------------------
  function loadVerse() {
    if (!activeData || activeData.length === 0) {
      verseRef.textContent = 'Vide';
      verseBackRef.textContent = '';
      verseText.textContent = "Aucun verset disponible.";
      if (categoryBadge) categoryBadge.style.display = 'none';
      return;
    }

    const idx = getRandomVerseIndex(activeData);
    currentIndex = idx;
    currentVerse = activeData[idx];

    verseRef.textContent = currentVerse.reference || '?';
    verseBackRef.textContent = currentVerse.reference || '';

    if (categoryBadge) {
      if (currentVerse.category) {
        categoryBadge.textContent = currentVerse.category;
        categoryBadge.style.display = 'block';
      } else {
        categoryBadge.style.display = 'none';
      }
    }

    verseText.innerHTML = currentVerse.text || 'Texte manquant';
  }

  // -------------------------------
  // Flip
  // -------------------------------
  function flipCard() {
    if (card.classList.contains('is-flipped')) return;
    card.classList.add('is-flipped');
    if (typeof confetti === 'function') {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    }
  }

  // -------------------------------
  // Next - FIX ANTI-FLASH
  // -------------------------------
  window.nextCard = function(e, fromSwipe = false) {
    if (e) e.stopPropagation();

    if (!fromSwipe) {
      card.classList.remove('is-flipped', 'is-known', 'is-unknown', 'swipe-right', 'swipe-left');
      loadVerse();
      return;
    }

    // MASQUER le verso pendant l'animation
    const cardBack = card.querySelector('.card__face--back');
    if (cardBack) cardBack.style.opacity = '0';

    const onTransitionEnd = (event) => {
      if (event.propertyName !== 'transform') return;
      card.removeEventListener('transitionend', onTransitionEnd);
      card.classList.remove('swipe-right', 'swipe-left', 'is-known', 'is-unknown', 'is-flipped');
      
      // Charger le nouveau verset PUIS réafficher le verso
      setTimeout(() => {
        loadVerse();
        setTimeout(() => {
          if (cardBack) cardBack.style.opacity = '';
        }, 100);
      }, 50);
    };

    card.addEventListener('transitionend', onTransitionEnd);
  }

  // -------------------------------
  // Swipe
  // -------------------------------
  function handleSwipe(dist) {
    if (!card.classList.contains('is-flipped')) {
      flipCard();
      return;
    }

    const isKnown = dist > 0;
    updateWeight(isKnown);
    updateStats(isKnown);

    card.classList.add(isKnown ? 'is-known' : 'is-unknown');
    card.classList.add(isKnown ? 'swipe-right' : 'swipe-left');
    window.nextCard(null, true);
  }

  card.addEventListener('touchstart', e => touchstartX = e.changedTouches[0].screenX);
  card.addEventListener('touchend', e => {
    const dist = e.changedTouches[0].screenX - touchstartX;
    if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
    handleSwipe(dist);
  });

  card.addEventListener('mousedown', e => mouseStartX = e.screenX);
  card.addEventListener('mouseup', e => {
    const dist = e.screenX - mouseStartX;
    if (Math.abs(dist) < SWIPE_THRESHOLD) return flipCard();
    handleSwipe(dist);
  });

  card.addEventListener('dblclick', e => {
    e.preventDefault();
    if (card.classList.contains('is-flipped')) {
      updateWeight(true);
      updateStats(true);
      card.classList.add('is-known');
      window.nextCard(null, false);
    } else flipCard();
  });

  card.addEventListener('contextmenu', e => {
    e.preventDefault();
    if (card.classList.contains('is-flipped')) {
      updateWeight(false);
      updateStats(false);
      card.classList.add('is-unknown');
      window.nextCard(null, false);
    } else flipCard();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flipCard();
      return;
    }
    if (!card.classList.contains('is-flipped')) return;

    if (e.key === 'ArrowRight') {
      updateWeight(true);
      updateStats(true);
      card.classList.add('is-known');
      window.nextCard(null, false);
    }
    if (e.key === 'ArrowLeft') {
      updateWeight(false);
      updateStats(false);
      card.classList.add('is-unknown');
      window.nextCard(null, false);
    }
  });

  // -------------------------------
  // Modes + Tooltips
  // -------------------------------
  function updateModeInfo(mode) {
    const infos = {
      plan: '📅 Versets du plan de lecture quotidien (365 jours)',
      livre: '📖 Tous les versets d\'un livre biblique spécifique',
      promises: '🎁 Promesses bibliques organisées par catégories',
      mix: '🔀 Mélange du plan du jour + toutes les promesses'
    };
    if (modeInfo) modeInfo.textContent = infos[mode] || '';
  }

  window.setMode = function(mode) {
    currentMode = mode;
    
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`button[onclick="setMode('${mode}')"]`).classList.add("active");

    updateModeInfo(mode);

    if (dayInput) dayInput.style.display = (mode === 'plan') ? 'inline-block' : 'none';
    if (bookSelect) bookSelect.style.display = (mode === 'livre') ? 'inline-block' : 'none';
    if (categorySelect) categorySelect.style.display = (mode === 'promises') ? 'block' : 'none';

    if (mode === 'plan') {
      const d = parseInt(dayInput?.value || '1', 10);
      activeData = buildDeckForDay(d);
    } else if (mode === 'livre') {
      activeData = filterByBook(selectedBook);
    } else if (mode === 'promises') {
      activeData = filterPromisesByCategory(selectedCategory);
    } else if (mode === 'mix') {
      const d = parseInt(dayInput?.value || '1', 10);
      const planVerses = buildDeckForDay(d);
      const promises = (typeof promisesData !== 'undefined') ? promisesData : [];
      activeData = [...planVerses, ...promises];
    }

    // Dédoublonner
    const seen = new Set();
    activeData = activeData.filter(v => {
      if (seen.has(v.reference)) return false;
      seen.add(v.reference);
      return true;
    });

    console.log('✅ Chargé:', activeData.length, 'versets');

    card.classList.remove('is-flipped', 'is-known', 'is-unknown', 'swipe-right', 'swipe-left');
    loadVerse();
  }

  function onCategoryChange() {
    if (!categorySelect) return;
    selectedCategory = categorySelect.value;
    if (currentMode === 'promises') window.setMode('promises');
  }

  function onBookChange() {
    if (!bookSelect) return;
    selectedBook = bookSelect.value;
    if (currentMode === 'livre') window.setMode('livre');
  }

  // -------------------------------
  // Init
  // -------------------------------
  (async function() {
    try {
      initTheme();
      loadSRSWeights();
      loadStats();

      fullBibleData = await loadJson('bible-full.json');
      planData = await loadJson('plans/plan-1an.json');

      console.log('📚 Bible:', fullBibleData.length);
      console.log('📅 Plan:', planData.length);
      console.log('🎁 Promesses:', typeof promisesData !== 'undefined' ? promisesData.length : '❌');

      // Livres
      if (bookSelect && fullBibleData.length > 0) {
        const books = getBibleBooks();
        bookSelect.innerHTML = '<option value="all">📚 Tous</option>';
        books.forEach(book => {
          const opt = document.createElement('option');
          opt.value = book;
          opt.textContent = book;
          bookSelect.appendChild(opt);
        });
        bookSelect.addEventListener('change', onBookChange);
      }

      // Catégories
      if (categorySelect && typeof promisesData !== 'undefined') {
        const categories = getPromisesCategories();
        
        if (categories.length > 0) {
          categorySelect.innerHTML = '<option value="all">📚 Toutes</option>';
          categories.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            categorySelect.appendChild(opt);
          });
          categorySelect.addEventListener('change', onCategoryChange);
        }
      }

      // Jour
      if (dayInput) {
        dayInput.value = getSavedDay();
        dayInput.addEventListener('change', () => {
          let d = parseInt(dayInput.value || '1', 10);
          if (!Number.isFinite(d)) d = 1;
          d = Math.min(365, Math.max(1, d));
          dayInput.value = d;
          saveDay(d);
          if (currentMode === 'plan' || currentMode === 'mix') window.setMode(currentMode);
        });
      }

      window.setMode('plan');

    } catch (err) {
      console.error('💥 Erreur:', err);
      verseRef.textContent = 'Erreur';
      verseText.textContent = err.message;
    }
  })();
}