 ##  Карточная игра

### Запуск проекта

***3) npm i***

***4) npm run start***


### Сборка проекта

npm run build



<p align="right">(<a href="#readme-top">back to top</a>)</p>


### О проекте

В качестве языка программирования выбран "ванильный" Typescript.

В ходе работы над проектом были использованы следующие технологии:

* Дизайн-макет Figma
* Eslint и Prettier для формаирования и линтинга кода
* Хук pre-commit задействуется с помощью библиотеки husky 
* Стилизация выполнена с помощью препроцессора SASS


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Функционал проекта

* возможность выбора сложности игры (легкий, средний, сложный)
* после выбора уровня сложности игры генерируется необходимое количество карточек, показываются игроку на 5 секунд, затем карточки переворачиваются рубашками вверх
* Когда игрок кликает на предположительную пару, то игра осуществляет сверку карточек:
- Если карточки совпадают ⇒ игра продолжается
- Если карточки не совпадают ⇒ игра заканчивается
* в финале игры пользователю показываются: 
- статус (проиграл / выиграл);
- время, затраченное на игру;
- кнопка, предлагающая сыграть снова.

