/*******************************************TOGGLE ICON NAVBAR************************************* */
let menuIcon=document.querySelector("#menu-icon");
let navBar=document.querySelector(".navBar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
};

/**********************************SCROLL SECTION ACTIVE LINK************************************* */
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

/*window.onscroll=()=>{
sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top>=offset && top< offset+height){
        navLinks.forEach.apply(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
    };
});
*/

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};


/******************************************STICKY NAVBAR****************************** */
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);


/*********************************************REMOVE TOGGLE ICON AND NAVBAR***************************** */
menuIcon.classList.remove('fa-mark');
navBar.classList.remove('active');


/***********************************************SCROLL REVEAL *********************************************** */
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', {origin:'button'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});


/**************************************TYPED  JS*************************************************** */
const typed=new typed('.multi-text')



