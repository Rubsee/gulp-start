import products from "./products";

export default (products, template, target, isTargetList = false, templateClass = '') => {
    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('.product__card');

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
        const imageEl = itemEl.querySelector('.product__image');
        const titleEl = itemEl.querySelector('.product__title');
        const priceEl = itemEl.querySelector('.product__price');
        const { id, image, title, price } = product;

        itemEl.dataset.productId = id;
        imageEl.src = image;
        titleEl.textContent = title;
        priceEl.textContent = `${price} ₽`;

        fragment.appendChild(itemEl);
    });
    target.innerHTML = '';
    target.append(fragment);
}