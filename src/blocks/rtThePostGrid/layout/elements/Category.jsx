import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import {Cat_style, Cat_style_non_default, MetaCatIcon, MetaIcon} from "../../Style_component";


// For Default
export const Category_Default = (props) =>{
    const { meta, meta_style, primary_color, category, post_terms, category_style, category_padding, category_margin } = props.data

    return(
        <>
            {
                (post_terms.length > 0)? (
                    <span className="categories-links">
                        {
                            category.icon?(
                                <a id={"terms_icon"} href={"#"}>
                                    <MetaCatIcon as={FontAwesomeIcon} cat_type={category} meta={meta_style} css={category_style} primary={primary_color} icon={faFolderOpen} className={'iconclass'} />
                                </a>
                            ):("")
                        }

                        {
                            post_terms?.length && post_terms.map((term_item, i) => {
                                if(term_item.length > 0){
                                    return(
                                        <>
                                            {((i > 0) && ((category_style['background-color'] == "") || (category_style['background-color'] == undefined))) ? ", " : "   "}
                                            {
                                                term_item?.length && term_item?.map((items,i) =>{
                                                    return (
                                                        <>
                                                            {/*=*/}
                                                            {((category.style == 'style1') && (i > 0) && (category_style['background-color'] == "")) ? ", " : "   "}
                                                            <Cat_style css={category_style} meta={meta_style} primary={primary_color} css_pad={category_padding} css_mar={category_margin} href={items.term_link} className={"terms"} rel="category">
                                                                {items.term_name}
                                                            </Cat_style>
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
                ):("")
            }
        </>
    )
}


// For Non Default
export const Non_Category_Default = (props) =>{
    const { meta, meta_style, primary_color, category, post_terms, category_style, category_padding, category_margin } = props.data
    return(
        <>
            {
                (post_terms.length > 0)?(
                    <span className="categories-links">
                        {
                            category.icon?(
                                <a id={"terms_icon"} href={"#"}>
                                    <MetaCatIcon as={FontAwesomeIcon} cat_type={category} meta={meta_style} css={category_style} primary={primary_color} icon={faFolderOpen} className={'iconclass'} />
                                </a>
                            ):("")
                        }

                        {
                            post_terms?.length && post_terms.map((term_item, i) => {
                                if(term_item.length > 0){
                                    return(
                                        <>
                                            {
                                                term_item?.length && term_item?.map((items) =>{
                                                    return (
                                                        <>
                                                            {((category.style == 'style1') && (i > 0) && ((category_style['background-color'] == "") || (category_style['background-color'] == undefined))) ? ", " : "   "}
                                                            <Cat_style_non_default cat_style={category} css={category_style} meta={meta_style} primary={primary_color} css_pad={category_padding} css_mar={category_margin} href={items.term_link} className={"terms"} rel="category">
                                                                {items.term_name}
                                                            </Cat_style_non_default>
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
                ):("")
            }
        </>
    )
}