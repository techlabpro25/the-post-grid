<?php

namespace RT\RadiusBlocks\API;

class Get_Terms{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_term_route']);
    }

    public function register_term_route(){
        register_rest_route( 'rt/v1', '(?P<post_type>[a-zA-Z0-9-]+)/categories',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_posts_terms']
        ));
    }

    public function get_posts_terms($request){
        $post_type = $request["post_type"];
        $taxonomy_objects = get_object_taxonomies( $post_type, 'objects' );

        $data = [];

        if (empty($taxonomy_objects )) {
            return new WP_Error( 'empty_category', 'There are no terms to display', array('status' => 404) );
        
        }

        if(!empty($taxonomy_objects)){
            foreach($taxonomy_objects as $newterms){
                $data[]=[
                    "name"=>$newterms->name,
                    "label"=>$newterms->label
                ];
            }
        }
        
    
        return rest_ensure_response($data);
    }
}