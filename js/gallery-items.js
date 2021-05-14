// export default
const gallery = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// -----------------------------------------------------


const galleryContainerEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const closeModalBtn = modalEl.querySelector('button[data-action="close-lightbox"]')
const overlayEl = document.querySelector('.lightbox__overlay')



galleryContainerEl.addEventListener('click', addOriginalLink);
closeModalBtn.addEventListener('click', onClickModalClose);
window.addEventListener('keydown', onKeydownModalClose);
overlayEl.addEventListener('click', onClickOverlayModalClose)

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
  const modalImgEl = modalEl.querySelector('.lightbox__image')
  modalImgEl.src = '';
  modalEl.classList.add('is-open');
  
  modalImgEl.src = source;
  
}

function onClickModalClose(e) {

  modalEl.classList.remove('is-open')
}

function onKeydownModalClose(e) {
  if (e.code !== 'Escape') {
    return
  }

  modalEl.classList.remove('is-open')
}

function onClickOverlayModalClose(e) {
  console.log(e.target)
  if (!e.target.classList.contains('lightbox__overlay')) {
    return
  }
  modalEl.classList.remove('is-open');
}

// console.log(closeModalBtn)

// console.log(createMarkup(gallery))
// console.log(gallery[0].description)
