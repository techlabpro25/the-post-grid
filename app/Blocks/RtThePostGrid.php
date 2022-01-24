<?php

namespace RT\ThePostGrid\Blocks;

use RT\ThePostGrid\Abstracts\Block;

class RtThePostGrid extends Block
{
	protected $name = 'rt-tpg/thepostgrid';

	protected $attributes = [
        'haspro' => true,
        'layout'=>[
            'type'=> 'grid',
            'value'=> "grid1",
        ],
        'general' =>[
            'heading' => true,
            'title' => true,
            'excerpt' => true,
            'category' => true,
            'author' => true,
            'post_date' => true,
            'comment_count' => true,
            'see_more' => true,
            'presdefault' => false,
            'social_share' => false // Pro feature
        ],
        'title'=> [
            'tag'=> "3",
            'position'=> "", // Pro feature
            'word_limit'=> "",
            'type'=> "full",
            'more_text'=> "",
        ],
		'title_style' => [
            "text-align"=> "left",
            "color"=> "",
            "h_color"=> "",
            "font-size"=> "22px",
            "font-weight"=> '500',
            'line-height' => "",
            'letter-spacing' => '',
			'transform' => ''
		],
		'category_style' =>[
            'color' => "",
            'h-color' => '',
            "background-color" => "",
            "background-color-h" => "",
            'font-size' => '',
            'border-radius' => "",
            "font-weight" => '',
            'letter-spacing' => '',
            'transform' => '',
            'line-height' => ''
		],
		'category_padding' =>[
                'top' => '',
                'right' => '',
                'bottom' => '',
                'left' => '',
        ],
		'category_margin' =>[
            'top' => '',
            'right' => '',
            'bottom' => '',
            'left' => '',
        ],
        'meta_style' =>[
            'color' => "",
            'h-color' => "",
            "text-align" => "left",
            'font-size' => '15px',
            'font-weight' => "400",
            'line-height' => '',
            'letter-spaceing' => '',
			'transform' => ''
        ],
        'meta_icon'=>[
			'color'=> "",
			'font-size'=> ''
        ],
        'button' =>[
            'border-radius' => "",
            'h-boder-radius' => '',
            "text-align" => "left",
            'text' => 'View More',
            'border-color' => '#e0e0e0',
			'h-border-color' => '#2271b1',
			'border-width'=> '1px',
			'h-border-width'=> '1px',
			'border-style' => 'solid',
            'h-border-style' => 'solid'
        ],
        'button_style' =>[
            'color' => '',
            'h_color' => "",
            'background-color' => "",
            'h_bg_color' => "",
            'active_color' => "",
            'line-height' => "",
            'font-size' => "",
            "font-weight" => 400,
            'letter-spaceing' => '',
            'transform' => ''
        ],
        'button_padding' =>[
            'top' => '8px',
            'right' => '15px',
            'bottom' => '8px',
            'left' => '15px',
        ],
        'button_margin' =>[
            'top' => "0px",
            'right' => '0px',
            'bottom' => '0px',
            'left' => '0px'
        ],
        'excerpt_style' =>[
            'color' => "",
            "text-align" => "left",
            'font-size' => '15px',
            'font-weight' => "400",
            'line-height' => "",
            'letter-spaceing' => '',
            'transform' => ''
        ],
        'heading' =>[
            'tag' => '2',
            'style' => '1',
            'link' => ''
        ],
        'heading_style' =>[
            'color' => "",
            "text-align" => "left",
            'background-color' => 'transparent',
            "border-color" => "",
            "border-width" => "",
            "border-style" => "",
            'line-height' => "",
            'font-weight' => 600,
            'font-size'=> '',
            'letter-spaceing' => '',
            'transform' => '',
            'dot-color' => ''
        ],
        'heading_dot_margin'=>[
			'top' => "",
			'right' => "",
			'bottom' => "",
			'left' => ""
        ],
        'heading_padding_object' =>[
            'top'=> "",
			'right'=> "",
			'bottom'=> "",
			'left'=> "",
        ],
        'content_wrap' =>[
            'background-color' => "",
            'box-shadow-color' => '#fff',
            'radius' => '',
            'border-color' => '',
            'border-width' => '1px',
            'gutter' => "",
            'h-content-background' => ""
        ],
        'constent_box_padding' =>[],
        'content_padding' =>[
                'top' => '',
                'right' => '',
                'left' => '',
                'bottom' => '',
        ],
        'excerpt'=>[
            'limit' => '',
            'type' => 'word',
            'more_text' => '...',
        ],
        'category' =>[
            'position' => "",
            'style' => "style1",
            'icon' => true
        ],
        'meta' =>[
            'position' => 'default',
            'icon' => true,
            'seperator' => ''
        ],
        'image' => [
            'show_hide' => true,
            'size'=> "300x300",
            'animation'=> 'img_zoom_in',
            'border-radius'=> "0",
            'img-column' => '',
			'content-column' => '',
            'gutter' => '',
            'source'=> "feature", // Pro feature
			'type'=> "normal", // Pro feature
            'width' => "", // Pro feature
            'height' => "", // Pro feature
            'crop' => "" // Pro feature
        ],
        'query' =>[
            'post_type'  => "post",
            'limit'  => -1,
            'include'  => "",
            'exclude'  => "",
            'offset'  => 0,
            'taxonomy_bool'  => true,
            'category_bool'  => false,
            'taxonomy'  => [],
            'tax_term'  => [
                'category'  => ["aa", "bb"],
            ],
            'category'  => [],
            'category_operator'  => "",
            'tag_bool'  => false,
            'tag'  => [],
            'tag_operator'  => "",
            'relation'  => "AND",
            'order_bool'  => true,
            'order_by'  => "date",
            'order'  => "ASC",
            'author_bool'  => false,
            'author'  => [],
            'status_bool'  => true,
            'status'  => [],
            'keyword_bool'  => false,
            'keyword'  => "",
            'filter' => true,
            'date_bool' => false, // Pro feature
            'date_from' => null,  // Pro feature
			'date_to' => null,   // Pro feature
            'not_found_text' => "No post found",  // Pro feature
            'show_sticky' => 1,  // Pro feature
        ],
        'primary_color' =>'',
        'columns' =>[
            'desktop' => "4",
            'tablet' => "6",
            'mobile' => "12"
        ],
        'linking'=> [
            'link_to_page'=> true,
            'link_type'=> "new_page", // Pro feature
            'popup_type'=> "single", // Pro feature
            'target'=> "",
        ],
        'pagination'=> [
            'show'=> false,
            'post_per_page'=> 5,
            'pagination_type'=> "pagination_ajax", // Pro feature
        ],
        'pagination_style' =>[
            'color'=> '',
            'h-color' => '',
            'a-color' => '',
            'bg-color' => "",
            'h-bg-color' => "",
            'a-bg-color' => "",
            'border-color' => "",
            'h-border-color' => "",
            'a-border-color' => "",
            'border-style' => "",
            'h-border-style' => "",
            'a-border-style' => "",
            'border-width' => "",
            'h-border-width' => "",
            'a-border-width' => "",
            'border-radius' => "",
            'h-border-radius' => "",
            'a-border-radius' => "",
            'font-size' => "",
            'h-font-size' => "",
            'a-font-size' => "",
            'font-weight' => "",
            'h-font-weight' => "",
            'a-font-weight' => "",
            'transform' => "",
            'h-transform' => "",
            'a-transform' => "",
            'letter-spacing' => "",
            'h-letter-spacing' => "",
            'a-letter-spacing' => "",
            'line-height' => "",
            'h-line-height' => "",
            'a-line-height' => "",
        ],
        'pagination_padding'=>[
            'top' => '15px',
			'right' => '15px',
			'bottom' => '15px',
			'left' => '15px',
        ],
        'pagination_margin' =>[
            'top' => '1px',
            'right' => '1px',
            'bottom' => '1px',
            'left' => '1px',
        ],
        'pagination_spinner_margin'=>[
			'top'=> '0px',
			'right'=> '8px',
			'bottom'=> '8px',
			'left'=> '25px',
		],
        'pagination_spinner_color' => "#fff",
        'loaders' =>[
            'excerpt' => false
        ],
        // For Grid 2
        'grid_2_body_hover' =>[
            'background' => "",
			'title'=> "",
			'excerpt'=> "",
			'meta'=> "",
			'category'=> "",
			'category_bg'=> "",
			'button'=> "",
			'button_bg'=> "",
			'button_border'=> "",
            'button_h'=> "",
            'button_bg_h'=> "",
            'button_border_h'=> "",
        ],
        // For Grid 3
        'grid_3' =>[
			'content-background-color' => "",
		],

        // Pro Feature
        'filters' =>[
			'taxonomy_bool' => false,
			'author_bool' => false,
			'order_sort_by_bool'=> false,
			'order_sort_bool'=> false,
			'search_bool'=> false,
			'taxonomy_filter'=> "",
			'display_as_sub_cat_bool'=> false,
			'taxonomy_filter_type'=> "dropdown",
			'selected_filtered_item'=> "",
			'hide_show_all_button'=> false,
			'show_post_count'=> false,
		],
        'filter_value'=>[
			'taxonomy'=> "",
			'author'=> "",
			'order'=> "ASC",
			'order_by'=> "title",
			'search'=> ""
		],

        'root_margin'=> "",
        'grid_style' => "even",
        'content_visible_permission'=> "",
        'default_preview_image'=> "",
        'overlay'=>[
			'color'=> "",
			'opacity'=> 1,
		],
        'overlay_padding'=>[
			'top' => '',
			'right' => '',
			'left'=> '',
			'bottom' => '',
		]

	];

	public function __construct()
	{
		add_action('init', [$this, 'register_blocks']);
	}

	public function register_blocks()
	{
		register_block_type($this->getName(), [
			'attributs'       => $this->getAttributes(),
			'render_callback' => [&$this, 'render_callback'],
		]);
	}

	public function render_callback($attributes)
	{
		$_attributes = array_merge(
			array_map(
				function ($attribute) {
					return $attribute;
				},
				$this->getAttributes()
			),
			$attributes
		);
		wp_enqueue_script(RT_THE_POST_GRID_PLUGIN_SLUG . '-frontend-js');
		//        }
		ob_start(); ?>
        <div class="rt-tpg-ph rt-thepostgrid">
            <pre style="display:none;"><?php echo wp_json_encode($_attributes) ?></pre>
        </div>
        <?php return ob_get_clean();
	}
}
