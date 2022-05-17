// carousel image slider on home page
const picsContainer = document.querySelector('.extraPicturesContainer');
const picsList = Array.from(picsContainer.children);

const nxtBtn = document.querySelector('.nxtArrow');
const prevBtn = document.querySelector('.prevArrow');

const picSize = picsList[0].clientWidth;

const setImgPosition = (slide, index) => {
  slide.style.left = picSize * index + 'px';
}
picsList.forEach(setImgPosition);

const moveImg = (picsContainer, currentImg, slideImg) => {
  picsContainer.style.transform = 'translateX(-' + slideImg.style.left + ')';
  currentImg.classList.remove('currentPic');
  slideImg.classList.add('currentPic');
}

nxtBtn.addEventListener('click', e => {
  const currentImg = picsContainer.querySelector('.currentPic');
  const nextImg = currentImg.nextElementSibling;
  
  moveImg(picsContainer, currentImg, nextImg);
})

prevBtn.addEventListener('click', e => {
  const currentImg = picsContainer.querySelector('.currentPic');
  const prevImg = currentImg.previousElementSibling;
  
  moveImg(picsContainer, currentImg, prevImg);
})