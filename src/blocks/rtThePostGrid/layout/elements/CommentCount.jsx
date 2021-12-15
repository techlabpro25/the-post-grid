import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {MetaIcona, MetaTagStyle} from "../../Style_component";

export const CommentCount = (props) =>{
    const { meta, meta_style, primary_color, count, link } = props.data
    return(
        <span className="comment-count">
            {
                meta.icon?(
                    <MetaIcona as={FontAwesomeIcon} css={meta_style} primary={primary_color} icon={faComments} />
                ):("")
            }
            &nbsp;
            <MetaTagStyle css={meta_style} primary={primary_color} href={`${link}/#respond`}>
                {count}
            </MetaTagStyle>


        </span>
    )
}