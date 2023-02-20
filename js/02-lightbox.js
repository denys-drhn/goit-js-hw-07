import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener('click', onGalleryContainerClick);



// 1. первий шаг -> создать разметку
function createGalleryMarkup(items) {
	return items.map(({preview, original, description}) => {
		return `
	<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img
		class="gallery__image"
		src="${preview}"
		alt="${description}"
	/>
	</a>
	</div>
	`;
	}).join('');
	
};

// 1. второй шаг ->  рендер разметки + создание переменних
galleryContainer.innerHTML = galleryMarkup;


function onGalleryContainerClick(event) {
	event.preventDefault();	// *Запрети (перенаправлен на другую страницу) по умолчанию.
	
	// *нажатие только по тегу IMG:
	if (event.target.nodeName !== "IMG") { 
	return;
	};
}

// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery:
// 4. добавь отображение подписей к изображениям из атрибута alt 
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения:
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });