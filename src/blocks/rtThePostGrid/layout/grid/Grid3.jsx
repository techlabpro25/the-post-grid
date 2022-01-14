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
	Content_padding_grid,
	ImgParent, Dot_style, Colgut
} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';
import {Titles} from "../elements/Titles";
import {Image} from "../elements/Image";
import {Author} from "../elements/Author";
import {Date} from "../elements/Date";
import {CommentCount} from "../elements/CommentCount";
import {Category_Default, Non_Category_Default} from "../elements/Category";

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
		className
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

	console.log(3%2)
	let positionindex = 1;

	return (
		<>
			<div className={`${(className != undefined)? className: ""} rt-container-fluid rt-tpg-container`}>
				{
					(general.heading && (heading_title.length > 0))?(
						<Head_border css={heading_style} css_head={heading} className={`tpg-widget-heading-wrapper heading-style${heading.style} ${heading_style['text-align']}`}>

							{
								(heading.style == "1") ? (<Head_border_style1 css={heading_style} className="tpg-widget-heading-line line-left"></Head_border_style1>) : ("")
							}
							<Head_title css={heading_style} head_sty={heading} primary={primary_color} css_pad={heading_padding_object} css_mar={heading_margin_object} as={Heading} className="tpg-widgets-heading">
								<Head_color as={(heading.link.length > 0)? 'a': 'span'} css={heading_style} primary={primary_color} href={heading.link}>{heading_title}</Head_color>
							</Head_title>
							<Dot_style css={heading_style} css_mar={heading_dot_margin} className="heading_dot"></Dot_style>
							{
								(heading.style == "1") ? (<Head_border_style1 css={heading_style} className="tpg-widget-heading-line"></Head_border_style1>) : ("")
							}

						</Head_border>
					):("")
				}
				
				<div className={`rt-row rt-content-loader grid-layout2 tpg-even grid-behaviour grid_layout_wrapper`}>
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
							const title_props = { Title, title_style, primary_color, id:post.id, target:linking.target, link: post.post_link, post_title }
							const image_props = { id:post.id, link: post.post_link, target:linking.target, image, image_url:post.image_url, layout: layout.value, loaders: loaders.image }
							const author_props = { meta, author_url: post.author_url, meta_style, primary_color, name:post.author_name}
							const date_props = { meta, meta_style, primary_color, date: post.post_date}
							const comment_count_props = { meta, meta_style, primary_color, count: post.comment_count, link:post.post_link}
							const category_props = { meta, meta_style, primary_color, category, post_terms: post?.terms, category_style, category_padding, category_margin }
							// const tag_props = { meta, meta_style, primary_color, post_tags: post?.tags }

							return (
								<>
									<div
										className="rt-col-md-6 rt-col-sm-12 rt-col-xs-12 rt-ready-animation animated fadeIn default rt-grid-item">
										<div className="rt-holder tpg-post-holder">
											<div className="rt-detail rt-el-content-wrapper-flex">
												<div className="rt-img-holder tpg-el-image-wrap has-thumbnail">
													<a data-id="3601"
													   href="https://radiustheme.net/habib/postgrid/2018/10/04/future-iphones-and-ipads-could-have-stretchy-screens/"
													   className="tpg-post-link" target="_self">
														<img width="768"
															 height="410"
															 src="https://radiustheme.net/habib/postgrid/wp-content/uploads/2018/10/tech_2-1-768x410.jpg"
															 className="elementor-animation-default attachment-medium_large size-medium_large"
															 alt=""
															 loading="lazy"/>
													</a>

													<div className="overlay always"></div>
												</div>

												<div className="post-right-content">

													<div className="entry-title-wrapper"><h3 className="entry-title"><a
														data-id="3601"
														href="https://radiustheme.net/habib/postgrid/2018/10/04/future-iphones-and-ipads-could-have-stretchy-screens/"
														className="tpg-post-link" target="_self">9 Future iPhones and
														iPads could have stretchy screens</a></h3></div>

													<div className="post-meta-tags rt-el-post-meta">
						                				<span className="author ">
                											<i className="fa fa-user"></i><a href="https://radiustheme.net/habib/postgrid/author/admin/">admin</a>
														</span>
														<span className="categories-links">
                											<i className="fas fa-folder-open"></i>
															<a href="https://radiustheme.net/habib/postgrid/category/security/" rel="tag">Security</a>			</span>
														<span className="date">
                											<i className="far fa-calendar-alt"></i>
															October 4, 2018
														</span>
													</div>


													<div className="tpg-excerpt tpg-el-excerpt">
														Nmply dummy text of the printing and typesetting industry. Lorem
														...
													</div>

													<div className="post-footer">
														<div className="read-more">
															<a data-id="3601"
															   href="https://radiustheme.net/habib/postgrid/2018/10/04/future-iphones-and-ipads-could-have-stretchy-screens/"
															   className="tpg-post-link" target="_self">Read More</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</>
							)
						})
					}
				</div>
			</div>
		</>
	);
}

export default Grid3;