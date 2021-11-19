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
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("");
    const {query} = props


    useEffect(() => {
        setAuthor(Object.values(query.author).join(","))
        setStatus(Object.values(query.status).join(","))
        apiFetch({path: '/rt/v1/query?post_type='+query.post_type+'&post_per_page='+query.limit+'&include='+query.include+'&exclude='+query.exclude+'&offset='+query.offset+'&order_by='+query.order_by+'&order='+query.order+'&author='+author+'&status='+status+'&keyword='+query.keyword}).then((posts) => {
            setData(posts);
            setIsloading(false)
        });
    }, [query]);


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
