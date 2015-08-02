<?php /* Template Name: Page Sidebar Left */ ?>
<?php get_header(); ?>

    <div class="col-sm-8 col-sm-push-4">
    <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

        <article role="main" class="primary-content" id="post-<?php the_ID(); ?>">
            <?php if ( is_front_page() ) { ?>
            <!--            <h1><?php the_title(); ?></h1>-->
            <?php } else { ?>
            <!--            <h1><?php the_title(); ?></h1>-->
            <?php } ?>

            <?php the_content(); ?>

            <?php #wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:' ), 'after' => '</div>' ) ); ?>

            <?php #edit_post_link( __( 'Edit' ), '<span class="edit-link">', '</span>' ); ?>
            <?php #comments_template( '', true ); ?>

            <?php endwhile; ?>
        </article>
    </div>
    <div class="col-sm-4 col-sm-pull-8">
        <div id="sidebar" data-spy="affix" data-offset-top="100">
            <?php dynamic_sidebar( 'Page Sidebar 1' ); ?>
        </div>
    </div>

<?php get_footer(); ?>
