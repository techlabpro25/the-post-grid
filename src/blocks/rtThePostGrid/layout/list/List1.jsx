import {
    Excerpts,
    Button_style,
    Btn_align,
    Head_title,
    Head_color,
    Head_border,
    Head_border_style1,
    MetaStyle_align,
    Content_wrap,
    Content_padding,
    ImgParent
} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';
import {Titles} from "../elements/Titles";
import {Image} from "../elements/Image";
import {Author} from "../elements/Author";
import {Date} from "../elements/Date";
import {CommentCount} from "../elements/CommentCount";
import {Category_Default, Non_Category_Default} from "../elements/Category";
import {Tags} from "../elements/Tags";

export const List1 = (props) =>{
    const {
        title,
        title_style,
        data,
        excerpt,
        excerpt_style,
        category,
        category_style,
        category_padding,
        category_margin,
        meta,
        meta_style,
        button,
        button_style,
        general,
        heading,
        heading_style,
        heading_title,
        heading_padding_object,
        heading_margin_object,
        content_wrap,
        constent_box_padding,
        content_padding,
        image,
        primary_color,
        parent_class,
        columns,
        linking
    } = props


    let Heading = "";
    let Title = "";
    if (heading.tag === undefined) {
        Heading = 'h2'
    } else {
        Heading = 'h' + heading.tag
    }

    if (title.tag === undefined) {
        Title = 'h2'
    } else {
        Title = 'h' + title.tag
    }

    return(
        <>
            <Content_wrap css={content_wrap} css_pad={constent_box_padding} className={`${parent_class}`}>
                {
                    general.heading?(
                        <Head_border css={heading_style} css_head={heading} className={`tpg-widget-heading-wrapper heading-style${heading.style} ${heading_style['text-align']}`}>

                            {
                                (heading.style == "1") ? (<Head_border_style1 css={heading_style} className="tpg-widget-heading-line line-left"></Head_border_style1>) : ("")
                            }
                            <Head_title css={heading_style} primary={primary_color} css_pad={heading_padding_object} css_mar={heading_margin_object} as={Heading} className="tpg-widget-heading">
                                <Head_color css={heading_style} primary={primary_color} href={heading.link}>{heading_title}</Head_color>
                            </Head_title>
                            {
                                (heading.style == "1") ? (<Head_border_style1 css={heading_style} className="tpg-widget-heading-line"></Head_border_style1>) : ("")
                            }

                        </Head_border>
                    ):("")
                }
                <Content_padding css_pad={content_padding}className={`rt-row rt-content-loader layout2 tpg-even`}>
                    {
                        data.length && data.map((post) => {
                            var postexcerpt = post.excerpt;
                            var post_title = post.title;

                            if (title.type == "char") {
                                post_title = trimbychar(post_title, title.word_limit, title.more_text)
                            }

                            if (title.type == "word") {
                                post_title = trimbyword(post_title, title.word_limit, title.more_text)
                            }

                            if (excerpt.type == "char") {
                                postexcerpt = trimbychar(postexcerpt, excerpt.limit, excerpt.more_text)
                            }

                            if (excerpt.type == "word") {
                                postexcerpt = trimbyword(postexcerpt, excerpt.limit, excerpt.more_text)
                            }

                            // Title
                            const title_props = {
                                Title,
                                title_style,
                                primary_color,
                                id: post.id,
                                target: linking.terget,
                                link: post.post_link,
                                post_title
                            }
                            const image_props = {
                                id: post.id,
                                link: post.post_link,
                                target: linking.terget,
                                image,
                                image_url: post.image_url
                            }
                            const author_props = {
                                meta,
                                author_url: post.author_url,
                                meta_style,
                                primary_color,
                                name: post.author_name
                            }
                            const date_props = {meta, meta_style, primary_color, date: post.post_date}
                            const comment_count_props = {
                                meta,
                                meta_style,
                                primary_color,
                                count: post.comment_count,
                                link: post.post_link
                            }
                            const category_props = {
                                meta,
                                primary_color,
                                category,
                                post_cat: post?.category,
                                category_style,
                                category_padding,
                                category_margin
                            }
                            const tag_props = {
                                meta,
                                primary_color,
                                post_tags: post?.tags,
                                category_style,
                                category_padding,
                                category_margin
                            }

                            return(
                                <>
                                    <div className="rt-col-md-4 rt-col-sm-6 rt-col-xs-12 rt-equal-height even-grid-item rt-grid-item" data-id="631">
                                        <div className="rt-holder">
                                            <div className="rt-row">
                                                <div className="rt-col-sm-4 rt-col-xs-12 ">
                                                    <div className="rt-img-holder">
                                                        <a data-id="631" className="" href="http://gutenberg.local/creating-students-who-solve-problems/">
                                                            <img
                                                            width="150" height="150"
                                                            src="http://gutenberg.local/wp-content/uploads/2021/10/water-drops-around-football-player-150x150.jpg"
                                                            className="rt-img-responsive" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="rt-col-sm-8 rt-col-xs-12 ">
                                                    <div className="rt-detail">
                                                        <h3 className="entry-title">
                                                            <a data-id="631" className="" href="http://gutenberg.local/creating-students-who-solve-problems/">
                                                                Creating Students Who Solve Problems
                                                            </a>
                                                        </h3>
                                                        <div className="post-meta-user ">
                                                            <span className="date-meta">
                                                                <i className="far fa-calendar-alt"></i>
                                                                October 13, 2021
                                                            </span>
                                                            <span className="author">
                                                                <i className="fa fa-user"></i>
                                                                <a href="http://gutenberg.local/author/a/">Alex Harber</a>
                                                            </span>
                                                            <span className="categories-links">
                                                                <i className="fas fa-folder-open"></i><a href="http://gutenberg.local/category/geometry/" rel="tag">Geometry</a>
                                                            <span className="rt-separator">,</span>
                                                                <a href="http://gutenberg.local/category/mathematics/" rel="tag">Mathematics</a>
                                                            </span>
                                                            <span className="comment-count">
                                                                <i className="fas fa-comments"></i>
                                                                <a href="http://gutenberg.local/creating-students-who-solve-problems/#respond">0 </a>
                                                            </span>
                                                        </div>
                                                        <div className="tpg-excerpt">
                                                            Vesti at bulum nec odio the that
                                                            ads dolocons rsus mal suada and that as fadolorit
                                                            consectetur elit. ...
                                                        </div>
                                                        <span className="read-more ">
                                                            <a data-id="631" className="" href="http://gutenberg.local/creating-students-who-solve-problems/">Read More</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Content_padding>
            </Content_wrap>
        </>
    )
}