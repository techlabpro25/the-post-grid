import RenderView from "./renderView";
import {
    Titlea,
    Titletag,
    Excerpts,
    Cat_style,
    MetaStyle,
    Button_style,
    Btn_align,
    Head_title,
    Head_color,
    Head_border,
    Head_border_style1,
    MetaStyle_align,
    Content_wrap,
    Content_padding,
    Cat_style_non_default,
    ImgAnimation,
    ImgParent
} from './Style_component';

const {render, useState, useEffect} = wp.element;
import apiFetch from '@wordpress/api-fetch';

const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [perPage, setPerPage] = useState(props.limit || 10);
    useEffect(() => {
        apiFetch({path: '/rt/v1/query?post_type=post'}).then((posts) => {
            setData(posts);
            setIsloading(false)
        });
    }, [perPage]);

    const style_sheet ={
        Titlea,
        Titletag,
        Excerpts,
        Cat_style,
        MetaStyle,
        Button_style,
        Btn_align,
        Head_title,
        Head_color,
        Head_border,
        Head_border_style1,
        MetaStyle_align,
        Content_wrap,
        Content_padding,
        Cat_style_non_default,
        ImgAnimation,
        ImgParent
    }


    return (
        <div className="rt-thepostgrid-frontend">
            {
                isloading?(
                    <div class="lds-dual-ring"></div>
                ):(
                    <RenderView {...props} data={data} css={style_sheet}/>
                )
            }
            
        </div>
    )
}

const divsToUpdate = document.querySelectorAll(".rt-thepostgrid")

divsToUpdate.forEach(div => {
    const data = JSON.parse(div.querySelector("pre").innerText)
    render(<RtThePostGrid {...data} />, div)
    div.classList.remove("rt-radius-blocks-ph")
})
