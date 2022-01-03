import {Titlea, Titletag} from "../../Style_component";

export const Titles = (props) =>{
    const { Title, title_style, primary_color, id, target, link, post_title } = props.data
    const htmltotextconvert = (title) =>{
        var txt = document.createElement("textarea");
        txt.innerHTML = title;
        return txt.value;
    }
    return(
        <Titletag as={Title} css={title_style} className="tpg-post-title-tag">
            <Titlea css={title_style} primary={primary_color} data-id={id} target={target} className="tpg-title" href={link} dangerouslySetInnerHTML={{__html: post_title}}>
            </Titlea>
        </Titletag>
    )
}