export default function renderChosenCards() {
    const blockWithCards = document.querySelector('.block-with-cards');

    blockWithCards.addEventListener('click', function showCard(event) {
        const target = event.target;
        if (target.classList.contains('card-shirt')) {
            const cardFace =
                target.nextElementSibling.closest('.card-face-hidden');
            target.classList.remove('card-shirt');
            target.classList.add('card-shirt-hidden');

            cardFace.classList.remove('card-face-hidden');
            cardFace.classList.add('card-face');

            cardFace.classList.add('clicked');
        }

        if (target.classList.contains('card-face')) {
            const cardFace = document.querySelector('.card-face');
            cardFace.removeEventListener('click', showCard);
        }

        const clickedCards = document.querySelectorAll('.clicked');

        for (let i = 0; i < clickedCards.length; i++) {
            if (clickedCards.length < 2) {
                continue;
            } else {
                if (
                    clickedCards[i].firstElementChild.textContent ===
                    clickedCards[i + 1].firstElementChild.textContent
                ) {
                    alert('Поздравляем! Вы выиграли!');
                    break;
                } else {
                    alert('Вы проиграли!');
                    break;
                }
            }
        }
    });
}
