import { 
	Titlea,
	Titletag,
	Excerpts,
	Category,
	MetaStyle,
	Button_style,
	Btn_align 
} from './../Style_component';

const Layout1 = (props) => {
    const {
		title_style, 
		data, 
		excerpt_style, 
		category_style, 
		category_padding, 
		category_margin, 
		meta_style,
		button,
		button_style,
	} = props
	
    return (
        <>
            <div className="rt-container-fluid rt-tpg-container ">
                {
                    data.length && data.map((post) =>{
                        return(
                            <>
                                <div className="rt-col-md-4 rt-col-sm-6 rt-col-xs-12 rt-equal-height  rt-grid-item even-grid-item">
                                    <div className="rt-holder">
                                        <div className="rt-img-holder">
                                            <a data-id={post.id} className="" href={post.post_link}>
                                                <img width="" height="150" src={post.image_url} className="rt-img-responsive" alt=""/>
                                            </a>
                                        </div>
                                        <div className="rt-detail">
                                            <Titletag css={title_style} className="entry-title">
                                                <Titlea css={title_style} data-id={post.id} className="" href={post.post_link}>
                                                    {post.title}
                                                </Titlea>
                                            </Titletag>
                                            <div className="post-meta-user  ">
                                                <span className="author">
                                                    <i className="fa fa-user"></i>
                                                    <a href={post.author_url}>
                                                        <MetaStyle css={meta_style}>{post.author_name}</MetaStyle>
                                                    </a>
                                                </span>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt"></i>
                                                    <MetaStyle css={meta_style}>{post.post_date}</MetaStyle>
                                                </span>
                                                <span className="categories-links">
                                                    <i className="fas fa-folder-open"></i>
                                                    {
                                                        post?.category?.length && post.category.map((cat_item, i) =>{
                                                           
                                                            return(
                                                                <>
                                                                    {(i>0)? ", ":""}
                                                                    <Category css={category_style} css_pad={category_padding} css_mar={category_margin} href={cat_item.cat_link} rel="category">
                                                                        {cat_item.cat_name}
                                                                    </Category>
                                                                </>
                                                                
                                                            )  
                                                        }) 
                                                    }
                                                </span>
                                                <span className="post-tags-links">
                                                    <i className="fa fa-tags"></i>
                                                    {
                                                        post?.tags?.length && post.tags.map((tag_item, i) =>{
                                                           
                                                            return(
                                                                <>
                                                                    {(i>0)? ", ":""}
                                                                    <a href={tag_item.tag_link} rel="tag">
                                                                        {tag_item.tag_name}
                                                                    </a>
                                                                </>
                                                                
                                                            )  
                                                        }) 
                                                    }
                                                </span>
                                                <span className="comment-count">
                                                    <i className="fas fa-comments"></i>
                                                    <a href={`${post.post_link}/#respond`}>
                                                        <MetaStyle css={meta_style}>{post.comment_count}</MetaStyle>
                                                    </a>
                                                </span>
                                            </div>
                                            <Excerpts css={excerpt_style} className="tpg-excerpt">
                                                {post.excerpt}
                                            </Excerpts>
                                            <Btn_align css_btn={button} className="post-meta ">
                                                <span className="read-more">
                                                    <Button_style css={button_style} css_btn={button} data-id={post.id} className="" href={post.post_link}>
                                                        Read More
                                                    </Button_style>
                                                </span>
                                            </Btn_align>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Layout1;