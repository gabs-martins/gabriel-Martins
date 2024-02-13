const btn = document.querySelector('#menu-burger')
const menuMobile = document.querySelector('.header___mobile')
const header = document.querySelector('.header__container')
const fechar = document.querySelector('#fechar')

const btns = document.querySelectorAll('.x');

btns.forEach(b => {
  b.addEventListener('click', () => {
    header.style.display = header.style.display === 'none' ? 'flex' : 'none';
    
    menuMobile.classList.toggle('menu__active')
    
  });
});

