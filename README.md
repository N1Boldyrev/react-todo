# DAILYPLANNER

### Данный проект является учебным. Стек - react\redux, express, mongodb.

Целью является изучение redux и его взаимодействие с react приложением.
Приложение реализует простой список задач и чекбоксов внутри них.

Для запуска требуется установленная MongoDB.
Клонируйте репозиторий.

Для npm:
`npm i --save`

Для yarn:
`yarn`

Затем запустите сервер:
`node start`

Зайдите на localhost:3000

## Страница с задачами

![Страница с задачами](https://i.imgur.com/ExwByGI.png)

Нажав на кнопку - Добавить, переходим на страницу добавления\изменения задач.
Переход осуществляется с помощью изменения состояния страница - это не отдельный документ.

## Страница добавления/изменения задач

![Страница добавления\изменения](https://i.imgur.com/KTCqLOT.png)

После добаления, новые задачи отправились на сервер и отрендерелись в приложении.

![Рендер новых задач](https://i.imgur.com/uZ7BYPY.png)

При нажатии на задачу открывается список опций. Открыв задачу мы попадаем на страницу с чекбоксами.

## Страница с чекбоксами

![Страница с чекбоксами](https://i.imgur.com/FZLwBvx.png)

На странице можно отмечать выполненные задачи, а так же удалять и изменять их.

![Активная задача](https://i.imgur.com/nFHTDo4.png)
