import gallery from './gallery-items.js';

const galleryEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalImgEl = document.querySelector('.lightbox__image');

galleryEl.addEventListener('click', onClickModalOpen);
modalEl.addEventListener('click', onClickModalClose);
modalEl.addEventListener('click', onClickOverlayModalClose);
window.addEventListener('keydown', onKeydownBtnModalClose);
window.addEventListener('keydown', onKeydownNextImg);
window.addEventListener('keydown', onKeydownPrewImg);

const markupString = createMarkup(gallery);
renderMarkup(markupString, galleryEl);
const arrOfSrces = gallery.map(e => e.original);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

function renderMarkup(string, parentNode) {
  parentNode.insertAdjacentHTML('beforeend', string);
}

function onClickModalOpen(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  modalEl.classList.add('is-open');
  modalImgEl.src = e.target.dataset.source;
}

function onKeydownBtnModalClose(e) {
  if (e.code !== 'Escape') {
    return;
  }
  modalEl.classList.remove('is-open');
}

function onClickModalClose(e) {
  if (e.target.dataset.action !== 'close-lightbox') {
    return;
  }
  modalEl.classList.remove('is-open');
}

function onClickOverlayModalClose(e) {
  console.log(e.target);
  if (e.target.classList.contains('lightbox__image')) {
    return;
  }
  modalEl.classList.remove('is-open');
}

function onKeydownNextImg(e) {
  if (e.code !== 'ArrowRight') {
    return;
  }

  for (let i = 0; i < arrOfSrces.length; i += 1) {
    if (modalImgEl.src === arrOfSrces[arrOfSrces.length - 1]) {
      return;
    }

    if (modalImgEl.src === arrOfSrces[i]) {
      modalImgEl.src = '';
      return (modalImgEl.src = arrOfSrces[i + 1]);
    }
  }
}

function onKeydownPrewImg(e) {
  if (e.code !== 'ArrowLeft' || modalImgEl.src === arrOfSrces[0]) {
    return;
  }

  for (let i = 0; i < arrOfSrces.length; i += 1) {
    if (modalImgEl.src === arrOfSrces[i]) {
      modalImgEl.src = '';
      return (modalImgEl.src = arrOfSrces[i - 1]);
    }
  }
}
