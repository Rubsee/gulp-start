const buttonOpened = document.querySelector('.menu-buttons__burger--showed');
const mainNav = document.querySelector('.main-nav');
const userNav = document.querySelector('.user-nav');
const buttonClosed = document.querySelector('.main-nav__close');

buttonOpened.addEventListener('click', () => {
    mainNav.classList.add('main-nav--showed');
    userNav.classList.add('user-nav__showed');
    buttonClosed.addEventListener('click', closeMainNav);
});

const closeMainNav = () => {
    mainNav.classList.remove('main-nav--showed');
    userNav.classList.remove('user-nav__showed');
    buttonClosed.removeEventListener('click', closeMainNav);
};

const modalOpen = document.querySelectorAll('.product__button');
const modal = document.querySelector('.slick-notification');
const modalClosed = document.querySelector('.slick-notification__close')
const modalContinue = document.querySelector('.slick-notification__accept');

modalOpen.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.add('slick-notification--showed');
        modalClosed.addEventListener('click', closeModal);
        modalContinue.addEventListener('click', closeModal);
    })
})

const closeModal = () => {
    modal.classList.remove('slick-notification--showed');
    modalClosed.remdoveEventListener('click', closeModal);
    modalContinue.removeEventListener('click', closeModal);
}