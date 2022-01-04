<?php
namespace RT\TpgBlocks\API;

class Isotope_Terms{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_isotope_terms']);
    }

    public function register_isotope_terms(){
        register_rest_route( 'rt/v1', 'isotope_terms',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_isotope_terms'],
            'permission_callback' => function() { return true; }
        ));
    }

    public function get_isotope_terms($request){
        $post_type = sanitize_text_field($request["post_type"]);
        $taxonomies = get_object_taxonomies($post_type);

        $data = [];
        foreach ($taxonomies as $taxonomy){
            $terms = get_terms( $taxonomy, array(
                'hide_empty' => false,
            ) );
            foreach($terms as $term){
                $data []=[
                    "id" => $term->term_id,
                    "slug" => $term->slug,
                    "name" => $term->name
                ];
            }
        }


        return rest_ensure_response($data);
    }
}
