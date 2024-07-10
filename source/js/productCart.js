const buttonOpened = document.querySelector('.user-nav__button.user-nav__button--shop');
const shoppingCart = document.querySelector('.shopping-cart');
const buttonClosed = document.querySelector('.shopping-cart__close');
const cart = document.querySelector('.shopping-cart');
const cartList = document.querySelector('.shopping-cart__list');
const cartCount = document.querySelector('.user-nav__button.user-nav__button--pin');
const cartProductTemplate = document.querySelector('#shopping-cart-product');

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
};

const addProductToCart = (product) => {
    const node = cartProductTemplate.querySelector('.shopping-cart__item').cloneNode(true);

    node.dataset.productId = product.id;
    node.querySelector('.shopping-cart__image').src = product.image;
    node.querySelector('.shopping-cart__name').textContent = product.name;
    node.querySelector('.shopping-cart__price').textContent = `${product.price} ₽`;

    // node.querySelector('.shopping-cart__delete').addEventListener('click', (event) => {
    //     removeProductFromCart(product.id);
    //     event.stopPropagation();
    // });

    cartList.append(node);
    cartCount.textContent = cartList.childElementCount;
};