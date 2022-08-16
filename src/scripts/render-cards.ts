import templateEngine from './templateEngine';

export default function renderCards(level: string | null) {
    const suits = ['\u2660', '\u2663', '\u2666', '\u2665'];

    const values = [6, 7, 8, 9, 10, 'Q', 'K', 'J', 'A'];

    let blockWithCards: HTMLElement | null;

    function findBlockWithCards(element: Element | null) {
        while (element) {
            if (element.classList.contains('block-with-cards')) {
                blockWithCards = document.querySelector('.block-with-cards');
            }
            if (element.classList.contains('block-with-cards-hidden')) {
                blockWithCards = document.querySelector(
                    '.block-with-cards-hidden'
                );
                if (blockWithCards !== null) {
                    blockWithCards.innerHTML = '';
                    blockWithCards.classList.remove('block-with-cards-hidden');
                    blockWithCards.classList.add('block-with-cards');
                }
            }
            findBlockWithCards(element.firstElementChild);
            element = element.nextElementSibling;
        }
    }

    findBlockWithCards(document.body);

    function creatingCard(card) {
        return {
            tag: 'div',
            cls: 'card',
            content: [
                {
                    tag: 'img',
                    cls: ['card-shirt'],
                    attrs: {
                        src: './static/card_face_down.png',
                    },
                },
                {
                    tag: 'div',
                    cls: ['card-face-hidden'],
                    content: [
                        {
                            tag: 'div',
                            cls: 'card-face-value',
                            content: `${card.value}`,
                        },
                        {
                            tag: 'div',
                            cls: 'card-face-suit',
                            content: `${card.suit}`,
                        },
                        {
                            tag: 'p',
                            cls: 'card-face-centered-suit',
                            content: `${card.suit}`,
                        },
                        {
                            tag: 'div',
                            cls: ['card-face-value', 'upside-down-value'],
                            content: `${card.value}`,
                        },
                        {
                            tag: 'div',
                            cls: ['card-face-suit', 'upside-down-suit'],
                            content: `${card.suit}`,
                        },
                    ],
                },
            ],
        };
    }

    function getRandomSuit(arr: string[]) {
        const newSuits = [];

        for (let i = 0; i < 3; i++) {
            newSuits.push(arr[Math.floor(Math.random() * arr.length)]);
        }
        const set = new Set(newSuits);
        const finalArr3 = [...set];
        if (finalArr3.length === 3) {
            finalArr3.pop();
            return finalArr3;
        }
        if (finalArr3.length < 2) {
            getRandomSuit(arr);
        } else {
            return finalArr3;
        }
    }

    function renderLevel() {
        const newValues: string[] = [];
        function getRandomValue(arr: string[]) {
            if (level === '1') {
                for (let i = 0; i < 4; i++) {
                    newValues.push(arr[Math.floor(Math.random() * arr.length)]);
                }
                const set = new Set(newValues);
                let finalArr2 = [...set];
                if (finalArr2.length === 4) {
                    finalArr2.pop();
                    return finalArr2;
                }
                if (finalArr2.length < 3) {
                    getRandomValue(arr);
                } else {
                    return finalArr2;
                }
            }
            if (level === '2') {
                while (newValues.length < 7) {
                    newValues.push(arr[Math.floor(Math.random() * arr.length)]);
                }
                const set = new Set(newValues);
                let finalArr2 = [...set];
                if (finalArr2.length === 6) {
                    return finalArr2;
                }
                while (finalArr2.length < 6) {
                    finalArr2.push(arr[Math.floor(Math.random() * arr.length)]);
                    const set2 = new Set(finalArr2);
                    finalArr2 = [...set2];
                }
                return finalArr2;
            } else {
                return arr;
            }
        }

        const futureListOfCards = {};

        function renderRelevantNumberCards(
            arr1: string[],
            arr2: string[],
            object: object
        ) {
            let i = 0;
            for (let elem of arr1) {
                for (let el of arr2) {
                    i++;
                    object[`card${i}`] = {
                        suit: elem,
                        value: el,
                    };
                }
            }
            return object;
        }

        renderRelevantNumberCards(
            getRandomSuit(suits),
            getRandomValue(values),
            futureListOfCards
        );
        const listOfCards = Object.values(futureListOfCards).sort(
            () => Math.random() - 0.5
        );
        if (blockWithCards !== null) {
            blockWithCards.appendChild(
                templateEngine(listOfCards.map((el) => creatingCard(el)))
            );
        }
    }

    renderLevel();

    function changeColor(node: HTMLElement | null) {
        while (node) {
            if (
                node.textContent === '\u2666' ||
                node.textContent === '\u2665'
            ) {
                node.style.color = 'red';
            }
            let child: HTMLElement | null =
                node.firstElementChild as HTMLElement;
            changeColor(child);

            node = node.nextElementSibling as HTMLElement;
        }
    }

    if (blockWithCards !== null) {
        changeColor(blockWithCards);
    }
}
