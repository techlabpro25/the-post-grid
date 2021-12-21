import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {MetaIconspan, MetaStyle} from "../../Style_component";

export const Date = (props) =>{
    const { meta, meta_style, primary_color, date} = props.data
    return(
        <span className="date">
            {
                meta.icon?(
                    <MetaIconspan as={FontAwesomeIcon} css={meta_style} primary={primary_color} icon={faCalendarAlt} />
                ):("")
            }

            <MetaStyle css={meta_style} primary={primary_color} >{date}</MetaStyle>
            {meta.seperator}
        </span>
    )
}