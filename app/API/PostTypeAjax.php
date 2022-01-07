<?php

namespace RT\ThePostGrid\API;

class PostTypeAjax
{
    public function __construct()
    {
        add_action('wp_ajax_nopriv_get_all_post_type', [$this, 'get_all_post_type']);
        add_action('wp_ajax_get_all_post_type', [$this, 'get_all_post_type']);
    }

    public function get_all_post_type()
    {
        $args = array(
            'public'   => true
        );
        $post_types = get_post_types( $args, 'objects' );
        $data = [];
        foreach ($post_types as $types){
            $data []= [
                'label' => $types->label,
                'value' => $types->name,
            ];
        }
        wp_send_json_success( $data, 200 );
    }
}