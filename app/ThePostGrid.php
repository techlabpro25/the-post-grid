<?php

require_once __DIR__ . './../vendor/autoload.php';

defined('ABSPATH') || exit;

use RT\RtTpgBlocks\Helpers\Fns;
use RT\RtTpgBlocks\API\All_Post;
use RT\RtTpgBlocks\API\Get_Terms;
use RT\RtTpgBlocks\API\Get_Image_Sizes;
use RT\RtTpgBlocks\API\Get_Title;
use RT\RtTpgBlocks\API\Isotope_Terms;
use RT\RtTpgBlocks\Abstracts\Block;
use RT\RtTpgBlocks\Helpers\Installer;
use RT\RtTpgBlocks\API\Get_Categories;
use RT\RtTpgBlocks\Models\Dependencies;
use RT\RtTpgBlocks\Blocks\RtThePostGrid;
use RT\RtTpgBlocks\Controllers\AssetsController;

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
		//}
		new Get_Categories();
		new Get_Terms();
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

	public function init()
	{
		$this->load_language();
		// Other hooks which is need to run all first
	}

	private function init_hooks()
	{
		register_shutdown_function([$this, 'log_errors']);
		add_action('plugins_loaded', [$this, 'on_plugins_loaded'], -1);
		// add_action('init', [$this, 'register_blocks']);
		add_action('init', [$this, 'init'], 0);
		new RtThePostGrid();
	}

	// public function register_blocks() {
	//     if (function_exists('register_block_type')) {
	//         $blocks = Fns::getRegisteredBlocks();
	//         if (!empty($blocks) && is_array($blocks)) {
	//             foreach ($blocks as $block) {
	//                 /** @var Block $loadedBlock */
	//                 $loadedBlock = is_string($block) ? new $block() : $block;
	//                 if (!$loadedBlock->getName() || !$loadedBlock->is_dynamic()) {
	//                     continue;
	//                 }
	//                 register_block_type($loadedBlock->getName(), [
	//                     'render_callback' => [$block, 'render_callback'],
	//                 ]);
	//             }
	//         }
	//     }
	// }


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
function rtTpgBlocks()
{
	return ThePostGrid::getInstance();
}

rtTpgBlocks();