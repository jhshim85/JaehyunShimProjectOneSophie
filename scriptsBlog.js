// comment form submit
const commentForm = document.querySelector('.commentForm');
const commentPostSubmit = document.querySelector('.commentContainer');

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function commentSubmit(e) {
  e.preventDefault();
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
  const commentPostDate = new Date();
  commentPostDate.setUTCDate(16);
  const commentName = document.createElement('span');
  const commentText = document.createElement('p');
  
  commentText.textContent = comment;
  commentName.textContent = name;
  commentPoster.append(commentPostDate, name);
  commentPostText.append(commentPoster, commentText);
  commentPost.append(commentPostPic, commentPostText);
  commentPostSubmit.append(commentPost);
  console.log(commentPostText);
}

commentForm.addEventListener('submit', commentSubmit);