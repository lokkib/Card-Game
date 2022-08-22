/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/render-cards.ts":
/*!*************************************!*\
  !*** ./src/scripts/render-cards.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderCards)
/* harmony export */ });
/* harmony import */ var _templateEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateEngine */ "./src/scripts/templateEngine.ts");

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
function renderCards(level) {
    const suits = ['\u2660', '\u2663', '\u2666', '\u2665'];
    const values = [6, 7, 8, 9, 10, 'Q', 'K', 'J', 'A'];
    let blockWithCards = document.querySelector('.block-with-cards-main');
    if (blockWithCards !== null) {
        if (blockWithCards.classList.contains('block-with-cards')) {
            blockWithCards = document.querySelector('.block-with-cards');
        }
    }
    if (blockWithCards !== null) {
        if (blockWithCards.classList.contains('block-with-cards-hidden')) {
            blockWithCards = document.querySelector('.block-with-cards-hidden');
        }
        if (blockWithCards !== null) {
            blockWithCards.innerHTML = '';
            blockWithCards.classList.remove('block-with-cards-hidden');
            blockWithCards.classList.add('block-with-cards');
        }
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
        }
        else {
            return finalArr3;
        }
        return finalArr3;
    }
    function renderLevel() {
        const newValues = [];
        function getRandomValue(arr) {
            if (level === '1') {
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
                    getRandomValue(arr);
                }
                else {
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
            }
            else {
                return arr;
            }
        }
        let listOfCards = [];
        function renderRelevantNumberCards(arr1, arr2, object) {
            for (const elem of arr1) {
                for (const el of arr2) {
                    object.push({
                        suit: elem,
                        value: el,
                    });
                }
            }
            return object;
        }
        renderRelevantNumberCards(getRandomSuit(suits), getRandomValue(values), listOfCards);
        listOfCards = listOfCards.sort(() => Math.random() - 0.5);
        if (blockWithCards !== null) {
            blockWithCards.appendChild((0,_templateEngine__WEBPACK_IMPORTED_MODULE_0__["default"])(listOfCards.map((el) => creatingCard(el))));
        }
    }
    renderLevel();
    function changeColor(node) {
        while (node) {
            if (node.textContent === '\u2666' ||
                node.textContent === '\u2665') {
                node.setAttribute('style', 'color: red');
            }
            const child = node.firstElementChild;
            changeColor(child);
            node = node.nextElementSibling;
        }
    }
    if (blockWithCards !== null) {
        changeColor(blockWithCards);
    }
}


/***/ }),

/***/ "./src/scripts/render-chosen-cards.ts":
/*!********************************************!*\
  !*** ./src/scripts/render-chosen-cards.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockFinalScreen": () => (/* binding */ blockFinalScreen),
/* harmony export */   "default": () => (/* binding */ renderChosenCards)
/* harmony export */ });
/* harmony import */ var _render_game_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-game-screen */ "./src/scripts/render-game-screen.ts");
/* harmony import */ var _render_time_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-time-game */ "./src/scripts/render-time-game.ts");





let blockFinalScreen;
function renderChosenCards() {
    const blockWithCards = document.querySelector('.block-with-cards');
    const arrayClickedCards = [];
    if (blockWithCards !== null) {
        blockWithCards.addEventListener('click', function showCard(event) {
            const target = event.target;
            if (!(target instanceof HTMLElement))
                return;
            if (target.classList.contains('card-shirt')) {
                const nextSibling = target.nextElementSibling;
                const cardFace = nextSibling.closest('.card-face-hidden');
                target.classList.remove('card-shirt');
                target.classList.add('card-shirt-hidden');
                if (cardFace !== null) {
                    cardFace.classList.remove('card-face-hidden');
                    cardFace.classList.add('card-face');
                    cardFace.classList.add('clicked');
                    const firstChild = cardFace.firstElementChild;
                    let value = '';
                    value = firstChild.textContent;
                    if (value !== null) {
                        arrayClickedCards.push(value);
                    }
                }
                if (target.classList.contains('card-face')) {
                    const cardFace = document.querySelector('.card-face');
                    if (cardFace !== null) {
                        cardFace.removeEventListener('click', showCard);
                    }
                }
            }
            let contains = true;
            const allCards = document.querySelectorAll('.card');
            function testClass() {
                let elem;
                for (elem of allCards) {
                    if (elem !== null) {
                        const child = elem.lastElementChild;
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
            function renderFinalScreen(icon, inscription) {
                if (blockWithCards !== null) {
                    blockWithCards.removeEventListener('click', showCard);
                }
                if (_render_game_screen__WEBPACK_IMPORTED_MODULE_0__.buttonStartAgain !== null) {
                    _render_game_screen__WEBPACK_IMPORTED_MODULE_0__.buttonStartAgain.setAttribute('disabled', 'true');
                }
                blockFinalScreen = document.querySelector('.block-final-screen');
                if (blockFinalScreen !== null) {
                    blockFinalScreen.classList.remove('block-final-screen-hidden');
                    const child = blockFinalScreen.firstElementChild;
                    child.setAttribute('src', `${icon}`);
                }
                const finalScreenHEading = document.querySelector('.block-final-screen__heading');
                if (finalScreenHEading !== null) {
                    finalScreenHEading.textContent = inscription;
                }
                if (_render_game_screen__WEBPACK_IMPORTED_MODULE_0__.blockWithTimer !== null) {
                    _render_game_screen__WEBPACK_IMPORTED_MODULE_0__.blockWithTimer.style.opacity = '0.7';
                }
                if (blockWithCards !== null) {
                    blockWithCards.setAttribute('opacity', '0.7');
                }
                clearInterval(_render_time_game__WEBPACK_IMPORTED_MODULE_1__.timer);
                const wastedTime = document.querySelector('.block-final-screen__time-content');
                if (wastedTime !== null &&
                    _render_time_game__WEBPACK_IMPORTED_MODULE_1__.minutes !== null &&
                    _render_time_game__WEBPACK_IMPORTED_MODULE_1__.seconds !== null) {
                    wastedTime.textContent = `${_render_time_game__WEBPACK_IMPORTED_MODULE_1__.minutes.textContent}.${_render_time_game__WEBPACK_IMPORTED_MODULE_1__.seconds.textContent}`;
                }
                const buttonStartNewGame = document.querySelector('.block-final-screen_button');
                if (buttonStartNewGame !== null) {
                    buttonStartNewGame.addEventListener('click', () => (0,_render_game_screen__WEBPACK_IMPORTED_MODULE_0__.backToStart)());
                }
            }
            let i = 0;
            function renderResult2(block) {
                if (block.length < 2 || !block || !block[i + 1]) {
                    return;
                }
                else {
                    if (block[i] === block[i + 1]) {
                        testClass();
                        if (contains) {
                            renderFinalScreen(imageWin, inscriptionWin);
                        }
                        else {
                            i += 2;
                            renderResult2(block);
                        }
                    }
                    else {
                        renderFinalScreen(imageLose, inscriptionLose);
                    }
                }
            }
            renderResult2(arrayClickedCards);
        });
    }
}


/***/ }),

/***/ "./src/scripts/render-game-screen.ts":
/*!*******************************************!*\
  !*** ./src/scripts/render-game-screen.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backToStart": () => (/* binding */ backToStart),
/* harmony export */   "blockWithTimer": () => (/* binding */ blockWithTimer),
/* harmony export */   "buttonStartAgain": () => (/* binding */ buttonStartAgain),
/* harmony export */   "default": () => (/* binding */ renderGameScreen)
/* harmony export */ });
/* harmony import */ var _render_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-cards */ "./src/scripts/render-cards.ts");
/* harmony import */ var _render_time_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-time-game */ "./src/scripts/render-time-game.ts");
/* harmony import */ var _render_chosen_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-chosen-cards */ "./src/scripts/render-chosen-cards.ts");





let blockWithTimer;
let buttonStartAgain;
let backToStart;
const blockChooseDifficulty = document.querySelector('.block-choose-difficulty');
blockWithTimer = document.querySelector('.game-timer-button-hidden');
const blockWithCards = document.querySelector('.block-with-cards');
buttonStartAgain = document.querySelector('.button-start-again');
function renderGameScreen() {
    if (blockChooseDifficulty !== null) {
        blockChooseDifficulty.classList.add('block-choose-difficulty-hidden');
    }
    (0,_render_cards__WEBPACK_IMPORTED_MODULE_0__["default"])(localStorage.getItem('level'));
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
        (0,_render_time_game__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }, 5000);
    if (blockWithTimer !== null) {
        blockWithTimer.classList.remove('game-timer-button-hidden');
        blockWithTimer.classList.add('game-timer-button');
    }
    (0,_render_chosen_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
const startNewGame = () => {
    if (buttonStartAgain !== null) {
        buttonStartAgain.addEventListener('click', (backToStart = () => {
            if (blockChooseDifficulty !== null) {
                blockChooseDifficulty.classList.remove('block-choose-difficulty-hidden');
            }
            if (blockWithTimer !== null) {
                blockWithTimer.classList.add('game-timer-button-hidden');
                blockWithTimer.classList.remove('game-timer-button');
            }
            if (blockWithCards !== null) {
                blockWithCards.classList.remove('block-with-cards');
                blockWithCards.classList.add('block-with-cards-hidden');
            }
            const blockFinalScreen = document.querySelector('.block-final-screen');
            if (blockFinalScreen !== null) {
                if (!blockFinalScreen.classList.contains('block-final-screen-hidden')) {
                    blockFinalScreen.classList.add('block-final-screen-hidden');
                }
            }
            if (blockWithTimer !== null) {
                blockWithTimer.style.opacity = 'initial';
            }
            if (blockWithCards !== null) {
                blockWithCards.setAttribute('opacity', 'initial');
            }
            if (_render_time_game__WEBPACK_IMPORTED_MODULE_1__.minutes !== null) {
                _render_time_game__WEBPACK_IMPORTED_MODULE_1__.minutes.textContent = '00';
            }
            if (_render_time_game__WEBPACK_IMPORTED_MODULE_1__.seconds !== null) {
                _render_time_game__WEBPACK_IMPORTED_MODULE_1__.seconds.textContent = '00';
            }
            clearInterval(_render_time_game__WEBPACK_IMPORTED_MODULE_1__.timer);
        }));
    }
};
startNewGame();


/***/ }),

/***/ "./src/scripts/render-time-game.ts":
/*!*****************************************!*\
  !*** ./src/scripts/render-time-game.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTimeGame),
/* harmony export */   "minutes": () => (/* binding */ minutes),
/* harmony export */   "seconds": () => (/* binding */ seconds),
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
const minutes = document.querySelector('.timer-minutes');
const seconds = document.querySelector('.timer-seconds');
let timer;
function renderTimeGame() {
    if (!(minutes instanceof HTMLElement)) {
        return;
    }
    let numberMinutesFormat;
    if (minutes !== null) {
        numberMinutesFormat = Number(minutes.textContent);
    }
    let count = 0;
    function counting() {
        count++;
        if (seconds !== null) {
            seconds.textContent = String(count);
        }
        if (count > 59) {
            if (numberMinutesFormat !== null) {
                numberMinutesFormat++;
            }
            if (minutes !== null) {
                minutes.textContent = String(numberMinutesFormat);
            }
            if (seconds !== null) {
                seconds.textContent = String(0);
                count = 0;
            }
        }
    }
    timer = setInterval(counting, 1000);
}


/***/ }),

/***/ "./src/scripts/templateEngine.ts":
/*!***************************************!*\
  !*** ./src/scripts/templateEngine.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ templateEngine)
/* harmony export */ });
function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('');
    }
    if (typeof block === 'string' ||
        typeof block === 'number' ||
        block === true) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();
        block.forEach((element) => {
            fragment.appendChild(templateEngine(element));
        });
        return fragment;
    }
    const result = document.createElement(block.tag);
    result.appendChild(templateEngine(block.content));
    if (block.cls) {
        const classes = [].concat(block.cls);
        classes.forEach((cls) => {
            result.classList.add(cls);
        });
    }
    if (block.attrs) {
        const keys = Object.keys(block.attrs);
        keys.forEach((key) => {
            result.setAttribute(key, block.attrs[key]);
        });
    }
    return result;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game),
/* harmony export */   "rememberLevel": () => (/* binding */ rememberLevel)
/* harmony export */ });
/* harmony import */ var _render_game_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-game-screen */ "./src/scripts/render-game-screen.ts");
/* harmony import */ var _render_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-cards */ "./src/scripts/render-cards.ts");
/* harmony import */ var _render_time_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-time-game */ "./src/scripts/render-time-game.ts");
/* harmony import */ var _render_chosen_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-chosen-cards */ "./src/scripts/render-chosen-cards.ts");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");





const Game = {
    rememberLevel,
    renderGameScreen: _render_game_screen__WEBPACK_IMPORTED_MODULE_0__["default"],
    renderChosenCards: _render_chosen_cards__WEBPACK_IMPORTED_MODULE_3__["default"],
    renderTimeGame: _render_time_game__WEBPACK_IMPORTED_MODULE_2__["default"],
    renderCards: _render_cards__WEBPACK_IMPORTED_MODULE_1__["default"],
};
const blockButtonsDifficulty = document.querySelector('.buttons-difficulty');
const buttonStartGame = document.querySelector('.button-start');
function rememberLevel() {
    if (blockButtonsDifficulty !== null && buttonStartGame !== null) {
        blockButtonsDifficulty.addEventListener('click', function chooseLevel(event) {
            if (!(event.target instanceof HTMLElement))
                return;
            localStorage.setItem('level', `${event.target.textContent}`);
        });
        buttonStartGame.addEventListener('click', _render_game_screen__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
}
document.addEventListener('DOMContentLoaded', rememberLevel);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map