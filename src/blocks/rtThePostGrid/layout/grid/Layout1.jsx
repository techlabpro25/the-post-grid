import {Head_border_style1, Head_title} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';


const Layout1 = (props) => {
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
		Head_border_style1,
		MetaStyle_align,
		Content_wrap,
        Content_padding,
		Cat_style_non_default
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


	console.log(category.position)
    return (
        <>
			<Content_wrap css={content_wrap} css_pad={constent_box_padding}>
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
				<Content_padding css_pad={content_padding} className="rt-container-fluid rt-tpg-container ">
					{
						data.length && data.map((post) =>{
							var postexcerpt = post.excerpt;
							var post_title = post.title;

							if(title.type == "char"){
								post_title = trimbychar(post_title, title.word_limit, title.more_text)
							}

							if(title.type == "word"){
								post_title = trimbyword(post_title, title.word_limit, title.more_text)
							}

							if(excerpt.type == "char"){
								postexcerpt = trimbychar(postexcerpt, excerpt.limit, excerpt.more_text)
							}

							if(excerpt.type == "word"){
								postexcerpt = trimbyword(postexcerpt, excerpt.limit, excerpt.more_text)
							}

							return(
								<>
									<div className="rt-col-md-4 rt-col-sm-6 rt-col-xs-12 rt-equal-height  rt-grid-item even-grid-item">
										<div className="rt-holder">
											<div className="rt-img-holder">
												<a data-id={post.id} className="" href={post.post_link}>
													<img width="" height="150" src={post.image_url} className="rt-img-responsive" alt=""/>
												</a>
												{
													(category.position.includes('over-image'))?(
														<div class={`cat-${category.position} ${category.style}`}>
															<span class="categories-links">
																<i class="fas fa-folder-open"></i>
																{
																	post?.category?.length && post.category.map((cat_item, i) =>{

																		return(
																			<>
																				{(i>0)? " , ":""}
																				<Cat_style_non_default css={category_style} css_pad={category_padding} css_mar={category_margin} href={cat_item.cat_link} rel="category">
																					{cat_item.cat_name}
																				</Cat_style_non_default>
																			</>

																		)
																	})
																}
															</span>
														</div>
													):("")
												}
											</div>

											<div className="rt-detail">
												{
													(category.position == "above-title")?(
														<div class={`cat-above-title ${category.style}`}>
															<span class="categories-links">
																<i class="fas fa-folder-open"></i>
																{
																	post?.category?.length && post.category.map((cat_item, i) =>{

																		return(
																			<>
																				{(i>0)? " , ":""}
																				<Cat_style_non_default css={category_style} css_pad={category_padding} css_mar={category_margin} href={cat_item.cat_link} rel="category">
																					{cat_item.cat_name}
																				</Cat_style_non_default>
																			</>

																		)
																	})
																}
															</span>
														</div>
													):('')
												}

												{
													general.title? (
														<Titletag as={Title} css={title_style} className="entry-title">
															<Titlea css={title_style} data-id={post.id} className="" href={post.post_link}>
																{post_title}
															</Titlea>
														</Titletag>
													):('')
												}

												<MetaStyle_align css={meta_style} className="post-meta-user  ">
													{
														general.author?(
															<span className="author">
																<i className="fa fa-user"></i>
																<a href={post.author_url}>
																	<MetaStyle css={meta_style}>{post.author_name}</MetaStyle>
																</a>
																{meta.seperator}
															</span>
														):("")
													}

													{/*Post date*/}
													{
														general.post_date?(
															<span className="date">
																<i className="far fa-calendar-alt"></i>
																<MetaStyle css={meta_style}>{post.post_date}</MetaStyle>
																{meta.seperator}
															</span>
														):('')
													}

													{/*Category*/}
													{
														(category.position.length == 0) && general.category?(
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
																	{" "+meta.seperator}
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
																	{" "+meta.seperator}
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

												</MetaStyle_align>

												{/*Excerpt*/}
												{
													general.excerpt?(
														<Excerpts css={excerpt_style} className="tpg-excerpt">
															{postexcerpt}
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
				</Content_padding>
			</Content_wrap>
		</>
    );
}

export default Layout1;