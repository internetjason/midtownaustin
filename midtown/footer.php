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

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43425152-1', 'auto');
  ga('send', 'pageview');

</script>
    </body>
</html>
