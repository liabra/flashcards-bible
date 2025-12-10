function loadNavbar() {
    const nav = document.getElementById("navbar");

    nav.innerHTML = `
        <span class="nav-item" onclick="navigate('solfege')">🎵 Solfège</span>
        <span class="nav-item" onclick="navigate('versets')">📖 Versets</span>
        <span class="nav-item" onclick="navigate('quiz')">⭐ Quiz</span>
    `;
}

loadNavbar();
