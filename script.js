/*======== Menu icon navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-MrxDragon');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*======== scroll sections active link==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*======== Sticky navbar ==============*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*======== remove menu icon navbar when click navbar link (scroll) ==============*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}



/*======== Swiper ==============*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*======== Dark Light mode ==============*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

/*======== ScrollReveal ==============*/

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content-MrxDragon, .heading-MrxDragon', { origin: 'top'});
ScrollReveal().reveal('.home-MrxDragon-img img, .services-container-MrxDragon, .portfolio-box-MrxDragon, .testimonial-content-MrxDragon, .contact-MrxDragon form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content-MrxDragon h1, .about-img-MrxDragon img', { origin: 'left'});
ScrollReveal().reveal('.home-content-MrxDragon h3, .home-content-MrxDragon p, .about-content-MrxDragon', { origin: 'right'});


/*======== Read More Popup Box ==============*/
const serviceItems = document.querySelector(".services-container-MrxDragon");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
     popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}

/*======== Read More Popup Box ==============*/
