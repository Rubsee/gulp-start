import products from './products.js';
import renderProducts from './renderProducts.js';

const catalogList = document.querySelector('.best-selling__product-wrapper product');
const catalogItemTemplate = document.querySelector('#product__exam').content;

renderProducts(products, catalogItemTemplate, catalogList, false, '');