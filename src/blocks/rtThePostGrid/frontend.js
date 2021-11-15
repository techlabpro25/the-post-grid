import RenderView from "./renderView";

const {render, useState, useEffect} = wp.element;
import apiFetch from '@wordpress/api-fetch';

const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(props.limit || 10);
    useEffect(() => {
        apiFetch({path: '/rt/v1/query?post_type=post&post_per_page=3&include=628,629,630&exclude=625,626&order_by=ID&order=ASC&status=publish&author=1'}).then((posts) => {
            setData(posts);
        });
    }, [perPage]);


    return (
        <div className="rt-thepostgrid-frontend">
            <RenderView {...props} data={data}/>
        </div>
    )
}

const divsToUpdate = document.querySelectorAll(".rt-thepostgrid")

divsToUpdate.forEach(div => {
    const data = JSON.parse(div.querySelector("pre").innerText)
    render(<RtThePostGrid {...data} />, div)
    div.classList.remove("rt-radius-blocks-ph")
})
