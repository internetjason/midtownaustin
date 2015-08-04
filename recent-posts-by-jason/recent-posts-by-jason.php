<?php
/*
Plugin Name: Recent Posts
Plugin URI: none
Description: Displays recent posts from selected category by generating a shortcode that can be used in widgets, posts and pages.
Version: 1.1.0
Author: Daniele De Santis - adapted by Jason
Author URI: http://www.danieledesantis.net
Text Domain: recent-posts-by-jason
Domain Path: /languages/
License: GPL2
*/

/*
Copyright 2014  Daniele De Santis  (email : info@danieledesantis.net)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

if (!defined('ABSPATH')) die ('No direct access allowed');

if(!class_exists('rpbj'))
{
    class rpbj
    {
        public function __construct() {
            add_action('admin_menu', array(&$this, 'add_menu'));
            add_action('admin_enqueue_scripts', array(&$this, 'add_admin_scripts'));
            add_action('init', array(&$this, 'init'));
        }

        public function rpbj_recent_posts_by_jason_display($atts) {
            extract( shortcode_atts( array(
                'category' => '',
                'children' => true,
                'posts' => 5,
                'excerpt' => false,
                'buttonclass' => '',
                'buttontext' => '',
                'image' => false,
                'meta' => false,
                'container' => ''
            ), $atts ) );

            $rpbj_args = array();

            if($category != '' && is_numeric($category)) {
                $category = get_category($category);
                if($category) {
                    $category = $category->term_id;
                    $category = ($children === true) ? $rpbj_args['cat'] = $category : $rpbj_args['category__in'] =  $category;
                }
            }

            $rpbj_args['posts_per_page'] = is_numeric($posts) ? $posts : 5;
            $rpbj_args['ignore_sticky_posts'] = 1;

            $rpbj_query = new WP_Query( $rpbj_args );

            // OUTPUT FOR PAGES
            $output = '';

            if ( $rpbj_query->have_posts() ) {
                $output .= '';
                while ( $rpbj_query->have_posts() ) {
                    $rpbj_query->the_post();
                    $output .= '<div class="' . $container . '"><h4><a href="' . get_permalink() . '">' . get_the_title() . '</a></h4>';
                    if ($image) { $output .= '<p><img src="' . wp_get_attachment_url( get_post_thumbnail_id($post->ID, 'thumbnail') ) . '" class="img-responsive img-thumbnail"></p>'; };
                    if ($meta) { $output .= '<i class="fa fa-calendar"></i> <time class="podcast-meta">' . get_the_date() . '</time>'; };
                    if ($excerpt) { $output .= '<p>' . get_the_excerpt() . '</p>'; };
                    $output .= '<a href="' . get_permalink() . '" class="btn ' . $buttonclass . '">' . $buttontext .'</a>';
                    $output .= '</div>';
                }
                $output .= '';
            }

            wp_reset_postdata();

            $output .= '</div>';

            return $output;
        }

        public function init() {
            load_plugin_textdomain( 'recent-posts-by-jason', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
            add_shortcode('rpbj_recent_posts_by_jason', array(&$this, 'rpbj_recent_posts_by_jason_display'));
            add_filter('widget_text', 'do_shortcode');
        }

        public function add_menu() {
            global $rpbj_settings_page;
            $rpbj_settings_page = add_options_page('Recent Posts By Jason', 'Recent Posts By Jason', 'manage_options', 'recent-posts-by-jason', array(&$this, 'settings_page'));
        }

        // ADMIN PAGE
        public function settings_page() {
            echo '<div class="wrap">';
            echo '<h2>' . __('WP Recent Posts From Category', 'recent-posts-by-jason') . '</h2>
					<p>' . __('Select the desired options and click the "Generate shortcode" button, then copy the generated shortcode and paste it in a text widget, in a post or in a page.', 'recent-posts-by-jason') . '</p>';
            echo '<h3>' . __('Shortcode Generator', 'recent-posts-by-jason') . '</h3>
					<form id="generate_shortcode_form" method="post" action="options.php">';
            echo '<table class="form-table">
					<tbody>
						<tr valign="top">
							<th scope="row">' . __('Category to display', 'recent-posts-by-jason') . '</th>
							<td><label for="category" style="display:block">' . wp_dropdown_categories( 'show_option_all=All&echo=0&id=shortcode_category' ) . '</label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Children categories', 'recent-posts-by-jason') . '</th>
							<td><label for="display_children_categories" style="display:block"><input type="checkbox" name="display_children_categories" id="display_children_categories" value="true" checked> Display</label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Number of posts', 'recent-posts-by-jason') . '</th>
							<td><label for="posts" style="display:block"><input type="text" name="posts" id="posts" value="5"></label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Excerpt', 'recent-posts-by-jason') . '</th>
							<td><label for="display_excerpt" style="display:block"><input type="checkbox" name="display_excerpt" id="display_excerpt" value="true"> Display</label>
							</td>
						</tr>
                        <tr valign="top">
							<th scope="row">' . __('Image', 'recent-posts-by-jason') . '</th>
							<td><label for="display_image" style="display:block"><input type="checkbox" name="display_image" id="display_image" value="true"> Display</label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Author and date', 'recent-posts-by-jason') . '</th>
							<td><label for="display_author_date" style="display:block"><input type="checkbox" name="display_author_date" id="display_author_date" value="true"> Display</label>
							</td>
						</tr>


                        <tr valign="top">
							<th scope="row">' . __('Button\'s class', 'recent-posts-by-jason') . '</th>
							<td><label for="button_class" style="display:block"><input type="text" name="button_class" id="button_class"></label>
							</td>
						</tr>

                        <tr valign="top">
							<th scope="row">' . __('Button text', 'recent-posts-by-jason') . '</th>
							<td><label for="button_text" style="display:block"><input type="text" name="button_text" id="button_text"></label>
							</td>
						</tr>


						<tr valign="top">
							<th scope="row">' . __('Container\'s class', 'recent-posts-by-jason') . '</th>
							<td><label for="container_class" style="display:block"><input type="text" name="container_class" id="container_class"></label>
							</td>
						</tr>
					</tbody>
				</table>';
            echo submit_button( __('Generate Shortcode', 'recent-posts-by-jason') );
            echo '</form>
				<p id="shortcode_title"></p>
				<p id="shortcode"></p>
				<h3>' . __('Credits', 'recent-posts-by-jason') . '</h3>
				<ul>
					<li>' . __('"WP Recent Posts From Category" is a plugin by <a href="http://www.danieledesantis.net/" target="_blank" title="Daniele De Santis">Daniele De Santis</a>.', 'recent-posts-by-jason') . '</li>
				</ul>
				</div>';
        }

        public function add_admin_scripts($hook) {
            global $rpbj_settings_page;
            if($hook != $rpbj_settings_page) return;
            if(wp_script_is('jquery')) {
            } else {
                wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, '1.10.2');
                wp_enqueue_script('jquery');
            }
            wp_enqueue_script( 'rpbj-admin-script', plugins_url('js/recent-posts-by-jason.js', __FILE__), array('jquery'), '1.0.1');
        }

    }
}


if(class_exists('rpbj')) {
    $rpbj = new rpbj();
}

if(isset($rpbj)) {
    function rpbj_settings_link($links) {
        $settings_link = '<a href="options-general.php?page=recent-posts-by-jason">' . __('Settings', 'recent-posts-by-jason') . '</a>';
        array_unshift($links, $settings_link);
        return $links;
    }
    add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'rpbj_settings_link');
}

?>
