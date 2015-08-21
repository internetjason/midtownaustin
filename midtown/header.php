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
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Favicons -->
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
        <link rel="shortcut icon" href="<?php echo bloginfo('template_directory'); ?>/favicon.png">
<!--        <link rel="apple-touch-icon" href="<?php echo bloginfo('template_directory'); ?>/apple-touch-icon-precomposed.png"/>-->

        <!-- Stylesheets -->
        <?php wp_deregister_script('jquery');wp_head(); ?>

        <!-- Bootstrap -->
        <link href="<?php echo bloginfo('template_directory'); ?>/assets/css/bootstrap.css" rel="stylesheet">
        <!-- Font Awesome -->
        <link href="<?php echo bloginfo('template_directory'); ?>/assets/css/font-awesome.css" rel="stylesheet">

        <!-- Midtown's Wordpress Custom Styles -->
        <link href="<?php echo bloginfo('template_directory'); ?>/style.css" rel="stylesheet">

        <!-- Custom Google Fonts -->
        <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,400italic,700|Homenaje' rel='stylesheet' type='text/css'>

    </head>

    <body <?php body_class(); ?> id="top">
        <div class="navbar-wrapper">
            <div class="container-fluid">

                <nav class="navbar navbar-inverse navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img id="logo" class="img-responsive white-logo"></a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <?php
                                $args = array(
                                    'theme_location' => 'primary-menu',
                                    'menu' => 'primary',
                                    'container' => false,
                                    'menu_id' => false,
                                    'menu_class' =>
                                    'nav navbar-nav navbar-right',
                                    'fallback_cb' => 'wp_bootstrap_navwalker::fallback',
                                    'walker' => new wp_bootstrap_navwalker()
                                ); wp_nav_menu($args);
                            ?>
                        </div><!--/.nav-collapse -->
                    </div>
                </nav>

            </div>
        </div>
