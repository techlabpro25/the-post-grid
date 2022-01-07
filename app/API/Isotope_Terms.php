<?php
namespace RT\ThePostGrid\API;

class Isotope_Terms{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_isotope_terms']);
//        add_action('wp_ajax_nopriv_get_post_image_url', array( $this, 'data_custom_ajax'));
//        add_action('wp_ajax_get_post_image_url', array($this, 'data_custom_ajax'));
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

//    public function data_custom_ajax(){
//        $image_size = $_POST['size'];
//        wp_send_json_success( array(
//            'name' => 'Andrew',
//            'call' => 'From some API/trigger',
//            'size' => $image_size
//        ), 200 );
//    }
}
