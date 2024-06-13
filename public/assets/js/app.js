document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('gameSearch');
    const gameCards = document.querySelectorAll('.game');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        gameCards.forEach(function (card) {
            const gameTitle = card.querySelector('h3').textContent.toLowerCase();
            if (gameTitle.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

console.log("%cNalla Worker", "color:#ffa500; font-weight:600;", "Loaded Games JS File");