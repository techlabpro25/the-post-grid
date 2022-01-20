<?php

namespace RT\ThePostGrid\API;

class Get_Categories{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_catagory_route']);
    }

    public function register_catagory_route(){
        register_rest_route( 'rt/v1', 'categories',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_posts_categories'],
            'permission_callback' => function() { return true; }
        ));
    }

    public function get_posts_categories($request){
        $taxonomy = sanitize_text_field($request["tax_type"]);
        $term_objects = get_terms( $taxonomy );

        $data = [];

        if(!empty($term_objects)){
            foreach($term_objects as $newterms){
                $data[]=[
                    "id"=> esc_html($newterms->term_id),
                    "name"=> esc_html($newterms->name),
                    "slug"=> esc_html($newterms->slug),
                    "count" => esc_html($newterms->count)
                ];
            }
        }

        return rest_ensure_response($data);
    }

}