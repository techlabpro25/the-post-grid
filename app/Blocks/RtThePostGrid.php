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
            'presdefault' => false
        ],
        'title'=> [
            'tag'=> "3",
            'position'=> "",
            'word_limit'=> 25,
            'type'=> "full",
            'more_text'=> "",
        ],
		'title_style' => [
            "text-align"=> "left",
            "color"=> "",
            "h_color"=> "",
            "font-size"=> "",
            "font-weight"=> null,
            'line-height' => "",
            'letter-spaceing' => '',
			'transform' => ''
		],
		'category_style' =>[
            'color' => "",
            "background-color" => "",
            'font-size' => '',
            'border-radius' => "",
            "font-weight" => '',
            'letter-spaceing' => '',
            'transform' => ''
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
            "text-align" => "left",
            'font-size' => '15px',
            'font-weight' => "400",
            'line-height' => '',
            'letter-spaceing' => '',
			'transform' => ''
        ],
        'button' =>[
            'border-radius' => "",
            'h-boder-radius' => '',
            "text-align" => "left",
            'text' => 'View More',
            'border-color' => '#e0e0e0',
			'h-border-color' => '#e0e0e0',
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
            'transform' => ''
        ],
        'heading_padding_object' =>[
            'top'=> "5px",
			'right'=> "15px",
			'bottom'=> "5px",
			'left'=> "15px",
        ],
        'content_wrap' =>[
            'background-color' => "",
            'box-shadow-color' => 'transparent',
            'radius' => '',
            'border-color' => '',
            'border-width' => '',
            'gutter' => "4"
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
            'size'=> "",
            'animation'=> null,
            'border-radius'=> "0",
            'img-column' => '',
			'content-column' => '',
            'gutter' => '3'
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
            'filter'=> true,
        ],
        'primary_color' =>'',
        'parent_class' =>"default",
        'columns' =>[
            'desktop' => "",
            'tablet' => "6",
            'mobile' => "12"
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
            <pre style="display:none;"><?php echo wp_json_encode($_attributes) ?></pre>
        </div>
<?php return ob_get_clean();
	}
}
