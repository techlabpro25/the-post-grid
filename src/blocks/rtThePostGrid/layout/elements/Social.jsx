import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {Social_Style, Social_Style_Icon} from "../../Style_component";

export const Social = (props) => {
    const { link, social_style, social_style_padding, social_style_margin, social_style_icon_margin } = props.data
    return (
        <>
            <Social_Style css_pad={social_style_padding} css_mar={social_style_margin} className="rt-tpg-social-share-links">
                <Social_Style_Icon css={social_style} css_mar={social_style_icon_margin} href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} target="_blank" title="Share on Facebook" className="rt-tpg-share-icon facebook-share">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </Social_Style_Icon>

                <Social_Style_Icon css={social_style} css_mar={social_style_icon_margin} href={`http://www.twitter.com/intent/tweet?url=${link}`} target="_blank" className="rt-tpg-share-icon twitter-share">
                    <FontAwesomeIcon icon={faTwitter}/>
                </Social_Style_Icon>

                <Social_Style_Icon css={social_style} css_mar={social_style_icon_margin} href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`} target="_blank" className="rt-tpg-share-icon linkedin-share">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </Social_Style_Icon>
            </Social_Style>
        </>
    )
}