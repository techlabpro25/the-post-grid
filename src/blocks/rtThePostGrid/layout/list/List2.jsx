import {
    Excerpts,
    Button_style,
    Btn_align,
    MetaStyle_align,
    Content_wrap,
    Content_padding,
    ImgCol, ContentCol, Colgut, Titlea, Titletag
} from "../../Style_component";
import { trimbychar, trimbyword } from './../../Helper';
import {Image} from "../elements/Image";
import {Author} from "../elements/Author";
import {Date} from "../elements/Date";
import {CommentCount} from "../elements/CommentCount";
import {Category_Default, Non_Category_Default} from "../elements/Category";


import Modal from 'react-modal';
const {useState} = wp.element;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faFolderOpen, faUser, faComments} from "@fortawesome/free-solid-svg-icons";

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

export const List2 = (props) =>{
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
        content_wrap,
        constent_box_padding,
        content_padding,
        image,
        primary_color,
        loaders,
        columns,
        linking,
        layout,
        meta_icon,
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


    return(
        <>
            <div className={`rt-row rt-content-loader layout2 list2 layout_parent layout3 tpg-even`}>
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
                        const image_props = {
                            id: post.id,
                            link: post.post_link,
                            target: linking.target,
                            image,
                            image_url: post.image_url,
                            layout: layout.value,
                            loaders: loaders.image
                        }
                        const author_props = {
                            meta,
                            author_url: post.author_url,
                            meta_style,
                            primary_color,
                            name: post.author_name,
                            layout: layout.value,
                            meta_icon
                        }
                        const date_props = {meta, meta_style, primary_color, date: post.post_date, layout: layout.value, meta_icon}
                        const comment_count_props = {
                            meta,
                            meta_style,
                            primary_color,
                            count: post.comment_count,
                            link: post.post_link,
                            layout: layout.value,
                            meta_icon
                        }
                        const category_props = {
                            meta,
                            meta_style,
                            primary_color,
                            category,
                            post_terms: post?.terms,
                            category_style,
                            category_padding,
                            category_margin,
                            layout: layout.value,
                            meta_icon
                        }


                        return(
                            <>
                                <Colgut lay_sty={layout.value} css={content_wrap} className={`rt-col-md-${columns.desktop} rt-col-sm-${(columns.tablet == "24")? "2":columns.tablet} rt-col-xs-${(columns.mobile == "24")? "2":columns.mobile} even-grid-item list_layout two ${image.animation}`} data-id={post.id}>
                                    <Content_wrap css={content_wrap} css_pad={constent_box_padding} className="rt-holder">
                                        <div className={`rt-row`}>
                                            {
                                                image.show_hide?(
                                                    <ImgCol css={image} className={`rt-col-sm-${(image['img-column'])? image['img-column']: ''} rt-col-xs-12 `}>
                                                        <div className={`rt-img-holder ${loaders.image? "show_loader": ""}`} id={"circle"}>
                                                            {
                                                                image.show_hide?(
                                                                    <Image data={image_props}/>
                                                                ):("")
                                                            }

                                                            {
                                                                (category.position.includes('over-image')) ? (
                                                                    <div className={`cat-${category.position} ${category.style}`}>
                                                                        <Non_Category_Default data={category_props}/>
                                                                    </div>
                                                                ) : ("")
                                                            }
                                                        </div>
                                                    </ImgCol>
                                                ):("")
                                            }
                                            <ContentCol css={image} className={`rt-col-sm-${(!image.show_hide)? "12":((image['content-column'])? image['content-column']: '')} rt-col-xs-12 `}>
                                                <Content_padding css_pad={content_padding} className="rt-detail">
                                                    {
                                                        (category.position == "above-title") ? (
                                                            <div className={`cat-above-title ${category.style}`}>
                                                                <Non_Category_Default data={category_props}/>
                                                            </div>
                                                        ) : ('')
                                                    }

                                                    {
                                                        (meta.position == "above") ? (
                                                            <MetaStyle_align css={meta_style} className="post-meta-user  ">


                                                                {/*Post date*/}
                                                                {
                                                                    general.post_date ? (
                                                                        <Date data={date_props}/>
                                                                    ) : ('')
                                                                }

                                                                {/*Author*/}
                                                                {
                                                                    general.author ? (
                                                                        <Author data={author_props}/>
                                                                    ) : ("")
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



                                                                {/*Tag*/}
                                                                {/*{*/}
                                                                {/*    general.tag ? (*/}
                                                                {/*        <Tags data={tag_props}/>*/}
                                                                {/*    ) : ("")*/}
                                                                {/*}*/}

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

                                                    {
                                                        (meta.position == "between" || meta.position == "default") ? (
                                                            <MetaStyle_align css={meta_style} className="post-meta-user  ">


                                                                {/*Post date*/}
                                                                {
                                                                    general.post_date ? (
                                                                        <Date data={date_props}/>
                                                                    ) : ('')
                                                                }

                                                                {/*Author*/}
                                                                {
                                                                    general.author ? (
                                                                        <Author data={author_props}/>
                                                                    ) : ("")
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



                                                                {/*Tag*/}
                                                                {/*{*/}
                                                                {/*    general.tag ? (*/}
                                                                {/*        <Tags data={tag_props}/>*/}
                                                                {/*    ) : ("")*/}
                                                                {/*}*/}

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
                                                        general.excerpt ? (
                                                            <Excerpts css={excerpt_style} lay_sty={layout.value} primary={primary_color} className="tpg-excerpt" dangerouslySetInnerHTML={{__html: postexcerpt}}>
                                                            </Excerpts>
                                                        ) : ("")
                                                    }

                                                    {
                                                        (meta.position == "below") ? (
                                                            <MetaStyle_align css={meta_style} className="post-meta-user  ">


                                                                {/*Post date*/}
                                                                {
                                                                    general.post_date ? (
                                                                        <Date data={date_props}/>
                                                                    ) : ('')
                                                                }

                                                                {/*Author*/}
                                                                {
                                                                    general.author ? (
                                                                        <Author data={author_props}/>
                                                                    ) : ("")
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



                                                                {/*Tag*/}
                                                                {/*{*/}
                                                                {/*    general.tag ? (*/}
                                                                {/*        <Tags data={tag_props}/>*/}
                                                                {/*    ) : ("")*/}
                                                                {/*}*/}

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
                                                            <Btn_align css_btn={button} className="read-more">
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
                                                            </Btn_align>
                                                        ) : ("")
                                                    }
                                                </Content_padding>
                                            </ContentCol>
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
    )
}