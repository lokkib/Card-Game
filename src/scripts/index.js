import renderGameScreen from './render-game-screen';
import renderCards from './render-cards';
import renderTimeGame from './render-time-game';
import renderChosenCards from './render-chosen-cards';

import '../styles/styles.css';

// eslint-disable-next-line no-unused-vars
const Game = {
    rememberLevel,
    renderGameScreen,
    renderChosenCards,
    renderTimeGame,
    renderCards,
};

const blockButtonsDifficulty = document.querySelector('.buttons-difficulty');
const buttonStartGame = document.querySelector('.button-start');

function rememberLevel() {
    blockButtonsDifficulty.addEventListener(
        'click',
        function chooseLevel(event) {
            localStorage.setItem('level', `${event.target.textContent}`);
        }
    );

    buttonStartGame.addEventListener('click', renderGameScreen);
}

document.addEventListener('DOMContentLoaded', rememberLevel);
