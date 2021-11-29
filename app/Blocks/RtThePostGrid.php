<?php

namespace RT\RadiusBlocks\Blocks;

use RT\RadiusBlocks\Abstracts\Block;

class RtThePostGrid extends Block
{
	protected $name = 'rt-radius-blocks/thepostgrid';

	protected $attributes = [
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
            'tag' => true,
            'comment_count' => true,
            'see_more' => true,
        ],
        'title'=> [
            'tag'=> "2",
            'position'=> "bottom_left",
            'word_limit'=> 100,
            'type'=> "full",
            'more_text'=> "...",
        ],
		'title_style' => [
            "text-align"=> "left",
            "color"=> "",
            "h_color"=> "",
            "font-size"=> "22px",
            "font-weight"=> 500,
		],
		'category_style' =>[
            'color' => "",
            "background-color" => "transparent",
            'font-size' => '15px',
            'border-radius' => "5",
		],
		'category_padding' =>[],
		'category_margin' =>[],
        'meta_style' =>[
            'color' => "",
            "text-align" => "left",
            'font-size' => '15px',
            'font-weight' => "400",
        ],
        'button' =>[
            'border-radius' => "5",
            "text-align" => "left",
            'text' => 'View More',
        ],
        'button_style' =>[
            'color' => '',
            'h_color' => "#fff",
            'background-color' => "#fff",
            'h_bg_color' => "#000",
            'active_color' => "#000",
        ],
        'excerpt_style' =>[
            'color' => "",
            "text-align" => "left",
            'font-size' => '15px',
            'font-weight' => "400",
        ],
        'heading' =>[
            'tag' => '1',
            'style' => '1',
            'link' => '#'
        ],
        'heading_style' =>[
            'color' => "",
            "text-align" => "left",
            'background-color' => 'transparent',
            "border-color" => "gray",
            "border-width" => "1px",
            "border-style" => "solid",
        ],
        'content_wrap' =>[
            'background-color' => "transparent",
            'box-shadow-color' => '#fff',
            'radius' => '5',
            'border-color' => 'gray',
            'border-width' => '0px'
        ],
        'constent_box_padding' =>[],
        'content_padding' =>[],
        'excerpt'=>[
            'limit' => 20,
            'type' => 'full',
            'more_text' => '...',
        ],
        'category' =>[
            'position' => "",
            'style' => "style1",
            'icon' => true
        ],
        'meta' =>[
            'position' => 'between',
            'icon' => true,
            'seperator' => ''
        ],
        'image' => [
            'show_hide' => true,
            'size'=> "150",
            'shape'=> "normal",
            'animation'=> 1,
            'border-radius'=> "",
        ],
        'query' =>[
            'post_type'  => "post",
            'limit'  => -1,
            'include'  => "",
            'exclude'  => "",
            'offset'  => 0,
            'taxonomy_bool'  => false,
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
            'order_bool'  => false,
            'order_by'  => "",
            'order'  => "",
            'author_bool'  => false,
            'author'  => [],
            'status_bool'  => false,
            'status'  => ["publish"],
            'keyword_bool'  => false,
            'keyword'  => "",
            'filter'=> true,
        ],
        'primary_color' =>'#000',
        'parent_class' =>"default",
        'columns' =>[
            'desktop' => 4,
            'tablet' => 6,
            'mobile' => 12
        ],
        'linking'=> [
            'link_to_page'=> true,
            'link_type'=> "",
            'target'=> "",
        ],
        'pagination'=> [
            'show'=> false,
            'post_per_page'=> 5,
            'pagination_type'=> "",
        ],
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
		wp_enqueue_script(RT_RADIUS_BLOCKS_SLUG . '-frontend-js');
		//        }
		ob_start(); ?>
        <div class="rt-radius-blocks-ph rt-thepostgrid">
            <pre style="display: none;"><?php echo wp_json_encode($_attributes) ?></pre>
        </div>
<?php return ob_get_clean();
	}
}
