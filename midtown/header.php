<?php ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <title><?php
global $page, $paged;
wp_title( '|', true, 'right' );
bloginfo( 'name' );
$site_description = get_bloginfo( 'description', 'display' );
if ( $site_description && ( is_home() || is_front_page() ) )
    echo " | $site_description";
if ( $paged >= 2 || $page >= 2 )
    echo ' | ' . sprintf( __( 'Page %s' ), max( $paged, $page ) );
            ?>
        </title>
        <meta name="description" content="<?php if ( is_single() ) {
                single_post_title('', true);
            } else {
                bloginfo('name'); echo " - "; bloginfo('description');
            }
                                          ?>" />
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Favicons -->
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
        <link rel="shortcut icon" href="<?php echo bloginfo('template_directory'); ?>/favicon.png">
        <link rel="apple-touch-icon" href="<?php echo bloginfo('template_directory'); ?>/apple-touch-icon-precomposed.png"/>

        <!-- Stylesheets -->
        <?php wp_deregister_script('jquery');wp_head(); ?>

        <!-- Bootstrap -->
        <link href="<?php echo bloginfo('template_directory'); ?>/assets/css/bootstrap.min.css" rel="stylesheet">
        <!-- Font Awesome -->
        <link href="<?php echo bloginfo('template_directory'); ?>/assets/css/font-awesome.css" rel="stylesheet">
        <!-- Owl Carousel (For Testimonials) -->
        <link rel="stylesheet" href="<?php echo bloginfo('template_directory'); ?>/assets/css/owl.carousel.css" media="screen">
        <link rel="stylesheet" href="<?php echo bloginfo('template_directory'); ?>/assets/css/owl.theme.css" media="screen">

        <!-- Theme CSS-->
        <link rel="stylesheet" href="<?php echo bloginfo('template_directory'); ?>/assets/css/theme.css">
        <link rel="stylesheet" href="<?php echo bloginfo('template_directory'); ?>/assets/css/theme-elements.css">
        <link rel="stylesheet" href="<?php echo bloginfo('template_directory'); ?>/assets/css/animate.min.css">

        <!-- Wordpress Custom Styles -->
        <link href="<?php echo bloginfo('template_directory'); ?>/style.css" rel="stylesheet">

        <!-- Maps API -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzmjHnX05CRikMy0pwWLmx3t2lLCc7a7w"></script>

        <!-- Custom Google Fonts -->
        <link href='http://fonts.googleapis.com/css?family=Anton|Muli:300,400,400italic,300italic|Oswald' rel='stylesheet' type='text/css'>

    </head>

    <body <?php body_class(); ?> id="top">
        <div class="site-wrapper">

            <!-- Header -->
            <header class="header header-default">

                <div class="header-top">
                    <div class="container">
                        <div class="header-top-left">
                            <?php $args = array(
                                              'theme_location' => 'secondary-menu',
                                              'container' => false, 'menu_id' => false,
                                              'menu_class' => 'header-top-nav',
                                              'fallback_cb' => 'wp_bootstrap_navwalker::fallback',
                                              'walker' => new wp_bootstrap_navwalker()
                                          ); wp_nav_menu($args); ?>
                        </div>
                        <div class="header-top-right">

                        </div>
                    </div>
                </div>
                <div class="header-main">
                    <div class="container">
                        <nav class="navbar navbar-default fhmm" role="navigation">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <!-- Logo -->
                                <div class="logo">
                                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo bloginfo('template_directory'); ?>/assets/img/champion-national-security-guard-services-logo.svg" alt="Stability"></a>
                                </div>
                                <!-- Logo / End -->
                            </div><!-- end navbar-header -->

                            <div id="main-nav" class="navbar-collapse collapse">
                                <?php
                                    $args = array(
                                          'theme_location' => 'primary-menu',
                                          'menu' => 'primary',
                                          'container' => false,
                                          'menu_id' => false,
                                          'menu_class' =>
                                          'nav navbar-nav',
                                          'fallback_cb' => 'wp_bootstrap_navwalker::fallback',
                                          'walker' => new wp_bootstrap_navwalker()
                                      ); wp_nav_menu($args);
                                ?>
                            </div><!-- end #main-nav -->

                        </nav><!-- end navbar navbar-default fhmm -->
                    </div>
                </div>

            </header>
            <!-- Header / End -->

            <!-- Main -->
            <div class="main" role="main">
