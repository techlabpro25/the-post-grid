<?php

namespace RT\RadiusBlocks\API;

class Get_Image_Sizes{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_image_size_route']);
    }

    public function register_image_size_route(){
        register_rest_route( 'rt/v1', 'image-size',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_image_sizes'],
            'permission_callback' => function() { return true; }
        ));
    }

    public function get_image_sizes(){
        $data = [];
        global $_wp_additional_image_sizes;

        $sizes      = [];
        $interSizes = get_intermediate_image_sizes();
        if ( ! empty( $interSizes ) ) {
            foreach ( get_intermediate_image_sizes() as $_size ) {
                if ( in_array( $_size, [ 'thumbnail', 'medium', 'large' ] ) ) {
                    $sizes[ $_size ]['width']  = get_option( "{$_size}_size_w" );
                    $sizes[ $_size ]['height'] = get_option( "{$_size}_size_h" );
                    $sizes[ $_size ]['crop']   = (bool) get_option( "{$_size}_crop" );
                } elseif ( isset( $_wp_additional_image_sizes[ $_size ] ) ) {
                    $sizes[ $_size ] = [
                        'width'  => $_wp_additional_image_sizes[ $_size ]['width'],
                        'height' => $_wp_additional_image_sizes[ $_size ]['height'],
                        'crop'   => $_wp_additional_image_sizes[ $_size ]['crop'],
                    ];
                }
            }
        }

        $imgSize = [];
        if ( ! empty( $sizes ) ) {
            $imgSize['full'] = __( "Full Size", 'the-post-grid' );
            foreach ( $sizes as $key => $img ) {
                $data[]=[
                    'label' => ucfirst( $key ) . " ({$img['width']}*{$img['height']})",
                    'value' => "{$img['width']}x{$img['height']}"
                ];
            }
        }

        return rest_ensure_response($data);
    }

}