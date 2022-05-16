// sliding-menu
const menuLogo = document.querySelector('.slidingMenu');
const menuBar = document.querySelector('.slidingMenuBar');
function menuClick(event) {
  event.target.classList.toggle('clickedMenu');
  menuBar.classList.toggle('clickedMenuBar');
}
menuLogo.addEventListener('click', menuClick);
