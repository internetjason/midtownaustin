                <!-- Footer -->
                <footer class="footer" id="footer">
                    <div class="footer-widgets">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-3">
                                    <?php dynamic_sidebar( 'Footer Sidebar 1' ); ?>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <?php dynamic_sidebar( 'Footer Sidebar 2' ); ?>
                                </div>

                                <div class="clearfix visible-sm"></div>

                                <div class="col-sm-6 col-md-3">
                                    <?php dynamic_sidebar( 'Footer Sidebar 3' ); ?>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <?php dynamic_sidebar( 'Footer Sidebar 4' ); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    Copyright &copy;<?php echo date("Y"); ?> Champion National Security, Inc. &nbsp;| &nbsp;All Rights Reserved
                                </div>
                                <div class="col-sm-6 col-md-8">
                                    <div class="social-links-wrapper">
                                        <span class="social-links-txt">Connect with us</span>
                                        <ul class="social-links social-links__dark">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- Footer / End -->

            </div>
            <!-- Main / End -->
        </div>
        <!-- Site Wrapper / End -->

<?php wp_footer(); ?>

        <!-- Javascript Files
        ================================================== -->
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/jquery-1.11.0.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/bootstrap.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/headhesive.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/fhmm.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/owl.carousel.min.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/jquery.appear.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/jquery.circliful.min.js"></script>

        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/custom.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/champion.js"></script>
        <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/map.js"></script>

<?php if ( is_singular() ) wp_print_scripts( 'comment-reply' ); ?>

    </body>
</html>
