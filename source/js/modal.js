const modalOpen = document.querySelectorAll('.product-list__button');
const modal = document.querySelector('.slick-notification');
const modalClosed = document.querySelector('.slick-notification__close')
const modalContinue = document.querySelector('.slick-notification__accept');

modalOpen.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.add('slick-notification--showed');
        modalClosed.addEventListener('click', closeModal);
        modalContinue.addEventListener('click', closeModal);
    });
});

const closeModal = () => {
    modal.classList.remove('slick-notification--showed');
    modalClosed.remdoveEventListener('click', closeModal);
    modalContinue.removeEventListener('click', closeModal);
};