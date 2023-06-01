const addToCart = document.querySelector('button[data-value="cart"]');
const amount = document.querySelector('.count');
const quantity = document.querySelector('.quantity');
let count = parseFloat(quantity.textContent);
const productImgSrc = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.product-items');
const navItems = document.querySelectorAll('.nav-items');
const cart = document.querySelector('.cart');
const cartSection = document.querySelector('.cart-section');
const emptyCart = document.querySelector('.empty');
const cartItemCount = document.querySelector('.cart-item-count');

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
});

thumbnails.forEach(img =>
  img.addEventListener('click', e => {
    for (let i = 1; i <= 4; i++) {
      if (e.target.classList.contains(`p-${i}`)) {
        productImgSrc.setAttribute('src', `/images/image-product-${i}.jpg`);
      }
    }
  })
);
cart.addEventListener('click', () => cartSection.classList.toggle('showCart'));

addToCart.addEventListener('click', function cart() {
  if (parseFloat(quantity.textContent) > 0) {
    cartSection.insertAdjacentHTML(
      'afterbegin',
      `<h3>Cart</h3>
      <hr class="cart-line">
      <div class="cart-inner">
      <img class="cart-img" src="/images/image-product-1-thumbnail.jpg" alt="">
      <h2 class="cart-title">Fall Limited Edition Sneakers</h2>
      <h4 class="cart-price">$125.00 x <span class="item-quantity"></span> 3 <span class="arrow">&rarr; </span><strong class="cart-total">$375.00</strong></h4>
      <button class="delete">🗑️</button>
      <button class="checkout">Checkout</button>
      </div>`
    );
    addToCart.removeEventListener('click', cart);
    emptyCart.remove();
  }
});
