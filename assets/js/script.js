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
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.btn', {delay: 200});;
sr.reveal('.home__image', {delay: 200});
sr.reveal('.home__social-icon', {interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__image',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__image',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__image',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 






