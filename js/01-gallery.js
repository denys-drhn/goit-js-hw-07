import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener('click', onGalleryContainerClick)

// 1. первий шаг -> создать разметку
function createGalleryMarkup(items) {
	const markup = items.map(({preview, original, description}) => {
		return `
	<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img
		class="gallery__image"
		src="${preview}"
		data-source="${original}"
		alt="${description}"
	/>
	</a>
	</div>
	`;
	}).join('');
	
	return markup;
};


// 1. второй шаг ->  рендер разметки + создание переменних
galleryContainer.innerHTML = galleryMarkup;


// 2. Реализация делегирования на div.gallery и получение url большого изображения

function onGalleryContainerClick(event) {
	event.preventDefault();      // *Запрети (перенаправлен на другую страницу) по умолчанию.

	// console.log(event.target.nodeName);
	if (event.target.nodeName !== "IMG") {
    return;
	}
	const selectedImg = event.target.dataset.source; // получение url большого изображения

	// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox:
	const instance = basicLightbox.create(`
	<img src="${selectedImg}" width="800" height="600">
`)
	instance.show();
};

// * Закрытие с клавиатуры: