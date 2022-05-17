// comment form submit
const commentForm = document.querySelector('.commentForm');
const commentPostSubmit = document.querySelector('.commentContainer');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function commentSubmit(e) {
  e.preventDefault();
  const profilePic = document.querySelector('.popup');
  profilePic.style.display = 'block';

  const profilePicSelect = document.querySelector('.profilePicContainer');
  const selectedPic = document.querySelectorAll('.profilePic');
  console.log(selectedPic);
  const selectList = Array.from(selectedPic);
  console.log(selectList);
  const finalPic = selectList.addEventListener('click', (i) => {
    selectedPic[i].outerHTML;
  });
  console.log(finalPic);
  const nameSubmit = document.getElementById('name');
  const name = nameSubmit.value;
  const emailSubmit = document.getElementById('email');
  const email = emailSubmit.value;
  const commentSubmit = document.getElementById('comment');
  const comment = commentSubmit.value;
  
  const commentPost = document.createElement('div');
  commentPost.classList.add('commentPost');
  const commentPostPic = document.createElement('div');
  commentPostPic.classList.add('commentPostPic');
  const commentPostText = document.createElement('div');
  commentPostText.classList.add('commentPostText');
  const commentPoster = document.createElement('p');
  commentPoster.classList.add('commentPoster');
  const commentText = document.createElement('p');
  
  commentText.textContent = comment;
  const commentPostDate = new Date();
  commentPostDate.setUTCDate(16);
  commentPoster.textContent = `${days[commentPostDate.getDay()]} ${months[commentPostDate.getMonth()]} ${commentPostDate.getDate()}, ${commentPostDate.getFullYear()} by ${name}`;
  
  commentPostText.append(commentPoster, commentText);
  commentPost.append(commentPostPic, commentPostText);
  commentPostSubmit.append(commentPost);
}

commentForm.addEventListener('submit', commentSubmit);