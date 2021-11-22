import {Titlea, Titletag} from "../../Style_component";

export const Titles = (props) =>{
    const { Title, title_style, primary_color, id, target, link, post_title } = props.data
    return(
        <Titletag as={Title} css={title_style} className="entry-title">
            <Titlea css={title_style} primary={primary_color} data-id={id} target={target} className="" href={link}>
                {post_title}
            </Titlea>
        </Titletag>
    )
}