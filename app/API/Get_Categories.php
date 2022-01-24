<?php

namespace RT\ThePostGrid\API;

class Get_Categories{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_catagory_route']);
        add_action("rest_api_init", [$this, 'register_sub_catagory_route']);
    }


    // Get Parent term object
    public function register_catagory_route(){
        register_rest_route( 'rt/v1', 'categories',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_posts_categories'],
            'permission_callback' => function() { return true; }
        ));
    }

    public function get_posts_categories($request){
        $taxonomy = sanitize_text_field($request["tax_type"]);
        $term_objects = get_terms( $taxonomy, array('parent' => 0));
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


    // Get Child Object
    public function register_sub_catagory_route(){
        register_rest_route( 'rt/v1', 'sub_categories',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_posts_sub_categories'],
            'permission_callback' => function() { return true; }
        ));
    }

    public function get_posts_sub_categories($request){
        $taxonomy = sanitize_text_field($request["tax_type"]);
        $term_id = sanitize_text_field($request["term_id"]);

        $sub_term_object = get_terms( $taxonomy, array('parent' => $term_id, 'hide_empty' => false));

        $data = [];

        if(!empty($sub_term_object)){
            foreach($sub_term_object as $subterms){
                $data[]=[
                    "id"=> esc_html($subterms->term_id),
                    "name"=> esc_html($subterms->name),
                    "slug"=> esc_html($subterms->slug),
                    "count" => esc_html($subterms->count)
                ];
            }
        }
        return rest_ensure_response($data);
    }

}