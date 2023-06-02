const addToCart = document.querySelector('button[data-value="cart"]');
const amount = document.querySelector('.count');
const quantity = document.querySelector('.quantity');
const productImgSrc = document.querySelector('.main-img');
let productImgSrc2 = document.querySelector('.main-img-2');
const thumbnails = document.querySelectorAll('.product-items');
const navItems = document.querySelectorAll('.nav-items');
const cart = document.querySelector('.cart');
const cartSection = document.querySelector('.cart-section');
const emptyCart = document.querySelector('.empty');
const cartItemCount = document.querySelector('.cart-item-count');
const price = parseFloat(document.querySelector('.price-1').textContent);
const cartInner = document.querySelector('.cart-inner');
const showCart = document.querySelector('.showCart');
const productName = document.querySelector('.product-name');
const overlay = document.querySelector('.overlay');
const gallery = document.querySelector('.product-gallery');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const products = document.querySelectorAll('.p');
const products2 = document.querySelectorAll('.d');
console.log(products.length);
console.log(thumbnails);
let count = 0;
let index = 1;
amount.addEventListener('click', e => {
  if (e.target.classList.contains('plus')) {
    count++;
    quantity.textContent = count;
  } else if (e.target.classList.contains('minus')) {
    if (count === 0) {
      return;
    }
    count--;
    quantity.textContent = count;
  }
  console.log(count);
});

thumbnails.forEach(img =>
  img.addEventListener('click', e => {
    for (let i = 1; i <= 4; i++) {
      if (e.target.classList.contains(`p-${i}`)) {
        index = i;
        productImgSrc.setAttribute('src', `/images/image-product-${i}.jpg`);
        if (e.target.classList.contains(`p-${i}`)) {
          products.forEach(img => img.classList.remove('p-border'));
          e.target.classList.add('p-border');
        }
      } else if (e.target.classList.contains(`d-${i}`)) {
        productImgSrc2.setAttribute('src', `/images/image-product-${i}.jpg`);
        products2.forEach(img => img.classList.remove('d-border'));
        e.target.classList.add('d-border');
      }
    }
  })
);
cart.addEventListener('click', () => cartSection.classList.toggle('showCart'));

addToCart.addEventListener('click', function cart() {
  if (parseFloat(quantity.textContent) > 0) {
    cartSection.insertAdjacentHTML(
      'afterbegin',
      `<div class="added-section">
      <h3>Cart</h3>
      <hr class="cart-line">
      <div class="cart-inner">
      <img class="cart-img" src="/images/image-product-1-thumbnail.jpg" alt="">
      <h2 class="cart-title">${productName.textContent}</h2>
      <h4 class="cart-price">$125.00 x <span class="item-quantity"></span> ${count} <span class="arrow">&rarr; </span><strong class="cart-total">$${
        price * count
      }.00</strong></h4>
      <button class="delete">🗑️</button>
      <button class="checkout">Checkout</button>
      </div>
      </div>`
    );
    cartItemCount.style.display = 'block';
    emptyCart.style.display = 'none';
    cartItemCount.innerHTML = `<h4 class="cartItem-amount">${count}</h4>`;
  }
});

cartSection.addEventListener('click', e => {
  const addedElement = document.querySelector('.added-section');
  if (e.target.classList.contains('delete')) {
    addedElement.remove();
    emptyCart.style.display = 'flex';
    cartItemCount.style.display = 'none';
  }
});
productImgSrc.addEventListener('click', () => {
  productImgSrc2.src = productImgSrc.src;
  productImgSrc2.getAttribute('src');
  overlay.style.display = 'block';
  gallery.style.display = 'block';
  console.log(index);
});

rightBtn.addEventListener('click', () => {
  index++;
  if (index > products.length) {
    index = 1;
  }
  productImgSrc2.setAttribute('src', `/images/image-product-${index}.jpg`);
  console.log(index);
});
leftBtn.addEventListener('click', () => {
  index--;
  if (index < 1) {
    index = products.length;
  }
  productImgSrc2.setAttribute('src', `/images/image-product-${index}.jpg`);
  console.log(index);
});
