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
	ImgParent, Dot_style, Colgut
} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';
import {Titles} from "../elements/Titles";
import {Image} from "../elements/Image";
import {Author} from "../elements/Author";
import {Date} from "../elements/Date";
import {CommentCount} from "../elements/CommentCount";
import {Category_Default, Non_Category_Default} from "../elements/Category";
import {Content_padding_grid_3} from "../../styled_commponent/Styled-grid3";

const Grid3 = (props) => {
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
		button_padding,
		button_margin,
		general,
		heading,
		content_wrap,
		constent_box_padding,
		content_padding,
		image,
		primary_color,
		columns,
		linking,
		layout,
		loaders,
		grid_3,
		meta_icon,
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

	const htmltotextconvert = (excerpt) =>{
		var txt = document.createElement("textarea");
		txt.innerHTML = excerpt;
		return txt.value;
	}

	let positionindex = 1;


	return (
		<>
			<div className={`rt-row rt-content-loader grid-layout3 tpg-even grid-behaviour grid_layout_wrapper layout_parent`}>
					{
						data.length && data.map((post, i) => {

							var postexcerpt = (excerpt.type == "fullex")? post.excerpt : post.content;
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
							const title_props = { Title, title_style, primary_color, id:post.id, target:linking.target, link: post.post_link, post_title, layout: layout.value }
							const image_props = { id:post.id, link: post.post_link, target:linking.target, image, image_url:post.image_url, layout: layout.value, loaders: loaders.image }
							const author_props = { meta, author_url: post.author_url, meta_style, primary_color, name:post.author_name, layout: layout.value, meta_icon}
							const date_props = { meta, meta_style, primary_color, date: post.post_date, layout: layout.value, meta_icon}
							const comment_count_props = { meta, meta_style, primary_color, count: post.comment_count, link:post.post_link, layout: layout.value, meta_icon}
							const category_props = { meta, meta_style, primary_color, category, post_terms: post?.terms, category_style, category_padding, category_margin, layout: layout.value, meta_icon }
							// const tag_props = { meta, meta_style, primary_color, post_tags: post?.tags }

							return (
								<>
									<Colgut css={content_wrap} lay_sty={layout.value} className={`rt-col-md-${columns.desktop} rt-col-sm-${(columns.tablet == "24")? "2":columns.tablet} rt-col-xs-${(columns.mobile == "24")? "2":columns.mobile} rt-ready-animation animated fadeIn default rt-grid-item ${image.animation}`}>
										<Content_wrap css={content_wrap} layout={layout} css_pad={constent_box_padding} className="rt-holder tpg-post-holder">
											<div className="rt-detail rt-content-wrapper-flex">
												<div className={`rt-img-holder tpg-image-wrap has-thumbnail ${loaders.image? "show_loader": ""}`}>
													{
														image.show_hide?(
															<>
																<Image data={image_props}/>
															</>

														):("")
													}
													{
														(category.position.includes('over-image')) ? (
															<div className={`cat-${category.position} ${category.style}`}>
																<>
																	<Non_Category_Default data={category_props}/>
																</>

															</div>
														) : ("")
													}
												</div>

												<Content_padding_grid_3 layout={layout} css={content_wrap} css_self={grid_3} css_pad={content_padding} className="post-right-content">
													{
														(category.position == "above-title") ? (
															<div className={`cat-above-title ${category.style}`}>
																<>
																	<Non_Category_Default data={category_props}/>
																</>
															</div>
														) : ('')
													}

													{
														(meta.position == "above") ? (
															<MetaStyle_align css={meta_style} className="post-meta-tags rt-post-meta  ">
																{
																	general.author ? (
																		<Author data={author_props}/>
																	) : ("")
																}

																{/*Post date*/}
																{
																	general.post_date ? (
																		<Date data={date_props}/>
																	) : ('')
																}

																{/*Category*/}
																{
																	(category.position.length == 0) && general.category ? (
																		<>
																			<Category_Default data={category_props}/>
																			{" " + meta.seperator}
																		</>
																	) : ("")
																}


																{/*Comment count*/}
																{
																	general.comment_count ? (
																		<CommentCount data={comment_count_props}/>
																	) : ("")
																}

															</MetaStyle_align>
														) : ("")
													}

													<div className="entry-title-wrapper">
														{
															general.title ? (
																<Titles data={title_props} />
															) : ('')
														}
													</div>

													{
														(meta.position == "between" || meta.position == "default") ? (
															<MetaStyle_align css={meta_style} className="post-meta-tags rt-post-meta ">
																{
																	general.author ? (
																		<Author data={author_props}/>
																	) : ("")
																}

																{/*Post date*/}
																{
																	general.post_date ? (
																		<Date data={date_props}/>
																	) : ('')
																}

																{/*Category*/}
																{
																	(category.position.length == 0) && general.category ? (
																		<>
																			<Category_Default data={category_props}/>
																			{" " + meta.seperator}
																		</>
																	) : ("")
																}


																{/*Comment count*/}
																{
																	general.comment_count ? (
																		<CommentCount data={comment_count_props}/>
																	) : ("")
																}

															</MetaStyle_align>
														) : ('')
													}



													{/*Excerpt*/}
													{
														general.excerpt ? (
															<Excerpts css={excerpt_style} primary={primary_color} lay_sty={layout.value} className="tpg-excerpt" dangerouslySetInnerHTML={{__html: postexcerpt}}>
															</Excerpts>
														) : ("")
													}

													{
														(meta.position == "below") ? (
															<MetaStyle_align css={meta_style} className="post-meta-tags rt-post-meta  ">
																{
																	general.author ? (
																		<Author data={author_props}/>
																	) : ("")
																}

																{/*Post date*/}
																{
																	general.post_date ? (
																		<Date data={date_props}/>
																	) : ('')
																}

																{/*Category*/}
																{
																	(category.position.length == 0) && general.category ? (
																		<>
																			<Category_Default data={category_props}/>
																			{" " + meta.seperator}
																		</>
																	) : ("")
																}


																{/*Comment count*/}
																{
																	general.comment_count ? (
																		<CommentCount data={comment_count_props}/>
																	) : ("")
																}

															</MetaStyle_align>
														) : ('')
													}

													{/*See more button*/}
													{
														general.see_more ? (
															<Btn_align css_btn={button} className="post-footer ">
															<span className="read-more">
																<Button_style css={button_style} lay_sty={layout} css_pad={button_padding} css_mar={button_margin} primary={primary_color} target={linking.target} css_btn={button} data-id={post.id} className="see_more_button" href={post.post_link}>
																	{button.text}
																</Button_style>
															</span>
															</Btn_align>
														) : ("")
													}
												</Content_padding_grid_3>
											</div>
										</Content_wrap>
									</Colgut>
								</>
							)
						})
					}
				</div>
		</>
	);
}

export default Grid3;