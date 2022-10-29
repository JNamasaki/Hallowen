//  Menu

const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navClose = document.getElementById('nav__close');

// Validando se a constante existe ( Mostra Menu)

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
        console.log('toogle')
    });
}

// Validando se a constante existe ( Esconde Menu)

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    });
}


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav__menu');
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//    CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') :
        header.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)