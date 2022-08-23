import renderCards from './render-cards';
import renderTimeGame from './render-time-game';
import renderChosenCards from './render-chosen-cards';
import { minutes, seconds } from './render-time-game';
import { timer } from './render-time-game';

export let blockWithTimer: HTMLElement | null;
export let buttonStartAgain: HTMLElement | null;

export let backToStart: backToStart;

type backToStart = () => void;

const blockChooseDifficulty: HTMLElement | null = document.querySelector(
    '.block-choose-difficulty'
);

blockWithTimer = document.querySelector('.game-timer-button-hidden');
const blockWithCards = document.querySelector('.block-with-cards');

buttonStartAgain = document.querySelector('.button-start-again');

export default function renderGameScreen() {
    if (blockChooseDifficulty !== null) {
        blockChooseDifficulty.classList.add('block-choose-difficulty-hidden');
    }

    renderCards(localStorage.getItem('level'));

    const cardShirts = document.querySelectorAll('.card-shirt');
    const cardFaces = document.querySelectorAll('.card-face-hidden');

    if (buttonStartAgain !== null) {
        buttonStartAgain.setAttribute('disabled', 'disabled');
    }

    setTimeout(() => {
        for (const elem of cardShirts) {
            elem.classList.remove('card-shirt');
            elem.classList.add('card-shirt-hidden');
        }
        for (const elem of cardFaces) {
            elem.classList.remove('card-face-hidden');
            elem.classList.add('card-face');
        }
    }, 1000);

    setTimeout(() => {
        for (const elem of cardShirts) {
            elem.classList.remove('card-shirt-hidden');
            elem.classList.add('card-shirt');
        }
        for (const elem of cardFaces) {
            elem.classList.remove('card-face');
            elem.classList.add('card-face-hidden');
        }
        if (buttonStartAgain !== null) {
            buttonStartAgain.removeAttribute('disabled');
        }

        renderTimeGame();
    }, 5000);

    if (blockWithTimer !== null) {
        blockWithTimer.classList.remove('game-timer-button-hidden');
        blockWithTimer.classList.add('game-timer-button');
    }

    renderChosenCards();
}

const startNewGame = () => {
    if (buttonStartAgain !== null) {
        buttonStartAgain.addEventListener(
            'click',
            (backToStart = () => {
                if (blockChooseDifficulty !== null) {
                    blockChooseDifficulty.classList.remove(
                        'block-choose-difficulty-hidden'
                    );
                }
                if (blockWithTimer !== null) {
                    blockWithTimer.classList.add('game-timer-button-hidden');
                    blockWithTimer.classList.remove('game-timer-button');
                }

                if (blockWithCards !== null) {
                    blockWithCards.classList.remove('block-with-cards');
                    blockWithCards.classList.add('block-with-cards-hidden');
                }

                const blockFinalScreen = document.querySelector(
                    '.block-final-screen'
                );
                if (blockFinalScreen !== null) {
                    if (
                        !blockFinalScreen.classList.contains(
                            'block-final-screen-hidden'
                        )
                    ) {
                        blockFinalScreen.classList.add(
                            'block-final-screen-hidden'
                        );
                    }
                }
                if (blockWithTimer !== null) {
                    blockWithTimer.style.opacity = 'initial';
                }
                if (blockWithCards !== null) {
                    blockWithCards.setAttribute('opacity', 'initial');
                }

                if (minutes !== null) {
                    minutes.textContent = '00';
                }
                if (seconds !== null) {
                    seconds.textContent = '00';
                }

                clearInterval(timer);
            })
        );
    }
};
startNewGame();