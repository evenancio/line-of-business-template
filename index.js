const mobileMenu = document.querySelector('.mobile-menu');
const backgrop = document.querySelector('.backdrop');
const darkMode = document.querySelector('.user-settings__dark-mode');
const lightMode = document.querySelector('.user-settings__light-mode');

mobileMenu.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

backgrop.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});

darkMode.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
});

lightMode.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
});
