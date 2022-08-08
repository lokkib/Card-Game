/*global templateEngine*/
/*eslint no-undef: "error"*/

// eslint-disable-next-line no-unused-vars
function renderCards() {
    const suits = ['\u2660', '\u2663', '\u2666', '\u2665'];

    const values = [6, 7, 8, 9, 10, 'Q', 'K', 'J', 'A'];

    const fullListOfCards = [];

    let i = 0;

    function generateCards(s, v, listCards) {
        for (let elem of s) {
            for (let el of v) {
                i++;
                listCards[`card${i}`] = {
                    suit: elem,
                    value: el,
                };
            }
        }
        return listCards;
    }

    console.log(generateCards(suits, values, fullListOfCards));

    const blockWithCards = document.querySelector('.block-with-cards');

    function creatingCard(card) {
        return {
            tag: 'div',
            cls: 'card',
            content: [
                {
                    tag: 'img',
                    cls: ['card-shirt'],
                    attrs: {
                        src: './images/card_face_down.png',
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

    function getRandomSuit(arr) {
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

    console.log(getRandomSuit(suits));

    function renderEasyLevel() {
        function getRandomValueEasyLevel(arr) {
            const newValues = [];

            for (let i = 0; i < 4; i++) {
                newValues.push(arr[Math.floor(Math.random() * arr.length)]);
            }
            const set = new Set(newValues);
            const finalArr2 = [...set];
            if (finalArr2.length === 4) {
                finalArr2.pop();
                return finalArr2;
            }
            if (finalArr2.length < 3) {
                getRandomValueEasyLevel(arr);
            } else {
                return finalArr2;
            }
        }

        console.log(getRandomValueEasyLevel(values));

        const futureListOfCards = [];

        function renderRelevantNumberCards(arr1, arr2, object) {
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
            getRandomValueEasyLevel(values),
            futureListOfCards
        );

        const listOfCards = Object.values(futureListOfCards);

        blockWithCards.appendChild(
            templateEngine(listOfCards.map((el) => creatingCard(el)))
        );
    }

    function renderMediumLevel() {
        function getRandomValueMediumLevel(arr) {
            const newValues2 = [];
            while (newValues2.length < 7) {
                newValues2.push(arr[Math.floor(Math.random() * arr.length)]);
            }
            const set = new Set(newValues2);
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
        }

        const futureListOfCards = [];

        function renderRelevantNumberCards(arr1, arr2, object) {
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
            getRandomValueMediumLevel(values),
            futureListOfCards
        );

        const listOfCards = Object.values(futureListOfCards);

        blockWithCards.appendChild(
            templateEngine(listOfCards.map((el) => creatingCard(el)))
        );
    }

    function renderHardLevel() {
        function getRandomValueHardLevel(arr) {
            return arr;
        }
        const futureListOfCards = [];

        function renderRelevantNumberCards(arr1, arr2, object) {
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
            getRandomValueHardLevel(values),
            futureListOfCards
        );

        const listOfCards = Object.values(futureListOfCards);

        blockWithCards.appendChild(
            templateEngine(listOfCards.map((el) => creatingCard(el)))
        );
    }

    if (localStorage.getItem('level') === '1') {
        renderEasyLevel();
    }

    if (localStorage.getItem('level') === '2') {
        renderMediumLevel();
    }
    if (localStorage.getItem('level') === '3') {
        renderHardLevel();
    }

    function changeColor(node) {
        while (node) {
            if (
                node.textContent === '\u2666' ||
                node.textContent === '\u2665'
            ) {
                node.style.color = 'red';
            }
            changeColor(node.firstElementChild);

            node = node.nextElementSibling;
        }
    }

    changeColor(blockWithCards);
}
