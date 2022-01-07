<?php

require_once __DIR__ . './../vendor/autoload.php';

defined('ABSPATH') || exit;

use RT\ThePostGrid\API\PostTypeTaxonomy;
use RT\ThePostGrid\Helpers\Fns;
use RT\ThePostGrid\API\All_Post;
use RT\ThePostGrid\API\Get_Image_Sizes;
use RT\ThePostGrid\API\Get_Title;
use RT\ThePostGrid\API\PostTypeAjax;
use RT\ThePostGrid\API\Isotope_Terms;
use RT\ThePostGrid\Abstracts\Block;
use RT\ThePostGrid\Helpers\Installer;
use RT\ThePostGrid\API\Get_Categories;
use RT\ThePostGrid\Models\Dependencies;
use RT\ThePostGrid\Blocks\RtThePostGrid;
use RT\ThePostGrid\Controllers\AssetsController;

final class ThePostGrid{
	/**
	 * Store the singleton object.
	 */
	private static $singleton = false;

	/**
	 * Create an inaccessible constructor.
	 */
	private function __construct(){
		$this->define_constants();
		$assets = new AssetsController();
		$assets->init();
		$this->init_hooks();
        $this->ajax_call();
		//}
		new Get_Categories();
		new All_Post();
		new Get_Title();
		new Isotope_Terms();
		new Get_Image_Sizes();

	}

	/**
	 * Fetch an instance of the class.
	 */
	final public static function getInstance()
	{
		if (false === self::$singleton) {
			self::$singleton = new self();
		}

		return self::$singleton;
	}

	public function on_plugins_loaded()
	{
		do_action('wp_blocks_loaded');
	}

    public function ajax_call()
    {
        new PostTypeAjax();
        new PostTypeTaxonomy();
    }

	public function init()
	{
		$this->load_language();
		// Other hooks which is need to run all first
	}

	private function init_hooks()
	{
		register_shutdown_function([$this, 'log_errors']);
		add_action('plugins_loaded', [$this, 'on_plugins_loaded'], -1);
//		 add_action('init', [$this, 'register_blocks']);
		add_action('init', [$this, 'init'], 0);
		new RtThePostGrid();
	}

//	 public function register_blocks() {
//	     if (function_exists('register_block_type')) {
//	         $blocks = Fns::getRegisteredBlocks();
//	         if (!empty($blocks) && is_array($blocks)) {
//	             foreach ($blocks as $block) {
//	                 /** @var Block $loadedBlock */
//	                 $loadedBlock = is_string($block) ? new $block() : $block;
//	                 if (!$loadedBlock->getName() || !$loadedBlock->is_dynamic()) {
//	                     continue;
//	                 }
//	                 register_block_type($loadedBlock->getName(), [
//	                     'render_callback' => [$block, 'render_callback'],
//	                 ]);
//	             }
//	         }
//	     }
//	 }


	/**
	 * @param $file
	 *
	 * @return string
	 */
	public function get_assets_uri($file)
	{
		$file = ltrim($file, '/');

		return trailingslashit(RT_TPG_BLOCKS_URL . '/assets') . $file;
	}

	/**
	 * @param $file
	 *
	 * @return string
	 */
	public function get_dist_uri($file)
	{
		$file = ltrim($file, '/');

		return trailingslashit(RT_TPG_BLOCKS_URL . '/dist') . $file;
	}

	private function define_constants()
	{
		$this->define('RT_TPG_BLOCKS_DIR', plugin_dir_path(RT_TPG_BLOCKS_FILE));
		$this->define('RT_TPG_BLOCKS_URL', plugins_url('', RT_TPG_BLOCKS_FILE));
		$this->define('RT_TPG_BLOCKS_SLUG', basename(dirname(RT_TPG_BLOCKS_FILE)));
	}

	private function load_language()
	{
		$locale = determine_locale();
		$locale = apply_filters('plugin_locale', $locale, RT_TPG_BLOCKS_SLUG);
		unload_textdomain(RT_TPG_BLOCKS_SLUG);
		load_textdomain(RT_TPG_BLOCKS_SLUG, WP_LANG_DIR . '/' . RT_TPG_BLOCKS_SLUG . '/' . RT_TPG_BLOCKS_SLUG . '-' . $locale . '.mo');
		load_plugin_textdomain(RT_TPG_BLOCKS_SLUG, false, plugin_basename(dirname(RT_TPG_BLOCKS_FILE)) . '/languages');
	}

	/**
	 * Define constant if not already set.
	 *
	 * @param string      $name  constant name
	 * @param bool|string $value constant value
	 */
	public function define($name, $value)
	{
		if (! defined($name)) {
			define($name, $value);
		}
	}

	public function log_errors()
	{
		$error = error_get_last();
		do_action('RT_TPG_BLOCKS_shutdown_error', $error);
	}
}

/**
 * @return bool|ThePostGrid
 */
function ThePostGrid()
{
	return ThePostGrid::getInstance();
}

ThePostGrid();
