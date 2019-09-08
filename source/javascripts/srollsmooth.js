// $(document).ready(function() {

//    /*Smooth the animation to get the anchor tag links*/
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//     });
//   });
// });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
