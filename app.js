let heartIcon = document.getElementsByClassName('fa-heart')[0];

heartIcon.addEventListener('click', (event) => {
    event.preventDefault(event);
    heartIcon.classList.toggle("heart");
});