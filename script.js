const addToCart = document.querySelector('button[data-value="cart"]');
const amount = document.querySelector('.count');
const quantity = document.querySelector('.quantity');
let count = parseFloat(quantity.textContent);
const productImgSrc = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.product-items');
const navItems = document.querySelectorAll('.nav-items');

console.log(productImgSrc);
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
