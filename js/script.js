const header = document.querySelector("header");

window.addEventListener("scroll", function() {
header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open'); 
};

const sr = ScrollReveal ({
    distance: '200px',
    duration: 7000,
    reset: true
});

sr.reveal('.home-text h3',{delay:500, origin:'top'});
sr.reveal('.home-text',{delay:500, origin:'left'});
sr.reveal('.home-img',{delay:3000, origin:'right'});
sr.reveal('.animated-text',{delay:2500, origin:'left'});


sr.reveal('.about-text',{delay:2000, origin:'right'});
sr.reveal('.about-img',{delay:500, origin:'left'});

sr.reveal('.h3-mktg',{delay:900, origin:'right'});
sr.reveal('.about-hobbies',{delay:3000, origin:'bottom'});
sr.reveal('.skillbar',{delay:5000, origin:'right'});
sr.reveal('.container',{delay:2000, origin:'top'});

sr.reveal('.carousel-inner',{delay:2000, origin:'bottom'});
sr.reveal('.Gallery',{delay:700, origin:'top'});

sr.reveal('#audioPlayer',{delay:1900, origin:'bottom'});
sr.reveal('#playlist',{delay:9000, origin:'bottom'});
sr.reveal('.Music',{delay:1300, origin:'top'});
sr.reveal('.music-about',{delay:100, origin:'bottom'});
sr.reveal('.music-m-c',{delay:5000, origin:'top'});
sr.reveal('.music-about h6',{delay:15000, origin:'left'});

sr.reveal('.c-mainbx',{delay:500, origin:'top'});
sr.reveal('.work-text',{delay:500, origin:'left'});
sr.reveal('.main-text',{delay:500, origin:'left'});
sr.reveal('.main-contact',{delay:600, origin:'bottom'});



