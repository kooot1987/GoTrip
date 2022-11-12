const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true, /*бесконечная прокрутка*/ 
    margin: 20, /*расстояние между картинками*/ 
    startPosition: 1,
    items: 3,
    responsive: {
        850: {
             items: 3,
             startPosition: 1,
        },
        1000: {
             margin: 20,
             items: 3,
        },
        1200: {
             margin: 30,
        },
  },
});

$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});

//burger

const navBtn = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function() {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}
