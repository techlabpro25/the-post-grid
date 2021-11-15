<?php

namespace RT\RadiusBlocks\Controllers;

class AssetsController
{
    private $plugin_name;
    /**
     * @var string
     */
    private $version;

    public function __construct() {
        $this->plugin_name = RT_RADIUS_BLOCKS_SLUG;
        $this->version = RT_RADIUS_BLOCKS_VERSION;
    }

    public function init() {
        add_action('wp_enqueue_scripts', [&$this, 'frontend_assets']);
        add_action('admin_enqueue_scripts', [&$this, 'admin_assets']);
        add_action('enqueue_block_editor_assets', [&$this, 'editor_assets']);
        add_action('wp_head', [&$this, 'block_attribute_css']);
    }

    public function frontend_assets() {
        $script_dep_path = RT_RADIUS_BLOCKS_DIR . 'dist/frontend.asset.php';
        $script_info = file_exists($script_dep_path)
            ? include $script_dep_path
            : array(
                'dependencies' => array(),
                'version'      => $this->version,
            );
        $script_dep = array_merge($script_info['dependencies'], array('wp-i18n', 'wp-element', 'wp-api-fetch'));

        // Scripts.
        wp_register_script(
            $this->plugin_name . '-frontend-js',
            radiusBlocks()->get_dist_uri('frontend.js'),
            $script_dep,
            $script_info['version'],
            true
        );

        wp_enqueue_style($this->plugin_name, radiusBlocks()->get_assets_uri('css/front.css'), [], $this->version);
    }

    public function admin_assets() {
        wp_enqueue_style($this->plugin_name, radiusBlocks()->get_assets_uri('css/admin.css'), [], $this->version);
        wp_enqueue_style("rtrb_common_front_css", radiusBlocks()->get_assets_uri('css/front.css'), [], $this->version);
        wp_enqueue_script($this->plugin_name, radiusBlocks()->get_assets_uri('js/admin.js'), ['jquery'], $this->version, false);
    }

    public function editor_assets() {

        // Scripts.
        wp_enqueue_script(
            $this->plugin_name . '-cgb-block-js',
            radiusBlocks()->get_dist_uri('blocks.build.js'),
            ['wp-blocks', 'wp-element', 'wp-components', 'wp-editor', 'wp-api'],
            $this->version,
            true
        );

        wp_enqueue_script(
            $this->plugin_name . '-cgb-deactivator-js',
            radiusBlocks()->get_dist_uri('deactivator.build.js'),
            ['wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element'],
            $this->version,
            true
        );


        wp_enqueue_style(
            $this->plugin_name . '-cgb-block-editor-css',
            file_exists(wp_upload_dir()['basedir'] . '/' . $this->plugin_name . '/blocks.editor.build.css') ?
                content_url('/uploads/' . $this->plugin_name . '/blocks.editor.build.css') :
                radiusBlocks()->get_dist_uri('blocks.editor.build.css'),
            ['wp-edit-blocks'],
            $this->version
        );
    }

    public function block_attribute_css() {
        $blockStylesheets = "";

        $hasNoSmoothScroll = true;

//        foreach ($presentBlocks as $block) {
//            if (isset($defaultValues[$block['blockName']])) {
//                $attributes = array_merge(array_map(function ($attribute) {
//                    return $attribute['default'];
//                }, $defaultValues[$block['blockName']]['attributes']), $block['attrs']);
//            }
//
//            if (isset($attributes) && isset($attributes['blockID']) && $attributes['blockID'] != '') {
//                apply_filters('rt_radius_blocks_attribute_css', $blockStylesheets, $block);
//            }
//        }
        $blockStylesheets = preg_replace('/\s+/', ' ', $blockStylesheets);
        if (!$blockStylesheets) {
            return;
        }
        ob_start(); ?>

        <style><?php echo($blockStylesheets); ?></style>

        <?php
        ob_end_flush();
    }
}
