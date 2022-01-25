import {
	Excerpts,
	Button_style,
	Btn_align,
	MetaStyle_align,
	Content_wrap, Colgut, Titlea, Titletag
} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';
import {Image} from "../elements/Image";
import {Author} from "../elements/Author";
import {Date} from "../elements/Date";
import {CommentCount} from "../elements/CommentCount";
import {Category_Default, Non_Category_Default} from "../elements/Category";
import {Content_padding_grid_3} from "../../styled_commponent/Styled-grid3";

import Modal from 'react-modal';
const {useState} = wp.element;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faFolderOpen, faUser, faComments} from "@fortawesome/free-solid-svg-icons";
import {Social} from "../elements/Social";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		["overflow-x"]: 'hidden !important'
	},
};
Modal.setAppElement('body');

const Grid3 = (props) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modaldata, setModaldata] = useState({});
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
		social_style,
		social_style_padding,
		social_style_margin,
		social_style_icon_margin,
		default_preview_image
	} = props


	let Title = "";


	if (title.tag === undefined) {
		Title = 'h2'
	} else {
		Title = 'h' + title.tag
	}
	const post_modal = (post) =>{
		setModaldata(post)
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}



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
						const title_props = { Title, title_style,  primary_color, id:post.id, target:linking.target, link: post.post_link, post_title, layout: layout.value }
						const image_props = { default_preview_image, id:post.id, link: post.post_link, first_image:post.first_img, img_source: image.source, target:linking.target, image, image_url:post.image_url, layout: layout.value, loaders: loaders.image }
						const author_props = { meta, author_url: post.author_url, meta_style, primary_color, name:post.author_name, layout: layout.value, meta_icon}
						const date_props = { meta, meta_style, primary_color, date: post.post_date, layout: layout.value, meta_icon}
						const comment_count_props = { meta, meta_style, primary_color, count: post.comment_count, link:post.post_link, layout: layout.value, meta_icon}
						const category_props = { meta, meta_style, primary_color, category, post_terms: post?.terms, category_style, category_padding, category_margin, layout: layout.value, meta_icon }
						const social_props = { link:post.post_link, social_style, social_style_padding, social_style_margin, social_style_icon_margin }

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
															<Titletag as={Title} css={title_style} lay_sty={layout.value} className="tpg-post-title">
																<Titlea
																	css={title_style}
																	primary={primary_color}
																	data-id={post.id}
																	target={linking.target}
																	href={post.post_link}
																	dangerouslySetInnerHTML={{__html: post_title}}
																	onClick={(e)=> {
																		if((linking.link_type === "popup") && (linking.popup_type === "single")){
																			e.preventDefault();
																			post_modal(post)
																		}
																	}}
																>
																</Titlea>
															</Titletag>
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

												{
													general.social_share?(
														<>
															<Social data={social_props}/>
														</>
													):("")
												}

												{/*See more button*/}
												{
													general.see_more ? (
														<Btn_align css_btn={button} className="post-footer ">
														<span className="read-more">
															<Button_style
																css={button_style}
																lay_sty={layout}
																css_pad={button_padding}
																css_mar={button_margin}
																primary={primary_color}
																target={linking.target}
																css_btn={button}
																data-id={post.id}
																className="see_more_button"
																href={post.post_link}
																onClick={(e)=> {
																	if((linking.link_type === "popup") && (linking.popup_type === "single")){
																		e.preventDefault();
																		post_modal(post)
																	}
																}}
															>
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

				{/*Modal*/}
				<Modal
					classname={"rt-tpg-modal-root"}
					overlayClassName={"rt-tpg-modal-overlay"}
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
				>
					<div className="rt-tpg-modal-content-root">
						<button className="rt-tpg-modal-close-button" onClick={closeModal}>x</button>
						<div class="rt-tpg-modal-content-panel">
							<div className="rt-tpg-modal-header">
								<h2 className="rt-tpg-modal-title">{modaldata.title}</h2>
								<div className="rt-tpg-modal-meta">
									<span className="author">
										<a href={modaldata.author_url}>
											<FontAwesomeIcon icon={faUser}/>
											{modaldata.author_name}
										</a>
									</span>

									<span className="date">
										<FontAwesomeIcon icon={faCalendarAlt}/>
										{modaldata.author_name}
									</span>

									<span className="categories-links">
										<FontAwesomeIcon icon={faFolderOpen}/>
										{
											modaldata.terms?.length && modaldata.terms.map((term_item, i) => {
												if(term_item.length > 0){
													return(
														<>
															{(i > 0) ? ", " : "   "}
															{
																term_item?.length && term_item?.map((items,i) =>{
																	return (
																		<>
																			{/*=*/}
																			{(i > 0) ? ", " : "   "}
																			<a href={items.term_link} className={"terms"} rel="category">
																				{items.term_name}
																			</a>
																		</>

																	)
																})
															}
														</>
													)

												}

											})
										}

									</span>

									<span className="comment-count">
										<a href={modaldata.author_url}>
											<FontAwesomeIcon icon={faComments}/>
											{modaldata.comment_count}
										</a>
									</span>
								</div>
							</div>
							<div className="rt-tpg-modal-body">
								<div className="rt-tpg-modal-image">
									<img src={modaldata.image_url}/>
								</div>

								<div className="rt-tpg-modal-excerpt" dangerouslySetInnerHTML={{__html: modaldata.content}}>
								</div>
							</div>

							<div className="rt-tpg-modal-footer"></div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}

export default Grid3;