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

    public function get_all_posts($request){

        $terms = $request['terms'];
        $post_type = $request["post_type"];
        $post_per_page = $request["post_per_page"];
        $include = explode(",",$request["include"]);
        $exclude = explode(",", $request["exclude"]);
        $offset = $request["offset"];
        $relation = $request["relation"];
        $order_by = $request["order_by"];
        $order = $request["order"];
        $author = explode(",",$request["author"]);
        $status = explode(",",$request["status"]);
        $keyword = $request["keyword"];

        $post_type =  ($request["post_type"] === null )? "post": $request["post_type"];
        $post_per_page =  ($request["post_per_page"] === null )? -1: $request["post_per_page"];

        $args = array(
            'post_type' => $post_type,
            'posts_per_page' => $post_per_page,
        );

        if(!empty($include) && isset($include) && array_filter($include)){
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
                    if(!empty($term['data'])){
                        $args['tax_query'][]= array(
                          'taxonomy' => $key,
                          'field' => 'term_id',
                          'terms' => $term['data'],
                          'operator' => $term['operator'],
                        );
                    }
                }
                if(isset($relation) && $relation){
                    $args['tax_query']['relation'] = $relation;
                }
            }
        }


        $query = new WP_Query($args);
        
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
                    $get_cat = get_the_category($id);
                    $get_tags = get_the_tags($id);


                    if(!empty($get_cat)){
                        foreach($get_cat as $cat){
                            $category[]=[
                                "cat_id" => $cat->term_id,
                                "cat_name" => $cat->name,
                                "cat_link" => get_term_link($cat->term_id),
                            ];
                        }
                    }


                    if(!empty($get_tags)){
                        foreach($get_tags as $tag){
                            $tags[]=[
                                "tag_id" => $tag->term_id,
                                "tag_name" => $tag->name,
                                "tag_link" => get_term_link($tag->term_id)
                            ];
                        }
                    }

                    $data[]=[
                        'id' => $id,
                        "title" => get_the_title(),
                        "excerpt" => get_the_excerpt(),
                        "comment_count" => wp_count_comments($id)->all,
                        "post_date" => get_the_date('M d, y'),
                        "image_url" => get_the_post_thumbnail_url(null, 'full'),
                        "author_name" => get_the_author_meta( 'display_name', $author_id ),
                        "author_url" => get_author_posts_url(get_the_author_meta('ID')),
                        "category" => $category,
                        "tags" => $tags,
                        "post_link" => get_post_permalink(),
                        "total_post" => $query->found_posts,
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