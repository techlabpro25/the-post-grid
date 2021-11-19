import RenderView from "./renderView";

const {render, useState, useEffect} = wp.element;
import apiFetch from '@wordpress/api-fetch';

const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const {query} = props


    useEffect(() => {

        let nawauthor = query.author.toString();
        let newstatus = query.status.toString();
        apiFetch({path: '/rt/v1/query?post_type='+query.post_type+'&post_per_page='+query.limit+'&include='+query.include+'&exclude='+query.exclude+'&offset='+query.offset+'&order_by='+query.order_by+'&order='+query.order+'&author='+nawauthor+'&status='+newstatus+'&keyword='+query.keyword}).then((posts) => {
            setData(posts);
            setIsloading(false)
        });
    }, [query]);

    return (
        <div className="rt-thepostgrid-frontend">
            {
                isloading?(
                    <div class="lds-dual-ring"></div>
                ):(
                    <RenderView {...props} data={data}/>
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
