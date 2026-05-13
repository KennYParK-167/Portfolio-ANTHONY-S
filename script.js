const navBtn = document.querySelector('#btn-nav-mobile');
const navMobile = document.querySelector('.nav-mobile');

navMobile.classList.add('hidden');

navBtn.addEventListener('click', () => {
  navMobile.classList.toggle('hidden');
})