import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {MetaIconspan, MetaStyle} from "../../Style_component";

export const Date = (props) =>{
    const { meta, meta_style, primary_color, date, layout, meta_icon} = props.data
    return(
        <span className="date">
            {
                meta.icon?(
                    <MetaIconspan as={FontAwesomeIcon} icon_props={meta_icon} lay_sty={layout} css={meta_style} primary={primary_color} icon={faCalendarAlt} className={'iconclass'}/>
                ):("")
            }

            <MetaStyle lay_sty={layout} css={meta_style} primary={primary_color} >{date}</MetaStyle>
            {meta.seperator}
        </span>
    )
}