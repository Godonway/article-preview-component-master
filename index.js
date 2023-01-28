const share = document.getElementById('share');
const share_bar = document.getElementById('show_share_bar');

// share_bar.style.backgroundColor = 'black'
// share.style.backgroundColor = 'black'

share.addEventListener('click',()=>{
  share_bar.classList.toggle('share');
})