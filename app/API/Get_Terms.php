<?php

namespace RT\RadiusBlocks\API;

class Get_Terms{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_term_route']);
    }

    public function register_term_route(){
        register_rest_route( 'rt/v1', 'taxonomy',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_posts_terms'],
            'permission_callback' => function() { return true; }
        ));
    }

    public function get_posts_terms($request){
        $post_type = $request["post_type"];
        $taxonomy_objects = get_object_taxonomies( $post_type, 'objects' );

        $data = [];


        if(!empty($taxonomy_objects)){
            if(!empty($taxonomy_objects)){
                foreach($taxonomy_objects as $newterms){
                    $data[]=[
                        "name"=>$newterms->name,
                        "label"=>$newterms->label
                    ];
                }
            }
        }else{
            $data['message'] = "No Taxonomies found";
        }


    
        return rest_ensure_response($data);
    }
}