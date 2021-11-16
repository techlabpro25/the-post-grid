import {Head_border_style1, Head_title} from "../../Style_component";


const Layout1 = (props) => {
    const {
		title,
		title_style, 
		data, 
		excerpt_style, 
		category_style, 
		category_padding, 
		category_margin, 
		meta_style,
		button,
		button_style,
		general,
		heading,
		heading_style,
		heading_title,
		heading_padding_object,
		heading_margin_object,
	} = props

	const {
		Titlea,
		Titletag,
		Excerpts,
		Cat_style,
		MetaStyle,
		Button_style,
		Btn_align,
		Head_title,
		Head_color,
		Head_border,
		Head_border_style1
	} = props.css

	let Heading ="";
	let Title ="";
	if(heading.tag === undefined){
		Heading = 'h2'
	}else{
		Heading = 'h'+heading.tag
	}

	if(title.tag === undefined){
		Title = 'h2'
	}else{
		Title = 'h'+title.tag
	}


	// console.log(props)
    return (
        <>
			<Head_border css={heading_style} css_head={heading} className={`tpg-widget-heading-wrapper heading-style${heading.style} ${heading_style['text-align']}`}>

				{
					(heading.style == "1")?(<Head_border_style1 css={heading_style} className="tpg-widget-heading-line line-left"></Head_border_style1>):("")
				}
				<Head_title css={heading_style} css_pad={heading_padding_object} css_mar={heading_margin_object} as={Heading} className="tpg-widget-heading">
					<Head_color css={heading_style} href={heading.link}>{heading_title}</Head_color>
				</Head_title>
				{
					(heading.style == "1")?(<Head_border_style1 css={heading_style} className="tpg-widget-heading-line"></Head_border_style1>):("")
				}

			</Head_border>
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
											{
												general.title? (
													<Title className="entry-title">
														<Titletag css={title_style}>
															<Titlea css={title_style} data-id={post.id} className="" href={post.post_link}>
																{post.title}
															</Titlea>
														</Titletag>
													</Title>
												):('')
											}

                                            <div className="post-meta-user  ">
												{
													general.author?(
														<span className="author">
															<i className="fa fa-user"></i>
															<a href={post.author_url}>
																<MetaStyle css={meta_style}>{post.author_name}</MetaStyle>
															</a>
														</span>
													):("")
												}

												{/*Post date*/}
												{
													general.post_date?(
														<span className="date">
															<i className="far fa-calendar-alt"></i>
															<MetaStyle css={meta_style}>{post.post_date}</MetaStyle>
														</span>
													):('')
												}

												{/*Category*/}
												{
													general.category?(
														<span className="categories-links">
															<i className="fas fa-folder-open"></i>
																{
																	post?.category?.length && post.category.map((cat_item, i) =>{

																		return(
																			<>
																				{(i>0)? ", ":""}
																				<Cat_style css={category_style} css_pad={category_padding} css_mar={category_margin} href={cat_item.cat_link} rel="category">
																					{cat_item.cat_name}
																				</Cat_style>
																			</>

																		)
																	})
																}
														</span>
													):("")
												}

												{/*Tag*/}
												{
													general.tag?(
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
													):("")
												}

												{/*Comment count*/}
												{
													general.comment_count?(
														<span className="comment-count">
															<i className="fas fa-comments"></i>
															<a href={`${post.post_link}/#respond`}>
																<MetaStyle css={meta_style}>{post.comment_count}</MetaStyle>
															</a>
														</span>
													):("")
												}

                                            </div>

											{/*Excerpt*/}
											{
												general.excerpt?(
													<Excerpts css={excerpt_style} className="tpg-excerpt">
														{post.excerpt}
													</Excerpts>
												):("")
											}

											{/*See more button*/}
											{
												general.see_more?(
													<Btn_align css_btn={button} className="post-meta ">
														<span className="read-more">
															<Button_style css={button_style} css_btn={button} data-id={post.id} className="" href={post.post_link}>
																Read More
															</Button_style>
														</span>
													</Btn_align>
												):("")
											}

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