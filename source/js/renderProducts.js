import { addProductToCart } from './productCart.js';

export default (products, template, target, isTargetList = false, templateClass = '') => {
    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('.product-list__card');

    if (isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, function (attr) {
            node.setAttribute(attr.name, attr.value);
        });

        node.classList.add(templateClass);

        productEl = node;
    }

    products.forEach(product => {
        const itemEl = productEl.cloneNode(true);
        const linkEl = itemEl.querySelector('.product-list__link');
        const imageEl = itemEl.querySelector('.product-list__image');
        const titleEl = itemEl.querySelector('.product-list__title');
        const priceNewEl = itemEl.querySelector('.product-list__price.product-list__price--new');
        const priceOldEl = itemEl.querySelector('.product-list__price.product-list__price--old');
        const buttonEl = itemEl.querySelector('.product-list__button');
        const arrowImgEl = itemEl.querySelector('.product-list__arrow');
        const modal = document.querySelector('.slick-notification');
        const modalClosed = document.querySelector('.slick-notification__close')
        const modalContinue = document.querySelector('.slick-notification__accept.black-button');
        const { id, link, image, title, priceNew, priceOld } = product;

        itemEl.dataset.productId = id;
        linkEl.href = link;
        imageEl.src = image;
        titleEl.textContent = title;
        priceNewEl.textContent = `${priceNew} ₽`;
        priceOldEl.textContent = `${priceOld} ₽`;
        buttonEl.className = 'product-list__button';
        buttonEl.appendChild(arrowImgEl);

        if (product.id == 1 && window.innerWidth >= 768) {
            itemEl.classList.add('product-list__card--big');
            itemEl.classList.add('product-list__label');
            itemEl.classList.add('product-list__label--hot');
            itemEl.classList.add('product-list__label--big');
            itemEl.classList.add('best-selling__product-wrapper--1-3');
        }

        if (product.id == 1 && window.innerWidth <= 767) {
            itemEl.classList.add('product-list__label');
            itemEl.classList.add('product-list__label--hot');
        }

        if (product.id == 2) {
            itemEl.classList.add('product-list__label');
            itemEl.classList.add('product-list__label--new');
        }

        // Вызов модального окна о подтверждении добавления товара в корзину

        buttonEl.addEventListener('click', () => {
            modal.classList.add('slick-notification--showed');
            addProductToCart(product);
        });

        const closeModal = () => {
            modal.classList.remove('slick-notification--showed');
        };

        modalClosed.addEventListener('click', closeModal);
        modalContinue.addEventListener('click', closeModal);

        fragment.appendChild(itemEl);
    });

    target.innerHTML = '';
    target.append(fragment);
}