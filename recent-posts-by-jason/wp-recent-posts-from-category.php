<?php
/*
Plugin Name: WP Recent Posts From Category
Plugin URI: http://www.danieledesantis.net
Description: Displays recent posts from selected category by generating a shortcode that can be used in widgets, posts and pages.
Version: 1.1.0
Author: Daniele De Santis
Author URI: http://www.danieledesantis.net
Text Domain: wp-recent-posts-from-category
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

if(!class_exists('Rpfc'))
{
    class Rpfc
    {
        public function __construct() {
            add_action('admin_menu', array(&$this, 'add_menu'));
            add_action('admin_enqueue_scripts', array(&$this, 'add_admin_scripts'));
            add_action('init', array(&$this, 'init'));
        }

        public function rpfc_recent_posts_from_category_display($atts) {
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

            $rpfc_args = array();

            if($category != '' && is_numeric($category)) {
                $category = get_category($category);
                if($category) {
                    $category = $category->term_id;
                    $category = ($children === true) ? $rpfc_args['cat'] = $category : $rpfc_args['category__in'] =  $category;
                }
            }

            $rpfc_args['posts_per_page'] = is_numeric($posts) ? $posts : 5;
            $rpfc_args['ignore_sticky_posts'] = 1;

            $rpfc_query = new WP_Query( $rpfc_args );

            // OUTPUT FOR PAGES
            $output = '';

            if ( $rpfc_query->have_posts() ) {
                $output .= '';
                while ( $rpfc_query->have_posts() ) {
                    $rpfc_query->the_post();
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
            load_plugin_textdomain( 'wp-recent-posts-from-category', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
            add_shortcode('rpfc_recent_posts_from_category', array(&$this, 'rpfc_recent_posts_from_category_display'));
            add_filter('widget_text', 'do_shortcode');
        }

        public function add_menu() {
            global $rpfc_settings_page;
            $rpfc_settings_page = add_options_page('WP Recent Posts From Category', 'WP Recent Posts From Category', 'manage_options', 'wp-recent-posts-from-category', array(&$this, 'settings_page'));
        }

        // ADMIN PAGE
        public function settings_page() {
            echo '<div class="wrap">';
            echo '<h2>' . __('WP Recent Posts From Category', 'wp-recent-posts-from-category') . '</h2>
					<p>' . __('Select the desired options and click the "Generate shortcode" button, then copy the generated shortcode and paste it in a text widget, in a post or in a page.', 'wp-recent-posts-from-category') . '</p>';
            echo '<h3>' . __('Shortcode Generator', 'wp-recent-posts-from-category') . '</h3>
					<form id="generate_shortcode_form" method="post" action="options.php">';
            echo '<table class="form-table">
					<tbody>
						<tr valign="top">
							<th scope="row">' . __('Category to display', 'wp-recent-posts-from-category') . '</th>
							<td><label for="category" style="display:block">' . wp_dropdown_categories( 'show_option_all=All&echo=0&id=shortcode_category' ) . '</label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Children categories', 'wp-recent-posts-from-category') . '</th>
							<td><label for="display_children_categories" style="display:block"><input type="checkbox" name="display_children_categories" id="display_children_categories" value="true" checked> Display</label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Number of posts', 'wp-recent-posts-from-category') . '</th>
							<td><label for="posts" style="display:block"><input type="text" name="posts" id="posts" value="5"></label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Excerpt', 'wp-recent-posts-from-category') . '</th>
							<td><label for="display_excerpt" style="display:block"><input type="checkbox" name="display_excerpt" id="display_excerpt" value="true"> Display</label>
							</td>
						</tr>
                        <tr valign="top">
							<th scope="row">' . __('Image', 'wp-recent-posts-from-category') . '</th>
							<td><label for="display_image" style="display:block"><input type="checkbox" name="display_image" id="display_image" value="true"> Display</label>
							</td>
						</tr>
						<tr valign="top">
							<th scope="row">' . __('Author and date', 'wp-recent-posts-from-category') . '</th>
							<td><label for="display_author_date" style="display:block"><input type="checkbox" name="display_author_date" id="display_author_date" value="true"> Display</label>
							</td>
						</tr>


                        <tr valign="top">
							<th scope="row">' . __('Button\'s class', 'wp-recent-posts-from-category') . '</th>
							<td><label for="button_class" style="display:block"><input type="text" name="button_class" id="button_class"></label>
							</td>
						</tr>

                        <tr valign="top">
							<th scope="row">' . __('Button text', 'wp-recent-posts-from-category') . '</th>
							<td><label for="button_text" style="display:block"><input type="text" name="button_text" id="button_text"></label>
							</td>
						</tr>


						<tr valign="top">
							<th scope="row">' . __('Container\'s class', 'wp-recent-posts-from-category') . '</th>
							<td><label for="container_class" style="display:block"><input type="text" name="container_class" id="container_class"></label>
							</td>
						</tr>
					</tbody>
				</table>';
            echo submit_button( __('Generate Shortcode', 'wp-recent-posts-from-category') );
            echo '</form>
				<p id="shortcode_title"></p>
				<p id="shortcode"></p>
				<h3>' . __('Credits', 'wp-recent-posts-from-category') . '</h3>
				<ul>
					<li>' . __('"WP Recent Posts From Category" is a plugin by <a href="http://www.danieledesantis.net/" target="_blank" title="Daniele De Santis">Daniele De Santis</a>.', 'wp-recent-posts-from-category') . '</li>
				</ul>
				</div>';
        }

        public function add_admin_scripts($hook) {
            global $rpfc_settings_page;
            if($hook != $rpfc_settings_page) return;
            if(wp_script_is('jquery')) {
            } else {
                wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, '1.10.2');
                wp_enqueue_script('jquery');
            }
            wp_enqueue_script( 'rpfc-admin-script', plugins_url('js/wp-recent-posts-from-category.js', __FILE__), array('jquery'), '1.0.1');
        }

    }
}


if(class_exists('Rpfc')) {
    $rpfc = new Rpfc();
}

if(isset($rpfc)) {
    function rpfc_settings_link($links) {
        $settings_link = '<a href="options-general.php?page=wp-recent-posts-from-category">' . __('Settings', 'wp-recent-posts-from-category') . '</a>';
        array_unshift($links, $settings_link);
        return $links;
    }
    add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'rpfc_settings_link');
}

?>
