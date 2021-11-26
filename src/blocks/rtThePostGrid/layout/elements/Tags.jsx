import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTags} from "@fortawesome/free-solid-svg-icons";
import {MetaIcon, MetaTagStyle} from "../../Style_component";

export const Tags = (props) =>{
    const { meta, meta_style, primary_color, post_tags } = props.data
    return(
        <span className="post-tags-links">
            {
                meta.icon?(
                    <MetaIcon as={FontAwesomeIcon} css={meta_style} primary={primary_color} icon={faTags} />
                ):("")
            }
            &nbsp;
            {
                post_tags?.length && post_tags.map((tag_item, i) => {

                    return (
                        <>
                            {(i > 0) ? ", " : ""}
                            <MetaTagStyle css={meta_style} primary={primary_color} href={tag_item.tag_link} rel="tag">
                                {tag_item.tag_name}
                            </MetaTagStyle>
                        </>

                    )
                })
            }
            {" " + meta.seperator}
        </span>
    )
}