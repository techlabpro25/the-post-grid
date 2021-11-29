import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import {Cat_style, Cat_style_non_default, MetaCatIcon, MetaIcon} from "../../Style_component";


// For Default
export const Category_Default = (props) =>{
    const { meta, meta_style, primary_color, category, post_cat, category_style, category_padding, category_margin } = props.data

    return(
        <>
            {
                (post_cat.length > 0)? (
                    <span className="categories-links">
                    {
                        category.icon?(
                            <MetaCatIcon as={FontAwesomeIcon} meta={meta_style} css={category_style} primary={primary_color} icon={faFolderOpen} />
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
                    </span>
                ):("")
            }
        </>
    )
}


// For Non Default
export const Non_Category_Default = (props) =>{
    const { meta, meta_style, primary_color, category, post_cat, category_style, category_padding, category_margin } = props.data
    return(
        <>
            {
                (post_cat.length > 0)?(
                    <span className="categories-links">
                        {
                            category.icon?(
                                <MetaCatIcon as={FontAwesomeIcon} meta={meta_style} css={category_style} primary={primary_color} icon={faFolderOpen} />
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
                    </span>
                ):("")
            }
        </>
    )
}