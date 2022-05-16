// carousel image slider on home page
const extraPicsContainer = document.querySelector('.extraPicturesContainer');
const extraPicsLi = document.querySelectorAll('.extraPicturesContainer li');
const carouselPics = document.querySelector('.carouselPics');
const prevArrow = document.querySelector('.prevArrow');
const nxtArrow = document.querySelector('.nxtArrow');
const slidePicsSize = extraPicsLi[0].clientWidth;
const slidePicsPosition = (extraPicsLi, index) => {
  extraPicsLi.style.left = slidePicsSize * index + 'px'
};
extraPicsLi.forEach(slidePicsPosition);
nxtArrow.addEventListener('click', e => {
  const currentPic = extraPicsContainer.querySelector('.currentPic');
  const nextPic = currentPic.nextElementSibling;
  const prevPic = currentPic.previousElementSibling;
  if (nextPic === null) {
    alert("End of Photos");
  } else {
    currentPic.classList.remove('currentPic');
    nextPic.classList.add('currentPic');
  }
  currentPic.style.left = '0px';
  prevPic.style.left = '-700px';
});
prevArrow.addEventListener('click', e => {
  const currentPic = extraPicsContainer.querySelector('.currentPic');
  const nextPic = currentPic.nextElementSibling;
  const prevPic = currentPic.previousElementSibling;
  if (prevPic === null) {
    alert("Start of Photos");
  } else {
    currentPic.classList.remove('currentPic');
    prevPic.classList.add('currentPic');
  }
  currentPic.style.left = '0px';
  nextPic.style.left = '700px';
});