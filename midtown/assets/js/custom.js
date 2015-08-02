$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('nav').addClass('shrink navbar-default navbar-fixed-top');
        $('nav').removeClass('navbar-inverse');
        $('#logo').removeClass('white-logo');
        $('#logo').addClass('color-logo');
    } else {
        $('nav').addClass('navbar-inverse navbar-static-top');
        $('nav').removeClass('shrink navbar-default navbar-fixed-top');
        $('#logo').removeClass('color-logo');
        $('#logo').addClass('white-logo');
    }
});
