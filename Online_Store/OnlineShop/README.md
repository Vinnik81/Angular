# OnlineShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Annotation

Курсовой проект по предмету веб-программирование. Название проекта: "Online Shop". Проект разработан с использованием технологии разработки web-приложений Angular с использованием библиотеке RxJS. Проект состоит из главной страницы на которой находится Tab group с общей информацией и рекламной ирформацией о товаре. Страницы под названием товары на которой находяться карточки с краткой информацией о товаре. На карточке имеются кнопки "В Корзину", которая добавляет товар в корзину, кнопка "Подробно" раскрывает полную ифрмацию о товаре, кнопка "Редактировать" имеет две вкладки "Удалить" при нажатии удаляет товар из списка и "Редактировать" которая изменяет информацию о товаре. Страница "Корзина" показывает информацию о товарах, которые были добавлены в корзину. При нажатии на кнопки "+" добавляется количество данного товара, при нажатии на "-" уменьшается количество товара вплоть до удаления из корзины. На страницы товары имеется кнопка "Добавить Товар" при нажатии на которую открывается диалоговое окно для добавления товара. Данные сохраняются в db.json файл с помощью JSON Server. На главную страницу можно вернутся при нажатии либо на кнопку "Главная" или на знак "Online Shop". При неправильной маршрутизации по сайту, пользователь выходит на главную страницу. Для стилизации проекта использовалось библиотека  material.angular.io.