import { gallery } from './gallery-items.js';

// const srcArray = gallery.map(el => el.original);

// const galleryContainerEl = document.querySelector('.js-gallery');
// const modalEl = document.querySelector('.js-lightbox');
// const modalImgEl = modalEl.querySelector('.lightbox__image');
// const closeModalBtn = modalEl.querySelector(
//   'button[data-action="close-lightbox"]',
// );
// const overlayEl = document.querySelector('.lightbox__overlay');

// galleryContainerEl.addEventListener('click', addOriginalLink);
// closeModalBtn.addEventListener('click', onClickBtnModalClose);
// overlayEl.addEventListener('click', onClickOverlayModalClose);
// window.addEventListener('keydown', onKeydownModalClose);
// window.addEventListener('keydown', onKeydownNextImg);
// window.addEventListener('keydown', onKeydownPrewImg);

// renderMarkup(galleryContainerEl, gallery, createMarkup);

// function createMarkup(array) {
//   return array
//     .map(({ preview, original, description }) => {
//       return `
//     <li class="gallery__item">
//       <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}"
//       data-source="${original}" alt="${description}" />
//       </a>
//     </li>
//     `;
//     })
//     .join('');
// }

// function renderMarkup(el, array, callback) {
//   el.insertAdjacentHTML('beforeend', callback(array));
// }

// function addOriginalLink(e) {
//   e.preventDefault();

//   const img = e.target;
//   const isImage = img.classList.contains('gallery__image');

//   if (!isImage) {
//     return;
//   }

//   onClickModalOpen(img.dataset.source);
// }

// function onClickModalOpen(source) {
//   modalImgEl.src = '';
//   modalEl.classList.add('is-open');

//   modalImgEl.src = source;
// }

// function onClickBtnModalClose(e) {
//   modalEl.classList.remove('is-open');
// }

// function onKeydownModalClose(e) {
//   if (e.code !== 'Escape') {
//     return;
//   }

//   modalEl.classList.remove('is-open');
// }

// function onClickOverlayModalClose(e) {
//   if (!e.target.classList.contains('lightbox__overlay')) {
//     return;
//   }
//   modalEl.classList.remove('is-open');
// }

// function onKeydownNextImg(e) {
//   if (e.code !== 'ArrowRight') {
//     return;
//   }

//   for (let i = 0; i < srcArray.length - 1; i += 1) {
//     if (modalImgEl.src === srcArray[i]) {
//       modalImgEl.src = '';
//       return (modalImgEl.src = srcArray[i + 1]);
//     }
//   }
// }

// function onKeydownPrewImg(e) {
//   if (e.code !== 'ArrowLeft' || modalImgEl.src === srcArray[0]) {
//     return;
//   }

//   for (let i = 0; i < srcArray.length; i += 1) {
//     if (modalImgEl.src === srcArray[i]) {
//       modalImgEl.src = '';
//       return (modalImgEl.src = srcArray[i - 1]);
//     }
//   }
// }

// ++++++++++++++++++++

// const galleryContainerEl = document.querySelector('.js-gallery');
// const modalImgEl = document.querySelector('.lightbox__image');
// const modalEl = document.querySelector('.lightbox');
// const closeModalBtnEl = document.querySelector(
//   'button[data-action="close-lightbox"]',
// );

// galleryContainerEl.addEventListener('click', onClickModalOpen);
// closeModalBtnEl.addEventListener('click', onClickBtnModalClose);
// modalEl.addEventListener('click', onClickOverlayModalClose);
// window.addEventListener('keydown', onKeydownModalClose);
// window.addEventListener('keydown', onKeydownNextImg);
// window.addEventListener('keydown', onKeydownPrewImg);

// const arrayOfSrces = gallery.map(el => el.original);

// renderMarkup(gallery, createMarkup);

// function createMarkup(arr) {
//   return arr
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//               <a
//               class="gallery__link"
//               href="${original}"
//               >
//               <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//               />
//             </a>
//           </li>`;
//     })
//     .join('');
// }

// function renderMarkup(arr, callback) {
//   galleryContainerEl.insertAdjacentHTML('beforeend', callback(arr));
// }

// function addModalOpenClass() {
//   modalEl.classList.add('is-open');
// }

// function onClickModalOpen(e) {
//   e.preventDefault();
//   if (!e.target.classList.contains('gallery__image')) {
//     return;
//   }

//   addModalOpenClass();
//   modalImgEl.src = e.target.dataset.source;
// }

// function onClickBtnModalClose(e) {
//   modalEl.classList.remove('is-open');
// }

// function onClickOverlayModalClose(e) {
//   if (e.target.classList.contains('lightbox__image')) {
//     return;
//   }
//   modalEl.classList.remove('is-open');
// }

// function onKeydownModalClose(e) {
//   if (e.code !== 'Escape') {
//     return;
//   }
//   modalEl.classList.remove('is-open');
// }

// function onKeydownNextImg(e) {
//   if (e.code !== 'ArrowRight') {
//     return;
//   }

//   for (let i = 0; i < arrayOfSrces.length; i += 1) {
//     if (modalImgEl.src === arrayOfSrces[arrayOfSrces.length - 1]) {
//       return;
//     }

//     if (modalImgEl.src === arrayOfSrces[i]) {
//       return (modalImgEl.src = arrayOfSrces[i + 1]);
//     }
//   }
// }

// function onKeydownPrewImg(e) {
//   if (e.code !== 'ArrowLeft' || modalImgEl.src === arrayOfSrces[0]) {
//     return;
//   }

//   for (let i = 0; i < arrayOfSrces.length; i += 1) {
//     if (modalImgEl.src === arrayOfSrces[i]) {
//       modalImgEl.src = '';
//       return (modalImgEl.src = arrayOfSrces[i - 1]);
//     }
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++

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
