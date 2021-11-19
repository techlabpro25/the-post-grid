<?php
namespace RT\RadiusBlocks\API;

class Get_Title{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_title_route']);
    }

    public function register_title_route(){
        register_rest_route( 'rt/v1', 'post_title',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_page_title']
        ));
    }

    public function get_page_title($request){
        $id = $request["id"];
        if (empty($id )) {
            return new WP_Error( 'empty_id', 'There are no ID', array('status' => 404) );
        }
        $data = [
            'title' => get_the_title($id),
            'path' => plugins_url()
        ];
      return rest_ensure_response($data);
    }
}
