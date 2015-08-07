<?php get_header(); ?>
<!-- Page Heading -->
<!-- Parallax Section -->
<section class="parallax" style="background-image: url(http://www.midtownaustin.org/wp-content/uploads/midtown-church-page-header-background.jpg); background-position: center bottom; background-attachment: inherit;">
    <div class="container-fluid">
        <div class="row">
            <div class="container">
                <div class="text-center">
                    <h1>
                        <?php if ( is_day() ) : ?><?php printf( __( '<span>Daily Archive</span> %s' ), get_the_date() ); ?>
                        <?php elseif ( is_month() ) : ?><?php printf( __( '<span>Monthly Archive</span> %s' ), get_the_date('F Y') ); ?>
                        <?php elseif ( is_year() ) : ?><?php printf( __( '<span>Yearly Archive</span> %s' ), get_the_date('Y') ); ?>
                        <?php elseif ( is_category() ) : ?><?php echo single_cat_title(); ?>
                        <?php elseif ( is_search() ) : ?><?php printf( __( 'Search Results for: %s' ), '<span>' . get_search_query() . '</span>' ); ?>
                        <?php elseif ( is_home() ) : ?>Latest Posts<?php else : ?>
                        <?php endif; ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- /.page heading -->
<div class="container blog">
    <div class="row">

<?php
	if ( have_posts() )
		the_post();
?>
    <div class="col-sm-8">

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
</div>

<?php get_footer(); ?>
