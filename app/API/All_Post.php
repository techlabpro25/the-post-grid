<?php
namespace RT\ThePostGrid\API;
use Cassandra\Date;
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
        $limit = (($request['limit'] == '') || ($request['limit'] == 0))? -1 : $request['limit'];
        $excerpt_type = $request['excerpt_type'];
        $size = explode('x', $request['imgsize']);
        $post_type =  ($request["post_type"] === null )? "post": $request["post_type"];
        $post_per_page =  (($request["post_per_page"] === "") || ($request["post_per_page"] === 0) )? -1: $request["post_per_page"];
        $sticky = $request['sticky'];
        $date_from = $request['date_from'];
        $date_to = $request['date_to'];
        $today  = getdate();
        $filter_taxonomy = $request['filter_taxonomy'];
        $filter_author = $request['filter_author'];
        $filter_order_by = $request['filter_order_by'];
        $filter_order = $request['filter_order'];
        $filter_search = $request['filter_search'];
        $filter_active = $request['filter_active'];
        $filter_taxonomy_taxonomy = $request['filter_taxonomy_taxonomy'];



        $args = array(
            'post_type' => $post_type,
            'posts_per_page' => $post_per_page,
        );
        if(isset($sticky) && $sticky == 1){
            $args['ignore_sticky_posts']  = 1;
        }

        if(isset($date_from) && isset($date_to)){
            $d_from = date('F d, Y', strtotime($date_from));
            $d_to = date('F d, Y', strtotime($date_to));

            $args['date_query'] = [
                'after' => $d_from,
                'before' => $d_to
            ];
        }else{
            if(isset($date_from) && !isset($date_to)){
                $d_from = date('F d, Y', strtotime($date_from));
                $args['date_query'] = [
                    'after' => $d_from,
                    'before' => $today['month']." ".$today['yday'].", ".$today['year']
                ];
            }
        }

        if(empty(array_filter($include))){
            if($pagination && ($limit != -1)){
                $tempArgs                   = $args;
                $tempArgs['posts_per_page'] = $limit;
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
            if(!empty($filter_order)){
                $args['order'] = $filter_order;  // For filter
            }else{
                $args['order'] = $order;
            }
        }

        if(isset($order_by) && $order_by){
            if(!empty($filter_order_by)){
                $args['orderby'] = $filter_order_by;  // For filter
            }else{
                $args['orderby'] = $order_by;
            }
        }

        if(isset($keyword) && $keyword){
            if(!empty($filter_search)){
                $args['s'] = $keyword."+".$filter_search;  // For filter
            }else{
                $args['s'] = $keyword;
            }
        }

        if(!empty($author) && isset($author) && array_filter($author)){
            if(!empty($filter_author)){
                $args['author__in'] = $filter_author;  // For filter
            }else{
                $args['author__in'] = $author;
            }
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
                        if(empty($filter_taxonomy) || ($filter_taxonomy_taxonomy === $key)){
                            $args['tax_query'][]= array(
                                'taxonomy' => esc_html($key),
                                'field' => esc_html('term_id'),
                                'terms' => $term_val,
                                'operator' => esc_html($operator),
                            );
                        }

                    }
                }
                if(isset($relation) && $relation){
                    if(!empty($filter_taxonomy)){
                        $args['tax_query']['relation'] = "AND";  // For filter
                    }else{
                        $args['tax_query']['relation'] = $relation;
                    }

                }

                // For filter
                if(!empty($filter_taxonomy) && !empty($filter_taxonomy_taxonomy)){
                    $args['tax_query'][]= array(
                        'taxonomy' => $filter_taxonomy_taxonomy,
                        'field' => esc_html('term_id'),
                        'terms' => $filter_taxonomy,
                    );
                }

            }
        }else{

            // For filter
            if(!empty($filter_taxonomy) && !empty($filter_taxonomy_taxonomy)){
                $args['tax_query'][]= array(
                    'taxonomy' => $filter_taxonomy_taxonomy,
                    'field' => esc_html('term_id'),
                    'terms' => $filter_taxonomy,
                );
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
                                    "term_slug" => esc_html($termitems->slug),
                                    "term_link" => esc_html(get_term_link($termitems->term_id)),
                                ];
                            }
                        }
                        $items[]=$tempterms;
                    }



                    $data[]=[
                        'id' => $id,
                        "title" => strip_tags(esc_html(get_the_title())),
                        "content" => get_the_content(),
                        "excerpt" => strip_tags(get_the_excerpt()),
                        "comment_count" => esc_html(wp_count_comments($id)->all),
                        "post_date" => esc_html(get_the_date('M d, y')),
                        "image_url" => esc_url_raw(get_the_post_thumbnail_url(null, $size)),
                        "author_name" => esc_html(get_the_author_meta( 'display_name', $author_id )),
                        "author_url" => esc_html(get_author_posts_url(get_the_author_meta('ID'))),
                        "post_link" => esc_url_raw(get_post_permalink()),
                        "total_post" => esc_html($query->found_posts),
                        "terms" => $items,
                        'args' => $args,
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