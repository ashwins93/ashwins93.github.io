$(document).ready(function() {
  $('#introduction button').click(function() {
    $('#introduction').fadeOut('slow', function() {
      $('#landing .title').fadeTo('slow', 1);
    });
  });

  $('a[href*="#"').click(function(event) {
    var target = $(this.hash);
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: target.offset().top - 50
      },
      1000
    );
  });

  $('.scroll-fade').css('opacity', 0);

  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $('.scroll-fade').each(function() {
      let objectBottom = $(this).offset().top + $(this).outerHeight() / 2;

      if (objectBottom < windowBottom) {
        $(this).fadeTo('slow', 1);
      }
    });
  });
});
