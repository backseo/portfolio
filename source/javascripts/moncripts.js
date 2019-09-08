$(document).ready(function() {

  $(".imgover").hover(
    function(){ $(this).addClass('img-m-over') },
    function(){ $(this).removeClass('img-m-over') }
  );

  $(".img").hover(
    function(){ $(this).addClass('img-m-over') },
    function(){ $(this).removeClass('img-m-over') }
  );

 });

/* show hide autodesk sections*/
    var cible = $('.a-wrapper-titles ul li');
      cible.on('click', function(){
      $(this).next('.a-container').toggleClass('hider');
    });

/*navbar shrink */
$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    $('.navbar-ficel').css("height", 60);
    $('.navbar-ficel-brand img').css("height", 60)
  } else {
    $('.navbar-ficel').css("height", 90);
    $('.navbar-ficel-brand img').css("height", 85)
  }
});


















