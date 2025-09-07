let ul = document.getElementById('menu');
let menuIcon = document.querySelector('.hum i');

ul.style.maxHeight = '0px';

function tm() {
    if (ul.style.maxHeight == '0px') {
        ul.style.maxHeight = '300px';
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        ul.style.maxHeight = '0px';
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
}