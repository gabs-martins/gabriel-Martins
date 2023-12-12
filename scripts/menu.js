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

// btn.addEventListener('click',()=>{
//   header.style.display = 'none'
//   menuMobile.classList.add=''
//   menuMobile.style.display = 'flex'
// })

// fechar.addEventListener('click',()=>{
//   menuMobile.classList.remove=''
//   header.style.display = 'flex'
//   menuMobile.style.display = 'none'
// }
//   )


