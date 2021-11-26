import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import {Cat_style, Cat_style_non_default, MetaIcon} from "../../Style_component";


// For Default
export const Category_Default = (props) =>{
    const { meta, meta_style, primary_color, category, post_cat, category_style, category_padding, category_margin } = props.data
    return(
        <span className="categories-links">
            {
                category.icon?(
                    <MetaIcon as={FontAwesomeIcon} css={category_style} primary={primary_color} icon={faFolderOpen} />
                ):("")
            }
            &nbsp;
            {
                post_cat?.length && post_cat.map((cat_item, i) => {

                    return (
                        <>
                            {(i > 0) ? ", " : ""}
                            <Cat_style css={category_style} meta={meta_style} primary={primary_color} css_pad={category_padding} css_mar={category_margin} href={cat_item.cat_link} rel="category">
                                {cat_item.cat_name}
                            </Cat_style>
                        </>

                    )
                })
            }
            {" " + meta.seperator}
        </span>
    )
}


// For Non Default
export const Non_Category_Default = (props) =>{
    const { meta, meta_style, primary_color, category, post_cat, category_style, category_padding, category_margin } = props.data
    return(
        <span className="categories-links">
            {
                category.icon?(
                    <MetaIcon as={FontAwesomeIcon} css={category_style} primary={primary_color} icon={faFolderOpen} />
                ):("")
            }
            &nbsp;
            {
                post_cat?.length && post_cat.map((cat_item, i) => {

                    return (
                        <>
                            {(i > 0) ? ", " : ""}
                            <Cat_style_non_default css={category_style} meta={meta_style} primary={primary_color} css_pad={category_padding} css_mar={category_margin} href={cat_item.cat_link} rel="category">
                                {cat_item.cat_name}
                            </Cat_style_non_default>
                        </>

                    )
                })
            }
            {" " + meta.seperator}
        </span>
    )
}