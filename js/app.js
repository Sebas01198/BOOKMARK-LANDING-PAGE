// HEADER
//desplegar modal del navbar
const btnMenu = document.querySelector('.header__menu');
const btnCloseModal = document.querySelector('.navbar-modal__close');
const navbarModal = document.querySelector('.navbar-modal');

btnMenu.addEventListener('click',()=>{
    navbarModal.style.display = 'block';
});
btnCloseModal.addEventListener('click', ()=>{
    navbarModal.style.display = 'none';
});

    





