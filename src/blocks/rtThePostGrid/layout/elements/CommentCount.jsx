import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import {MetaStyle} from "../../Style_component";

export const CommentCount = (props) =>{
    const { meta, meta_style, primary_color, count, link } = props.data
    return(
        <span className="comment-count">
            {
                meta.icon?(
                    <FontAwesomeIcon icon={faComments} />
                ):("")
            }
            &nbsp;
            <a href={`${link}/#respond`}>
                <MetaStyle css={meta_style} primary={primary_color} >{count}</MetaStyle>
            </a>

        </span>
    )
}