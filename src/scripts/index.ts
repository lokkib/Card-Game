import renderGameScreen from './render-game-screen';
import renderCards from './render-cards';
import renderTimeGame from './render-time-game';
import renderChosenCards from './render-chosen-cards';

import '../styles/styles.scss';

export const Game = {
    rememberLevel,
    renderGameScreen,
    renderChosenCards,
    renderTimeGame,
    renderCards,
};

const blockButtonsDifficulty: HTMLElement | null = document.querySelector(
    '.buttons-difficulty'
);
const buttonStartGame: HTMLElement | null =
    document.querySelector('.button-start');

export function rememberLevel() {
    if (blockButtonsDifficulty !== null && buttonStartGame !== null) {
        blockButtonsDifficulty.addEventListener(
            'click',
            function chooseLevel(event) {
                if (!(event.target instanceof HTMLElement)) return;

                localStorage.setItem('level', `${event.target.textContent}`);
            }
        );
        buttonStartGame.addEventListener('click', renderGameScreen);
    }
}

document.addEventListener('DOMContentLoaded', rememberLevel);
