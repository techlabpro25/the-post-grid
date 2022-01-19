import {
	Excerpts,
	Button_style,
	Btn_align,
	Head_title,
	Head_color,
	Head_border,
	Head_border_style1,
	MetaStyle_align,
	Content_wrap_grid_2,
	Content_padding_grid_2,
	ImgParent, Dot_style, Colgut
} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';
import {Titles} from "../elements/Titles";
import {Image} from "../elements/Image";
import {Author} from "../elements/Author";
import {Date} from "../elements/Date";
import {CommentCount} from "../elements/CommentCount";
import {Category_Default, Non_Category_Default} from "../elements/Category";

const Grid2 = (props) => {
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
		heading_style,
		heading_title,
		heading_padding_object,
		heading_margin_object,
		content_wrap,
		constent_box_padding,
		content_padding,
		image,
		primary_color,
		columns,
		linking,
		layout,
		heading_dot_margin,
		loaders,
		className,
		grid_2_body_hover,
		meta_icon
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

	return (
		<>
			<div className={`rt-row rt-content-loader layout1 tpg-even grid-layout-2 layout_parent`}>
					{
						data.length && data.map((post) => {

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
									<Colgut lay_sty={layout.value} css={content_wrap} className={`rt-col-md-${columns.desktop} rt-col-sm-${(columns.tablet == "24")? "2":columns.tablet} rt-col-xs-${(columns.mobile == "24")? "2":columns.mobile} grid1 even-grid-item ${image.animation}`}>
										<Content_wrap_grid_2
											css={content_wrap}
											hover={grid_2_body_hover}
											category={category}
											layout={layout}
											css_pad={constent_box_padding}
											className="rt-holder">
											<div className={`rt-img-holder ${loaders.image? "show_loader": ""}`}>
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

											<Content_padding_grid_2 layout={layout} css={content_wrap} css_pad={content_padding} className="rt-detail">
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
														<MetaStyle_align css={meta_style} className="post-meta-user  ">
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

												{
													general.title ? (
														<Titles data={title_props} />
													) : ('')
												}

												{
													(meta.position == "between" || meta.position == "default") ? (
														<MetaStyle_align css={meta_style} className="post-meta-user  ">
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
														<Excerpts css={excerpt_style} lay_sty={layout.value} primary={primary_color} className="tpg-excerpt" dangerouslySetInnerHTML={{__html: postexcerpt}}>
														</Excerpts>
													) : ("")
												}

												{
													(meta.position == "below") ? (
														<MetaStyle_align css={meta_style} className="post-meta-user  ">
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
														<Btn_align css_btn={button} className="post-meta ">
															<span className="read-more">
																<Button_style css={button_style} lay_sty={layout} css_pad={button_padding} css_mar={button_margin} primary={primary_color} target={linking.target} css_btn={button} data-id={post.id} className="see_more_button" href={post.post_link}>
																	{button.text}
																</Button_style>
															</span>
														</Btn_align>
													) : ("")
												}
											</Content_padding_grid_2>
										</Content_wrap_grid_2>
									</Colgut>
								</>
							)
						})
					}
				</div>
		</>
	);
}

export default Grid2;