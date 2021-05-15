import {gallery} from './gallery-items.js'

const srcArray = gallery.map(el => el.original);

const galleryContainerEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalImgEl = modalEl.querySelector('.lightbox__image');
const closeModalBtn = modalEl.querySelector('button[data-action="close-lightbox"]')
const overlayEl = document.querySelector('.lightbox__overlay')

galleryContainerEl.addEventListener('click', addOriginalLink);
closeModalBtn.addEventListener('click', onClickBtnModalClose);
overlayEl.addEventListener('click', onClickOverlayModalClose);
window.addEventListener('keydown', onKeydownModalClose);
window.addEventListener('keydown', onKeydownNextImg);
window.addEventListener('keydown', onKeydownPrewImg);

renderMarkup(galleryContainerEl, gallery, createMarkup);

function createMarkup(array) {
  return array.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"
      data-source="${original}" alt="${description}" />
      </a>
    </li>
    `
  }).join('');
}

function renderMarkup(el, array, callback) {
  el.insertAdjacentHTML('beforeend', callback(array))
}

function addOriginalLink(e) {
  e.preventDefault()
  
  const img = e.target;
  const isImage = img.classList.contains('gallery__image')

  if (!isImage) {    
    return
  }

  onClickModalOpen(img.dataset.source);
}

function onClickModalOpen(source) {
  
  modalImgEl.src = '';
  modalEl.classList.add('is-open');
  
  modalImgEl.src = source;
  
}

function onClickBtnModalClose(e) {
  modalEl.classList.remove('is-open')
}

function onKeydownModalClose(e) {
  if (e.code !== 'Escape') {
    return
  }

  modalEl.classList.remove('is-open')
}

function onClickOverlayModalClose(e) {
  if (!e.target.classList.contains('lightbox__overlay')) {
    return
  }
  modalEl.classList.remove('is-open');
}

function onKeydownNextImg(e) {
  if (e.code !== 'ArrowRight') {
    return
  }
  
  // console.log(modalImgEl.src === srcArray[1])
  // modalImgEl.src = srcArray[1]
  
  for (let i = 0; i < srcArray.length - 1; i += 1) {
    if (modalImgEl.src === srcArray[i]) {

      return modalImgEl.src = srcArray[i + 1];      
    }
  }
}

function onKeydownPrewImg(e) {
  if (e.code !== 'ArrowLeft' || modalImgEl.src === srcArray[0]) {
    return
  }
  
  for (let i = 0; i < srcArray.length; i += 1) {

    if (modalImgEl.src === srcArray[i]) {
      modalImgEl.src = '';
      return modalImgEl.src = srcArray[i - 1];
    }
  }
}