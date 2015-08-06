        <!-- FOOTER -->
        <section class="footer">
            <div class="container">
                <footer>
                    <div class="col-sm-8">
                        <?php dynamic_sidebar( 'Footer Column 1' ); ?>
                    </div>
                    <div class="col-sm-4 text-right">
                        <?php dynamic_sidebar( 'Footer Column 2' ); ?>
                    </div>
                </footer>
            </div>
        </section>

<?php wp_footer(); ?>

        <!-- Javascript Files
        ================================================== -->
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/jquery-1.11.0.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/bootstrap.js"></script>

        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/custom.js"></script>

<?php if ( is_singular() ) wp_print_scripts( 'comment-reply' ); ?>

    </body>
</html>
