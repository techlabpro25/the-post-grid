<?php

namespace RT\ThePostGrid\API;

class PostTypeTaxonomy
{
    public function __construct()
    {
        add_action('wp_ajax_nopriv_get_all_taxonomy', [$this, 'get_all_taxonomy']);
        add_action('wp_ajax_get_all_taxonomy', [$this, 'get_all_taxonomy']);
    }

    public function get_all_taxonomy()
    {
        $post_type = sanitize_text_field($_REQUEST["post_type"]);
        $taxonomy_objects = get_object_taxonomies( $post_type, 'objects' );

        $data = [];

        if(!empty($taxonomy_objects)){
            if(!empty($taxonomy_objects)){
                foreach($taxonomy_objects as $newterms){
                    $data[]=[
                        "name"=>esc_html($newterms->name),
                        "label"=>esc_html($newterms->label)
                    ];
                }
            }
        }else{
            $data['message'] = esc_html("No Taxonomies found");
        }
        wp_send_json_success( $data, 200 );
    }
}