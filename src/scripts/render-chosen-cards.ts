import { blockWithTimer } from './render-game-screen';
import { timer } from './render-time-game';

import { minutes, seconds } from './render-time-game';
import { buttonStartAgain } from './render-game-screen';

import { backToStart } from './render-game-screen';

export let blockFinalScreen: HTMLElement | null;

export default function renderChosenCards() {
    const blockWithCards = document.querySelector('.block-with-cards');
    const arrayClickedCards: string[] = [];
    if (blockWithCards !== null) {
        blockWithCards.addEventListener('click', function showCard(event) {
            const target: Element | null = event.target as Element;
            if (!(target instanceof HTMLElement)) return;
            if (target.classList.contains('card-shirt')) {
                const nextSibling: HTMLElement | null =
                    target.nextElementSibling as HTMLElement;
                const cardFace: Element | null =
                    nextSibling.closest('.card-face-hidden');

                target.classList.remove('card-shirt');
                target.classList.add('card-shirt-hidden');
                if (cardFace !== null) {
                    cardFace.classList.remove('card-face-hidden');
                    cardFace.classList.add('card-face');
                    cardFace.classList.add('clicked');
                    const firstChild: HTMLElement | null =
                        cardFace.firstElementChild as HTMLElement;
                    let value: string | null = '';
                    value = firstChild.textContent;
                    if (value !== null) {
                        arrayClickedCards.push(value);
                    }
                }

                if (target.classList.contains('card-face')) {
                    const cardFace: HTMLElement | null =
                        document.querySelector('.card-face');
                    if (cardFace !== null) {
                        cardFace.removeEventListener('click', showCard);
                    }
                }
            }

            let contains = true;
            const allCards = document.querySelectorAll('.card');
            function testClass() {
                let elem: Element | null;
                for (elem of allCards) {
                    if (elem !== null) {
                        let child: Element | null = elem.lastElementChild;
                        if (child !== null) {
                            if (!child.classList.contains('clicked')) {
                                contains = false;
                                break;
                            }
                        }
                    }
                }
                return contains;
            }

            const imageWin = './static/icon_celebration.png';
            const imageLose = './static/icon_dead.png';

            const inscriptionWin = 'Вы выиграли!';
            const inscriptionLose = 'Вы проиграли!';

            function renderFinalScreen(icon: string, inscription: string) {
                if (blockWithCards !== null) {
                    blockWithCards.removeEventListener('click', showCard);
                }
                if (buttonStartAgain !== null) {
                    buttonStartAgain.setAttribute('disabled', 'true');
                }

                blockFinalScreen = document.querySelector(
                    '.block-final-screen'
                );
                if (blockFinalScreen !== null) {
                    blockFinalScreen.classList.remove(
                        'block-final-screen-hidden'
                    );
                    const child: HTMLElement | null =
                        blockFinalScreen.firstElementChild as HTMLElement;
                    child.setAttribute('src', `${icon}`);
                }

                const finalScreenHEading = document.querySelector(
                    '.block-final-screen__heading'
                );
                if (finalScreenHEading !== null) {
                    finalScreenHEading.textContent = inscription;
                }
                if (blockWithTimer !== null) {
                    blockWithTimer.style.opacity = '0.7';
                }
                if (blockWithCards !== null) {
                    blockWithCards.setAttribute('opacity', '0.7');
                }

                clearInterval(timer);

                const wastedTime = document.querySelector(
                    '.block-final-screen__time-content'
                );
                if (
                    wastedTime !== null &&
                    minutes !== null &&
                    seconds !== null
                ) {
                    wastedTime.textContent = `${minutes.textContent}.${seconds.textContent}`;
                }

                const buttonStartNewGame: HTMLElement | null =
                    document.querySelector('.block-final-screen_button');
                if (buttonStartNewGame !== null) {
                    buttonStartNewGame.addEventListener('click', backToStart);
                }
            }

            let i = 0;
            function renderResult2(block: string[]) {
                if (block.length < 2 || !block || !block[i + 1]) {
                    return;
                } else {
                    if (block[i] === block[i + 1]) {
                        testClass();
                        if (contains) {
                            renderFinalScreen(imageWin, inscriptionWin);
                        } else {
                            i += 2;
                            renderResult2(block);
                        }
                    } else {
                        renderFinalScreen(imageLose, inscriptionLose);
                    }
                }
            }
            renderResult2(arrayClickedCards);
        });
    }
}
