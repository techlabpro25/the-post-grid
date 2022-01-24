import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const Social = (props) => {
    return (
        <>
            <div className="rt-tpg-social-share-links">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.data}`} target="_blank" title="Share on Facebook" className="rt-tpg-share-icon facebook-share">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>

                <a href={`http://www.twitter.com/intent/tweet?url=${props.data}`} target="_blank" className="rt-tpg-share-icon twitter-share">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>

                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${props.data}`} target="_blank" className="rt-tpg-share-icon linkedin-share">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
            </div>
        </>
    )
}