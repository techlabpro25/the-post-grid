import {ImgAnimation} from "../../Style_component";

export const Image = (props) =>{
    const {default_preview_image, id, link, target, image_url, image, layout, loaders, first_image, img_source} = props.data

    let width = "";
    let height = "";
    if(image.size !== "custom"){
        const image_size = image.size.split('x')
        width = image_size[0];
        height = image_size[1]
    }else{
        width = image.width;
        height = image.height;
    }

    let img_link = ""
    if(img_source === "first_img"){
        img_link = first_image;
    }else{
        img_link = image_url;
    }

    if(img_link === ""){
        if(default_preview_image?.url !== ""){
            img_link = default_preview_image?.url
        }
    }

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
                (img_link?.length > 0)? (
                    <a data-id={id} className="" href="#" target={target}>
                        <ImgAnimation css={image} layout={layout} width={width} height={height} src={img_link} className={`rt-img-responsive ${image.animation}`} alt="" />
                    </a>
                ):("")
            }
        </>
    )
}