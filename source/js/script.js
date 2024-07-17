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