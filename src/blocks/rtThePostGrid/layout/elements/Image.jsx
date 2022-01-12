import {ImgAnimation} from "../../Style_component";

export const Image = (props) =>{
    const {id, link, target, image_url, image, layout, loaders} = props.data
    const image_size = image.size.split('x')

    return(
        <>
            {loaders?(
                // <div className="rt-tpg-lds-ripple-image">
                //     <div></div>
                //     <div></div>
                // </div>
                ""
            ):('')}
            {
                (image_url.length > 0)? (
                    <a data-id={id} className="" href={link} target={target}>
                        <ImgAnimation css={image} layout={layout} width={image_size[0]} height={image_size[1]} src={image_url} className={`rt-img-responsive ${image.animation}`} alt="" />
                    </a>
                ):("")
            }
        </>
    )
}