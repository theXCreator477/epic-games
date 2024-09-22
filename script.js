const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const icon = document.querySelector('.fa-angle-down')
const mobileMenu = document.querySelector('.ddm-container.mobile')
const cross = document.querySelector('.cross-icon')

let list = [dropdownMenu, dropdownToggle]

const handleMouseOver = () => {
    if (window.innerWidth > 1000) {
        dropdownMenu.classList.toggle('show');
        icon.classList.toggle('icon-flip');
    }
};

const handleMouseOut = () => {
    if (window.innerWidth > 1000) {
        dropdownMenu.classList.toggle('show');
        icon.classList.toggle('icon-flip');
    }
};

list.forEach(item => {
    item.addEventListener('mouseover', handleMouseOver);
    item.addEventListener('mouseout', handleMouseOut);
})

window.addEventListener('mousemove', () => {
    if (dropdownMenu.classList.contains('show')) {
        icon.classList.add('icon-flip')
    } else icon.classList.remove('icon-flip')
})

dropdownToggle.addEventListener('click', () => {

    if (window.innerWidth <= 1000) {
        mobileMenu.classList.toggle('show');
    }
})

cross.addEventListener('click', () => {
    mobileMenu.classList.remove('show')
})