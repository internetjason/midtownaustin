$(window).scroll(function() {
    if ($(document).scrollTop() > 360) {
        $('nav').addClass('shrink navbar-fixed-top');
        $('nav').removeClass('navbar-static-top');
    } else {
        $('nav').addClass('navbar-static-top');
        $('nav').removeClass('shrink navbar-fixed-top');
    }
});
