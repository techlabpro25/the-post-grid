<?php

namespace RT\RadiusBlocks\Blocks;

use RT\RadiusBlocks\Abstracts\Block;

class RtThePostGrid extends Block
{
	protected $name = 'rt-radius-blocks/thepostgrid';

	protected $attributes = [
		'layout' => [
			'type'=> "string",
			'default' => "grid2"
		],
        'general' =>[
            'type' => "object",
            'default' => [
                    'heading' => true,
                    'title' => true,
                    'excerpt' => true,
                    'category' => true,
                    'author' => true,
                    'post_date' => true,
                    'tag' => true,
                    'comment_count' => true,
                    'see_more' => true,
            ]
        ],
        'title'=> [
            'type'=> "object",
            'default'=> [
                'tag'=> "2",
                'position'=> "bottom_left",
                'word_limit'=> 100,
                'type'=> "full",
                'more_text'=> "...",
            ],
        ],
		'title_style' => [
			'type'=> "object",
			'default'=> [
				"text-align"=> "left",
				"color"=> "#000",
				"font-size"=> "22px",
				"font-weight"=> 400,
			],
		],
		'category_style' =>[
			'type' => "object",
			'default' => [
				'color' => "#000",
				"background-color" => "#fff",
				'font-size' => '12px',
				'border-radius' => "5",
			],
		],
		'category_padding' =>[
			'type' => "object",
		],
		'category_margin' =>[
			'type' => "object",
		],
        'meta_style' =>[
            'type' => "object",
            'default' => [
                'color' => "#000",
                "text-align" => "left",
                'font-size' => '12px',
                'font-weight' => "400",
            ],
        ],
        'button' =>[
            'type' => "object",
            'default' => [
                'border-radius' => "5",
                "text-align" => "left"
            ],
        ],
        'button_style' =>[
            'type' => "object",
            'default' => [
                'color' => '#fff',
                'h_color' => "#fff",
                'background-color' => "#000",
                'h_bg_color' => "#000",
                'active_color' => "#000",
            ],
        ],
        'excerpt_style' =>[
            'type' => "object",
            'default' => [
                'color' => "#000",
                "text-align" => "left",
                'font-size' => '12px',
                'font-weight' => "400",
            ],
        ],
        'heading' =>[
            'type' => 'object',
            'default' => [
                'tag' => '1',
                'style' => '1',
                'link' => '#'
            ]
        ],
        'heading_style' =>[
                'type' => "object",
                'default' =>[
                    'color' => "#000",
                    "text-align" => "left",
                    'background-color' => '#fff',
                    "border-color" => "gray",
                    "border-width" => "1px",
                    "border-style" => "solid",
                ]
        ],
        'content_wrap' =>[
            'type' =>"object",
            'default' =>[
                'background-color' => "lightgray",
                'box-shadow-color' => '#fff',
                'radius' => '5',
                'border-color' => 'gray',
                'border-width' => '1px'
            ]
        ],
        'constent_box_padding' =>[
            'type' => "object",
        ],
        'content_padding' =>[
            'type' => "object",
        ],
        'excerpt'=>[
            'type' => 'object',
            'default' =>[
                'limit' => 20,
                'type' => 'full',
                'more_text' => '...',
            ]
        ],
        'category' =>[
            'type' =>'object',
            'default' =>[
                'position' => "",
                'style' => "style1",
                'icon' => true
            ]
        ],
        'meta' =>[
            'type' => 'object',
            'default' =>[
                'position' => 'between',
                'icon' => true,
                'seperator' => ''
            ]
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
					return $attribute['default'];
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
