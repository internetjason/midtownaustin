<?php get_header(); ?>
<div class="container">
<?php
	if ( have_posts() )
		the_post();
?>
    <div class="col-sm-8">
    <h1>
        <?php if ( is_day() ) : ?>
            <?php printf( __( 'Daily Archives: <span>%s</span>' ), get_the_date() ); ?>
        <?php elseif ( is_month() ) : ?>
            <?php printf( __( 'Monthly Archives: <span>%s</span>' ), get_the_date('F Y') ); ?>
        <?php elseif ( is_year() ) : ?>
            <?php printf( __( 'Yearly Archives: <span>%s</span>' ), get_the_date('Y') ); ?>
        <?php else : ?>
            <?php _e( 'The Blog' ); ?>
        <?php endif; ?>
    </h1>

<?php
	/* Since we called the_post() above, we need to
	 * rewind the loop back to the beginning that way
	 * we can run the loop properly, in full.
	 */
	rewind_posts();

	/* Run the loop for the archives page to output the posts.
	 * If you want to overload this in a child theme then include a file
	 * called loop-archives.php and that will be used instead.
	 */
	 get_template_part( 'loop', 'archive' );
?>
    </div>

    <div class="col-sm-4">
        <?php dynamic_sidebar( 'Blog Sidebar 1' ); ?>
    </div>

</div>

<?php get_footer(); ?>
