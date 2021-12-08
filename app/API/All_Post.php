<?php
namespace RT\RadiusBlocks\API;
use WP_Query;

class All_Post{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_post_route']);
    }

    public function register_post_route(){
        register_rest_route( 'rt/v1', 'query',array(
            'methods'  => 'POST',
            'callback' => [$this, 'get_all_posts'],
            'permission_callback' => function() { return true; }
        ));
    }

//    public static function excerpt_content($content){
//        $content = apply_filters( 'the_content', $content );
//        $content = str_replace( ']]>', ']]&gt;', $content );
//        return $content;
//    }

    public function get_all_posts($request){

        $terms = $request['terms'];
        $post_type = sanitize_text_field($request["post_type"]);
        $post_per_page = $request["post_per_page"];
        $include = explode(",",$request["include"]);
        $exclude = explode(",", $request["exclude"]);
        $offset = $request["offset"];
        $relation = sanitize_text_field($request["relation"]);
        $order_by = sanitize_text_field($request["order_by"]);
        $order = sanitize_text_field($request["order"]);
        $author = explode(",",$request["author"]);
        $status = explode(",",$request["status"]);
        $keyword = sanitize_text_field($request["keyword"]);
        $pagination = $request['pagination'];
        $limit = $request['limit'];

        $post_type =  ($request["post_type"] === null )? "post": $request["post_type"];
        $post_per_page =  ($request["post_per_page"] === null )? -1: $request["post_per_page"];

        $args = array(
            'post_type' => $post_type,
            'posts_per_page' => $post_per_page,
        );


        if(empty(array_filter($include))){
            if($pagination && ($limit != -1)){
                $tempArgs                   = $args;
                $tempArgs['posts_per_page'] = $limit;
                $tempArgs['offset']          = 0;
                $tempArgs['fields']         = 'ids';
                $tempQ                      = new WP_Query( $tempArgs );
                if ( ! empty( $tempQ->posts ) ) {
                    $args['post__in'] = $tempQ->posts;
                }
            }
        }else{
            $args['post__in'] = $include;
        }

        if(!empty($exclude) && isset($exclude) && array_filter($exclude)){
            unset($args['post__in']);
            $args['post__not_in'] = $exclude;
        }

        if(isset($offset) && $offset){
            $args['offset'] = $offset;
        }

        if(isset($post_per_page) && $post_per_page){
            $args['posts_per_page'] = $post_per_page;
        }

        if(isset($order) && $order){
            $args['order'] = $order;
        }

        if(isset($order_by) && $order_by){
            $args['orderby'] = $order_by;
        }

        if(isset($keyword) && $keyword){
            $args['s'] = $keyword;
        }

        if(!empty($author) && isset($author) && array_filter($author)){
            $args['author__in'] = $author;
        }

        if(!empty($status) && isset($status) && array_filter($status)){
            $args['post_status'] = $status;
        }

        if(!empty($terms)){
            if(sizeof($terms) > 0){
                foreach ($terms as $key => $term){
                   $term_val = [];
                   foreach ($term['data'] as $term_value){
                       array_push($term_val, $term_value['value']);
                   }
                    $operator = (!empty($term['operator']))? $term['operator']: "IN";
                    if(!empty($term['data'])){
                        $args['tax_query'][]= array(
                          'taxonomy' => esc_html($key),
                          'field' => esc_html('term_id'),
                          'terms' => $term_val,
                          'operator' => esc_html($operator),
                        );
                    }
                }
                if(isset($relation) && $relation){
                    $args['tax_query']['relation'] = $relation;
                }
            }
        }


        $query = new WP_Query($args);
        $alltaxonomies = get_object_taxonomies($post_type);

        $data = [];

        if ($query->found_posts == 0){
            $data['message'] = "No Post Found";
        }else{
            if ( $query->have_posts() ) {
                while ( $query->have_posts() ) {
                    $query->the_post();
                    $category = [];
                    $tags = [];
                    $id = get_the_id();
                    $author_id = $query->post_author;
                    $items = [];

                    foreach($alltaxonomies as $taxonomy){
                        $tempterms = [];
                        $term_obj = get_the_terms($id, $taxonomy);
                        if(!empty($term_obj)){
                            foreach ($term_obj as $termitems){
                                $tempterms[]=[
                                    "term_id" => esc_html($termitems->term_id),
                                    "term_name" => esc_html($termitems->name),
                                    "term_link" => esc_html(get_term_link($termitems->term_id)),
                                ];
                            }
                        }
                        $items[]=$tempterms;
                    }


                    $data[]=[
                        'id' => $id,
                        "title" => esc_html(get_the_title()),
                        "excerpt" => get_the_excerpt(),
                        "comment_count" => esc_html(wp_count_comments($id)->all),
                        "post_date" => esc_html(get_the_date('M d, y')),
                        "image_url" => esc_url_raw(get_the_post_thumbnail_url(null, 'full')),
                        "author_name" => esc_html(get_the_author_meta( 'display_name', $author_id )),
                        "author_url" => esc_html(get_author_posts_url(get_the_author_meta('ID'))),
                        "post_link" => esc_url_raw(get_post_permalink()),
                        "total_post" => esc_html($query->found_posts),
                        "terms" => $items,
                    ];
                }
            } else {
                // no posts found
            }

            wp_reset_postdata();
        }

        return rest_ensure_response($data);
    }
}
?>