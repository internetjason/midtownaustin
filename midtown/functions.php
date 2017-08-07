<?php

add_theme_support( 'menus' );

add_action( 'init', 'register_primary_menu' );
function register_primary_menu() {
    if ( function_exists( 'register_nav_menu' ) ) {
        register_nav_menu( 'primary-menu', 'Primary Menu' );
    }
}

add_filter('__header', 'display_primary_menu', 1000, 0);
function display_primary_menu() {
    echo ( has_nav_menu( 'primary-menu' ) ? wp_nav_menu (
        array (
            'theme_location' => 'primary-menu',
            'container_id'    => 'primary-menu',
            'container_class'    => 'primary-menu'
        )
    ).'<div class="clearall"></div>' : '' );
}
// Adding secondary menu

add_action( 'init', 'register_secondary_menu' );
function register_secondary_menu() {
    if ( function_exists( 'register_nav_menu' ) ) {
        register_nav_menu( 'secondary-menu', 'Secondary Menu' );
    }
}

add_filter('__header', 'display_secondary_menu', 1000, 0);
function display_secondary_menu() {
    echo ( has_nav_menu( 'secondary-menu' ) ? wp_nav_menu (
        array (
            'theme_location' => 'secondary-menu',
            'container_id'    => 'secondary-menu',
            'container_class'    => 'secondary-menu'
        )
    ).'<div class="clearall"></div>' : '' );
}

// Sidebar(s)
if ( function_exists('register_sidebar') ) {

    register_sidebar(array(
        'name' => 'Page Sidebar 1',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>'
    ));

    register_sidebar(array(
        'name' => 'Blog Sidebar 1',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>'
    ));

    register_sidebar(array(
        'name' => 'Footer Column 1',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>'
    ));
    register_sidebar(array(
        'name' => 'Footer Column 2',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widgettitle">',
        'after_title' => '</h3>'
    ));
}

add_post_type_support('page', 'excerpt');

function post_comments( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case '' :
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<div id="comment-<?php comment_ID(); ?>">
		<div class="comment-author vcard">
			<?php echo get_avatar( $comment, 40 ); ?>

			<p class="comment-meta">
				<?php printf( __( '%s' ), sprintf( '%s', get_comment_author_link() ) ); ?>

                <a class="comment-date" href="<?php echo esc_url( get_comment_link( $comment->comment_ID ) ); ?>">
                    <?php printf( __( '%1$s' ), get_comment_date() ); ?>
                </a>

                <?php if ( $comment->comment_approved == '0' ) : ?>
                    <em class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.' ); ?></em>
                <?php endif; ?>
            </p>
		</div>

		<div class="comment-body"><?php comment_text(); ?></div>

		<div class="reply">
			<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
		</div>
	</div>

	<?php
			break;
		case 'pingback'  :
		case 'trackback' :
	?>

	<li class="post pingback">
		<p><?php _e( 'Pingback:' ); ?> <?php comment_author_link(); ?><?php edit_comment_link( __( '(Edit)' ), ' ' ); ?></p>
	<?php

		break;
	endswitch;
}

// Custom functions

// Register Custom Navigation Walker
require_once('wp_bootstrap_navwalker.php');

// Removing admin bar
show_admin_bar( false );

// Disabling automatic <p> </p> tags
remove_filter( 'the_content', 'wpautop' );

remove_filter( 'the_excerpt', 'wpautop' );

add_theme_support('post-thumbnails');

add_filter("gform_init_scripts_footer", "init_scripts");
function init_scripts() {
    return true;
}

/**
 * Display <title> in <head>
 * Check for SEO Plug-ins if they are handling the matter
 */
function display_meta_title() {

    echo "\t" . '<title>';

    // If 3rd party plugin is in use, let it manage titles as they does great job!
    if (
        class_exists( 'All_in_One_SEO_Pack' ) ||
        class_exists( 'Headspace_Plugin' ) ||
        class_exists( 'WPSEO_Admin' ) ||
        class_exists( 'WPSEO_Frontend' )
    ) {
        wp_title( '', true, 'right' );

    }
    else {

        if ( is_home() || is_front_page() ) {

            echo get_bloginfo( 'name', 'display' );

            $this_desc = esc_attr( get_bloginfo( 'description', 'display' ) );

            if ( $this_desc == 'Just another WordPress site' ) {
                //Silence is golden - site has default description which we dont want to show
            }
            else {
                //Proper site description in options
                echo ' - ';
                echo esc_attr( get_bloginfo( 'description', 'display' ) );
            }
        }

        // If it's a feed, lets add that into the title
        elseif ( is_feed() ) {
            echo get_bloginfo( 'name', 'display' ) . ' feed';
        }

        elseif ( is_search() ) {
            printf( __( 'Search results for  %1$s from %2$s', 'spyropress' ),
                get_search_query(), get_bloginfo( 'name', 'display' ) );
        }

        //DEFAULT FALLBACK
        else {
            wp_title( ' - ', true, 'right' );
            bloginfo( 'name' );
        }
    }

    echo '</title>';
    echo "\n";
}

// Add mp3 file type
function my_myme_types($mime_types){
	$mime_types['mp3'] = 'audio/mp3'; //Adding mp3 extension
	return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);
?>
