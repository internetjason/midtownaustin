jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 150) {
        jQuery('nav').addClass('shrink navbar-default navbar-fixed-top');
        jQuery('nav').removeClass('navbar-inverse');
        jQuery('#logo').removeClass('white-logo');
        jQuery('#logo').addClass('color-logo');
    } else {
        jQuery('nav').addClass('navbar-inverse navbar-static-top');
        jQuery('nav').removeClass('shrink navbar-default navbar-fixed-top');
        jQuery('#logo').removeClass('color-logo');
        jQuery('#logo').addClass('white-logo');
    }
});
