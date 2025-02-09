<?php get_header(); ?>
<!-- Page Heading -->
<!-- Parallax Section -->
<section class="parallax" style="background-image: url(https://www.midtownaustin.org/wp-content/uploads/midtown-church-page-header-background.jpg);">
    <div class="container-fluid">
        <div class="row">
            <div class="container">
                <div class="text-center">
                    <h1>
                        <?php if ( is_day() ) : ?>
                        <?php printf( __( 'Daily Archives: <span>%s</span>' ), get_the_date() ); ?>
                        <?php elseif ( is_month() ) : ?>
                        <?php printf( __( 'Monthly Archives: <span>%s</span>' ), get_the_date('F Y') ); ?>
                        <?php elseif ( is_year() ) : ?>
                        <?php printf( __( 'Yearly Archives: <span>%s</span>' ), get_the_date('Y') ); ?>
                        <?php else : ?>
                        <?php _e( 'News &amp; Events' ); ?>
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

        <div class="col-sm-8">

        <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

            <article role="main" class="primary-content" id="post-<?php the_ID(); ?>">
                <header>
                    <h1><?php the_title(); ?></h1>
                </header>

                <?php //the_post_thumbnail('full');?>
                <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'thumbnail') ); ?>" class="img-responsive img-thumbnail">

                <?php the_content(); ?>

                <?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:' ), 'after' => '</div>' ) ); ?>

<!--
                <footer class="entry-meta">
                    <p>Posted <strong><?php echo human_time_diff(get_the_time('U'), current_time('timestamp')) . ' ago'; ?></strong> on <time datetime="<?php the_time('l, F jS, Y') ?>" pubdate><?php the_time('l, F jS, Y') ?></time> &middot; <a href="<?php the_permalink(); ?>">Permalink</a></p>
                </footer>
-->
                <div class="clearfix"></div>
                <?php //comments_template( '', true ); ?>

                <ul class="pagination">
                    <li>
                        <?php previous_post_link( '%link', '&laquo; %title' ); ?>
                    </li>
                    <li>
                        <?php next_post_link( '%link', '%title &raquo;' ); ?>
                    </li>
                </ul>

                <?php endwhile; // end of the loop. ?>
            </article>

        </div>
        <div class="col-sm-4">
            <?php dynamic_sidebar( 'Blog Sidebar 1' ); ?>
        </div>

    </div>
</div>
<?php get_footer(); ?>
