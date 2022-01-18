import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {MetaIcona, MetaTagStyle} from "../../Style_component";

export const Author = (props) => {
    const { meta, author_url, meta_style, primary_color, name, layout, meta_icon } = props.data
    return (
        <span className="author">
            {
                meta.icon ? (
                    <a href={author_url}>
                        <MetaIcona as={FontAwesomeIcon} lay_sty={layout} icon_props={meta_icon} css={meta_style} primary={primary_color} icon={faUser} className={'iconclass'}/>
                    </a>

                ) : ("")
            }

            <MetaTagStyle lay_sty={layout} css={meta_style} primary={primary_color} href={author_url}>
                {name}
            </MetaTagStyle>

            {meta.seperator}
        </span>
    )
}