import formatPrice from './formatPrice.js';
import { addToStorage, removeFromStorage, getStorage } from './localstorage.js';

const buttonOpened = document.querySelector('.user-nav__button.user-nav__button--shop');
const shoppingCart = document.querySelector('.shopping-cart');
const buttonClosed = document.querySelector('.shopping-cart__close');

const cart = document.querySelector('.shopping-cart');
const cartList = document.querySelector('.shopping-cart__list');
const cartProductTemplate = document.querySelector('.shopping-cart-product').content;
export const cartCount = buttonOpened.querySelector('.user-nav__button.user-nav__button--pin');

buttonOpened.addEventListener('click', () => {
    shoppingCart.classList.add('shopping-cart--active');
    buttonClosed.addEventListener('click', closeShoppingCart);
});

const closeShoppingCart = () => {
    shoppingCart.classList.remove('shopping-cart--active');
    buttonClosed.removeEventListener('click', closeShoppingCart);
};

const removeProductFromCart = (productId) => {
    const node = cartList.querySelector(`[data-product-id="${productId}"]`);
    node.remove();
    cartCount.textContent = cartList.childElementCount;

    if (!cartList.childElementCount) {
        cart.classList.remove('shopping-cart--active');
    }
    removeFromStorage('cart', productId);
};

const addProductToCart = (product, isClick = false) => {

    const node = cartProductTemplate.querySelector('.shopping-cart__item').cloneNode(true);

    node.dataset.productId = product.id;
    node.querySelector('.shopping-cart__image').src = product.image;
    node.querySelector('.shopping-cart__name').textContent = product.name;
    node.querySelector('.shopping-cart__price').textContent = formatPrice(product.price);

    if (isClick) {
        addToStorage('cart', product);
        cartCount.textContent = getStorage('cart')?.length;
    }

    cartList.append(node);
};

if (getStorage('cart')?.length) {
    getStorage('cart').forEach(product => {
        addProductToCart(product);
    });
    cartCount.textContent = getStorage('cart').length;
}

document.addEventListener('click', (event) => {
    if (!shoppingCart.contains(event.target) && !buttonOpened.contains(event.target)) {
        closeShoppingCart();
    }
});

export { removeProductFromCart, addProductToCart };