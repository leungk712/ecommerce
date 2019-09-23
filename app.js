let heartsIcon = document.querySelectorAll('.fa-heart');
let cartsIcon = document.querySelectorAll('.fa-cart-plus');
let sharesIcon = document.querySelectorAll('.fa-share-square');

heartsIcon.forEach((heart) => {
    heart.addEventListener('click', (e) => {
        e.preventDefault(e);
        heart.classList.toggle('heart');
    });
});

cartsIcon.forEach((cart) => {
    cart.addEventListener('click', (e) => {
        e.preventDefault(e);
        cart.classList.toggle('cart');
    });
});

sharesIcon.forEach((share) => {
    share.addEventListener('click', (e) => {
        e.preventDefault(e);
        share.classList.toggle('share');
    });
});