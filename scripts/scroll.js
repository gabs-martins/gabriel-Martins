document.addEventListener('DOMContentLoaded', ()=> {
    const scrollLinks = document.querySelectorAll('.scroll-link')
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', e=>{
            e.preventDefault()
            const target = document.querySelector(link.dataset.scroll)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });            }
        })
    })
})

const subTitulo = document.querySelector('.home__subtitulo')

const typeWriter = (text)=>{
 const textArray =text.innerHTML.split('');
 text.innerHTML = ''
 textArray.forEach((letra,index)=>{
     setTimeout(()=>{
        text.innerHTML += letra
    }, 75*index)
 })
}
typeWriter(subTitulo)


const contato =document.querySelectorAll('[data-scroll=".contato"]')
contato.forEach(btn => {
    btn.addEventListener('click',()=>{
        const inputName = document.querySelector('.ativo')
        inputName.focus()
    })
    
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header__container');

    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > window.innerHeight - 50) {
        header.classList.add('padding-transition');
        header.style.padding = '1em';
        header.classList.add('header___fixed');
      } else {
        header.classList.remove('padding-transition');
        header.style.padding = '1.5em';
        header.classList.remove('header___fixed');
      }
    });
  });
