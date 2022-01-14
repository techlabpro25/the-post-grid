<?php
use RT\ThePostGrid\Controllers\Admin\AdminAjaxController;
use RT\ThePostGrid\Controllers\Admin\MetaController;
use RT\ThePostGrid\Controllers\Admin\NoticeController;
use RT\ThePostGrid\Controllers\Admin\PostTypeController;
use RT\ThePostGrid\Controllers\Admin\SettingsController;
use RT\ThePostGrid\Controllers\AjaxController;
use RT\ThePostGrid\Controllers\ElementorController;
use RT\ThePostGrid\Controllers\GutenBergController;
use RT\ThePostGrid\Controllers\ScriptController;
use RT\ThePostGrid\Controllers\ShortcodeController;
use RT\ThePostGrid\Controllers\Hooks\FilterHooks;
use RT\ThePostGrid\Controllers\Hooks\ActionHooks;
use RT\ThePostGrid\Helpers\Install;
use RT\ThePostGrid\API\PostTypeTaxonomy;
use RT\ThePostGrid\Helpers\Fns;
use RT\ThePostGrid\API\All_Post;
use RT\ThePostGrid\API\Get_Image_Sizes;
use RT\ThePostGrid\API\Get_Title;
use RT\ThePostGrid\API\PostTypeAjax;
use RT\ThePostGrid\API\Isotope_Terms;
use RT\ThePostGrid\Abstracts\Block;
use RT\ThePostGrid\API\Get_Categories;
use RT\ThePostGrid\Blocks\RtThePostGrid;
use RT\ThePostGrid\Controllers\AssetsController;

require_once __DIR__ . './../vendor/autoload.php';

if ( ! class_exists( RtTpg::class ) ) {
	final class RtTpg {
		public $post_type = "rttpg";
		public $options = [
			'settings'          => 'rt_the_post_grid_settings',
			'version'           => RT_THE_POST_GRID_VERSION,
			'installed_version' => 'rt_the_post_grid_current_version',
			'slug'              => RT_THE_POST_GRID_PLUGIN_SLUG
		];
		public $defaultSettings = [
			'popup_fields'       => [
				'title',
				'feature_img',
				'content',
				'post_date',
				'author',
				'categories',
				'tags',
				'social_share',
			],
			'social_share_items' => [
				'facebook',
				'twitter',
				'linkedin'
			],
			'custom_css'         => null
		];

		protected static $_instance;

		/**
		 * Store the singleton object.
		 */
		private static $singleton = false;

		/**
		 * Create an inaccessible constructor.
		 */
		private function __construct() {
			$this->__init();
            $assets = new AssetsController();
            $assets->init();
            $this->ajax_call();
            new Get_Categories();
            new All_Post();
            new Get_Title();
            new Isotope_Terms();
            new Get_Image_Sizes();
            add_action( 'block_categories', [$this, 'rt_tpg_block_category'], 10, 2 );

		}

		/**
		 * Fetch an instance of the class.
		 */
		final public static function getInstance() {
			if ( self::$singleton === false ) {
				self::$singleton = new self();
			}

			return self::$singleton;
		}


		protected function __init() {
			new PostTypeController();
			if ( is_admin() ) {
				new AdminAjaxController();
				new NoticeController();
				new MetaController();
			}

			new AjaxController();
			new ScriptController();
			new ShortcodeController();

			FilterHooks::init();
			ActionHooks::init();

			( new SettingsController() )->init();
			new ElementorController();
			new GutenBergController();

			$this->load_hooks();

		}

		private function load_hooks() {
			register_activation_hook( RT_THE_POST_GRID_PLUGIN_FILE, [ Install::class, 'activate' ] );
			register_deactivation_hook( RT_THE_POST_GRID_PLUGIN_FILE, [ Install::class, 'deactivate' ] );

			add_action( 'plugins_loaded', [ $this, 'on_plugins_loaded' ], - 1 );
			add_action( 'init', [ &$this, 'init_hooks' ], 0 );
			//add_action( 'init', [ ShortcodeController::class, 'init' ] ); // Init ShortCode.
			add_filter( 'wp_calculate_image_srcset', '__return_false' );
		}

		public function init_hooks() {
			do_action( 'rttpg_before_init', $this );
            register_shutdown_function([$this, 'log_errors']);
//            add_action('init', [$this, 'register_blocks']);
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

		public function load_language() {
			do_action( 'rttpg_set_local', null );
			$locale = determine_locale();
			$locale = apply_filters( 'plugin_locale', $locale, 'the-post-grid' );
			unload_textdomain( 'the-post-grid' );
			load_textdomain( 'the-post-grid', WP_LANG_DIR . '/the-post-grid/the-post-grid-' . $locale . '.mo' );
			load_plugin_textdomain( 'the-post-grid', false, plugin_basename( dirname( RT_THE_POST_GRID_PLUGIN_FILE ) ) . '/languages' );
		}

		public function on_plugins_loaded() {
			do_action( 'rttpg_loaded', $this );
            do_action('wp_blocks_loaded');
		}
        public function log_errors()
        {
            $error = error_get_last();
            do_action('RT_THE_POST_GRID_PLUGIN_shutdown_error', $error);
        }
        public function rt_tpg_block_category($category){
            return array_merge(
                $category,
                [
                    [
                        'slug'  => 'the_post_grid',
                        'title' => __( 'The Post Grid', 'the-post-grid' )
                    ],
                ]
            );
        }

        public function ajax_call()
        {
            new PostTypeAjax();
            new PostTypeTaxonomy();
        }


		/**
		 * Get the plugin path.
		 *
		 * @return string
		 */
		public function plugin_path() {
			return untrailingslashit( plugin_dir_path( RT_THE_POST_GRID_PLUGIN_FILE ) );
		}


		public function plugin_template_path() {
			$plugin_template = $this->plugin_path() . '/templates/';

			return apply_filters( 'tlp_tpg_template_path', $plugin_template );
		}

		public static function nonceText() {
			return "rttpg_nonce_secret";
		}

		public static function nonceId() {
			return "rttpg_nonce";
		}

		/**
		 * @param $file
		 *
		 * @return string
		 */
		public function get_assets_uri( $file ) {
			$file = ltrim( $file, '/' );

			return trailingslashit( RT_THE_POST_GRID_PLUGIN_URL . '/assets' ) . $file;
		}
        public function get_dist_uri($file)
        {
            $file = ltrim($file, '/');

            return trailingslashit(RT_THE_POST_GRID_PLUGIN_URL . '/dist') . $file;
        }


		/**
		 * Get the template path.
		 *
		 * @return string
		 */
		public function get_template_path() {
			return apply_filters( 'rttpg_template_path', 'the-post-grid/' );
		}


		public function hasPro() {
			return class_exists( 'rtTPGP' );
		}

	}

	function rtTPG() {
		return rtTPG::getInstance();
	}

	rtTPG();
}


