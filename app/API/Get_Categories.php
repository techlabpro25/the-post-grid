<?php

namespace RT\RadiusBlocks\API;

class Get_Categories{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_catagory_route']);
    }

    public function register_catagory_route(){
        register_rest_route( 'rt/v1', 'categories/(?P<taxonomy>[a-zA-Z0-9-]+)',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_posts_categories']
        ));
    }

    public function get_posts_categories($request){
        $taxonomy = $request["taxonomy"];
        $term_objects = get_terms( $taxonomy );
        
        $data = [];
    
    
        if (empty($term_objects ) || is_wp_error($term_objects)) {
            return new WP_Error( 'empty_category', 'There are no terms to display', array('status' => 404) );
        
        }
    
        foreach($term_objects as $newterms){
            $data[]=[
                "id"=>$newterms->term_id,
                "name"=>$newterms->name,
                "slug"=>$newterms->slug
            ];
        }
      
     
        return rest_ensure_response($data);
    }
}