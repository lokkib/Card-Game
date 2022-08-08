/*global renderCards, renderTimeGame*/
/*eslint no-undef: "error"*/

// eslint-disable-next-line no-unused-vars
function renderGameScreen() {
    document.body.firstElementChild.remove();
    renderCards();

    const cardShirts = document.querySelectorAll('.card-shirt');
    const cardFaces = document.querySelectorAll('.card-face-hidden');

    setTimeout(() => {
        for (let elem of cardShirts) {
            elem.classList.remove('card-shirt');
            elem.classList.add('card-shirt-hidden');
        }
        for (let elem of cardFaces) {
            elem.classList.remove('card-face-hidden');
            elem.classList.add('card-face');
        }
    }, 1000);

    setTimeout(() => {
        for (let elem of cardShirts) {
            elem.classList.remove('card-shirt-hidden');
            elem.classList.add('card-shirt');
        }
        for (let elem of cardFaces) {
            elem.classList.remove('card-face');
            elem.classList.add('card-face-hidden');
        }
        renderTimeGame();
    }, 5000);

    const blockWithTimer = document.querySelector('.game-timer-button-hidden');
    blockWithTimer.classList.remove('game-timer-button-hidden');
    blockWithTimer.classList.add('game-timer-button');
}
