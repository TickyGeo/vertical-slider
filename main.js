const slider = document.querySelector('.slider');
const big = document.querySelector('.slider .big');
const radio = document.querySelectorAll('.slider .radio input');
const items = document.querySelectorAll('.slider .big .item');
const images = document.querySelectorAll('.slider .big .item img');

let cur = 0;
let bool;
let mouseY;

slider.onmousedown = e => {
    if (e.button == 0) {
        bool = true;
        mouseY = e.y;
    };
};

slider.onmouseup = () => bool = false; 


slider.onmousemove = e => {
    if (bool) {
        e.y < mouseY ? cur -= 100 : e.y > mouseY ? cur += 100 : '';
        cur > 0 ? cur = (items.length - 1) * -100 : cur == items.length * -100 ? cur = 0 : '';
        bool = false;
        big.style.top = cur + '%';
        radio[cur / -100].checked = true;
    };
};



for (let i = 0; i < radio.length; i++) {
    radio[i].style.backgroundImage = `url(${images[i].src})`;  
    radio[i].onchange = () => {
        cur = i * -100;
        big.style.top = cur + '%';
    };
};