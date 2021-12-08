<?php

namespace RT\RadiusBlocks\Blocks;

use RT\RadiusBlocks\Abstracts\Block;

class RtThePostGrid extends Block
{
	protected $name = 'rt-tpg/thepostgrid';

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
            'comment_count' => true,
            'see_more' => true,
        ],
        'title'=> [
            'tag'=> "3",
            'position'=> "",
            'word_limit'=> 10,
            'type'=> "",
            'more_text'=> "...",
        ],
		'title_style' => [
            "text-align"=> "left",
            "color"=> "",
            "h_color"=> "",
            "font-size"=> "",
            "font-weight"=> 500,
            'line-height' => ""
		],
		'category_style' =>[
            'color' => "",
            "background-color" => "",
            'font-size' => '',
            'border-radius' => "",
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
            'border-radius' => "",
            "text-align" => "left",
            'text' => 'View More',
        ],
        'button_style' =>[
            'color' => '',
            'h_color' => "",
            'background-color' => "",
            'h_bg_color' => "",
            'active_color' => "",
            'line-height' => "",
            'font-size' => ""
        ],
        'button_padding' =>[
                'top' => '8px',
                'right' => '15px',
                'bottom' => '8px',
                'left' => '15px',
        ],
        'excerpt_style' =>[
            'color' => "",
            "text-align" => "left",
            'font-size' => '15px',
            'font-weight' => "400",
            'line-height' => ""
        ],
        'heading' =>[
            'tag' => '1',
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
        ],
        'heading_padding_object' =>[
            'top'=> "5px",
			'right'=> "15px",
			'bottom'=> "5px",
			'left'=> "15px",
        ],
        'content_wrap' =>[
            'background-color' => "#fff",
            'box-shadow-color' => 'transparent',
            'radius' => '',
            'border-color' => '#d9d9d9',
            'border-width' => '1px'
        ],
        'constent_box_padding' =>[],
        'content_padding' =>[
                'top' => '15px',
                'right' => '15px',
                'left' => '15px',
                'bottom' => '15px',
        ],
        'excerpt'=>[
            'limit' => 20,
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
            'size'=> "1024",
            'animation'=> 1.1,
            'border-radius'=> "0",
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
            'status'  => [],
            'keyword_bool'  => false,
            'keyword'  => "",
            'filter'=> true,
        ],
        'primary_color' =>'',
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
        <div class="rt-tpg-ph rt-thepostgrid">
            <pre style="display: none;"><?php echo wp_json_encode($_attributes) ?></pre>
        </div>
<?php return ob_get_clean();
	}
}
