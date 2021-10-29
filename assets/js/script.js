/*===== MENU SHOW =====*/ 
const toggle = document.querySelector('#nav-toggle');

function showMenu() {
    const menu = document.querySelector('#nav-menu');
    menu.classList.toggle('show'); 
}

toggle.addEventListener('click', showMenu);

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //  Verifica cada link e remove a class active caso exista, depois adiciona ela
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');

    //  Remove a class show do menu para que ele feche quando um link for selecionado
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/

/*SCROLL HOME*/


/*SCROLL ABOUT*/

/*SCROLL SKILLS*/


/*SCROLL WORK*/


/*SCROLL CONTACT*/





