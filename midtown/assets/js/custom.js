$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('nav').addClass('shrink navbar-default navbar-fixed-top');
        $('nav').removeClass('navbar-inverse');
        $('#logo').attr('src', 'img/midtown-church-austin-logo-vector.svg');
    } else {
        $('nav').addClass('navbar-inverse navbar-static-top');
        $('nav').removeClass('shrink navbar-default navbar-fixed-top');
        $('#logo').attr('src', 'img/midtown-church-austin-logo-white-vector.svg');
    }
});
