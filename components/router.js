function navigate(page) {
    window.currentPage = page;
    renderPage();
}

function renderPage() {
    const app = document.getElementById("app");

    switch (window.currentPage) {
        case "solfege":
            renderFlashcards(solfègeData);
            break;

        case "versets":
            renderFlashcards(bibleVerses);
            break;

        case "quiz":
            app.innerHTML = "<h2>Mode Quiz bientôt disponible</h2>";
            break;

        default:
            app.innerHTML = "<h2>Bienvenue dans Bible Duo Flashcards</h2>";
    }
}
