function renderFlashcards(data) {
    const app = document.getElementById("app");

    let index = 0;
    let flipped = false;

    function showCard() {
        const card = data[index];
        app.innerHTML = `
            <div class="flashcard" id="card">
                ${flipped ? card.back : card.front}
            </div>
        `;
        document.getElementById("card").onclick = flip;
    }

    function flip() {
        flipped = !flipped;
        showCard();
    }

    showCard();
}
