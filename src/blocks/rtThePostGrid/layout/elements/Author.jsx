import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {MetaIcon, MetaStyle} from "../../Style_component";

export const Author = (props) => {
    const { meta, author_url, meta_style, primary_color, name } = props.data
    return (
        <span className="author">
            {
                meta.icon ? (
                    <MetaIcon as={FontAwesomeIcon} css={meta_style} primary={primary_color} icon={faUser}/>
                ) : ("")
            }
            &nbsp;
            <a href={author_url}>
                <MetaStyle css={meta_style} primary={primary_color}>{name}</MetaStyle>
            </a>
            {meta.seperator}
        </span>
    )
}