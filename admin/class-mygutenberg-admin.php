<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://localhost/wpdemo/
 * @since      1.0.0
 *
 * @package    Mygutenberg
 * @subpackage Mygutenberg/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Mygutenberg
 * @subpackage Mygutenberg/admin
 * @author     Rahul Harkhani <rahul.l.harkhani@doyenhub.com>
 */
class Mygutenberg_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Mygutenberg_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Mygutenberg_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/mygutenberg-admin.css', array(), $this->version, 'all' );

		// Add block style.
		wp_enqueue_style(
			'call-to-action-css',
			plugin_dir_url( __DIR__ ) . 'blocks/call-to-action/css/call-to-action.css',
			array(),
			$this->version,
			true
		);

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Mygutenberg_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Mygutenberg_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/mygutenberg-admin.js', array( 'jquery' ), $this->version, false );

		// Add block script.
		wp_enqueue_script(
			'call-to-action-js', // Handle.
			plugin_dir_url( __DIR__ ) . 'blocks/call-to-action/js/call-to-action.js', // Version: filemtime — Gets file modification time.
			[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n', 'wp-components', 'wp-api', 'lodash' ], // Dependencies, defined above.
			$this->version,
			true // Enqueue the script in the footer.
		);
		
		// Register block script and style.
		register_block_type( 'mcb/call-to-action', [
			'style' => 'call-to-action-css', // Loads both on editor and frontend.
			'editor_script' => 'call-to-action-js', // Loads only on editor.
		] );

	}

}
