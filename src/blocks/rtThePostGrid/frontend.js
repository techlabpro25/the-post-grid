import RenderView from "./renderView";

const {render, useState, useEffect} = wp.element;
import apiFetch from '@wordpress/api-fetch';
import $ from "jquery";

const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const {query, pagination} = props
    const [pagestate, setPagestate] = useState(0);
    const [pageindex, setPageindex] = useState(1);
    const [message, setMessage] = useState("");

    useEffect(() => {
        let nawauthor = query?.author?.toString();
        let newstatus = query?.status?.toString();
        $(document).on('click', '.pagination .pagination_number', function (){
            setPageindex(parseInt($(this).attr('data-value')))
            $('.pagination .pagination_number').removeClass('active')
            $(this).addClass('active')
        })
        let newOffset = 0;
        let newLimit = 0;
        let paginationLimit = 0;
        if(pagination.show){
            newLimit = pagination.post_per_page
            newOffset = (pageindex * newLimit)-newLimit
            paginationLimit = newLimit
        }else{
            newLimit = query.limit
            newOffset = query.offset
            paginationLimit = query.limit
        }
        apiFetch({
            path: '/rt/v1/query',
            method:'POST',
            data:{
                post_type: query.post_type,
                post_per_page: newLimit,
                include: query.include,
                exclude: query.exclude,
                offset: newOffset,
                order_by: query.order_by,
                order: query.order,
                author: nawauthor,
                status:newstatus,
                keyword: query.keyword,
                terms: query.tax_term,
                relation: query.relation
            }
        }).then((posts) => {
            if(posts.length == 0){
                setMessage("Sorry! No Post Found.")
            }else{
                setMessage("")
                setData(posts);
                setPagestate(Math.ceil(posts?.[0]?.total_post/((paginationLimit == 0)||(paginationLimit == -1)? 1:paginationLimit)))
            }

            setIsloading(false);

        });
    }, [query, pagination, pageindex]);

    return (
        <div className="rt-thepostgrid-frontend">
            {
                isloading?(
                    <div class="lds-dual-ring"></div>
                ):(

                    <>
                        {
                            (message.length )?(
                                <>
                                    {message}
                                </>

                            ):(
                                <RenderView {...props} data={data}/>
                            )
                        }

                        {
                            pagination.show?(
                                <div className={"pagination"}>
                                    {Array.from(Array(pagestate), (e, i) => {
                                        if(i == 0){
                                        return <span className={"pagination_number active"} data-value={i+1} key={i}>{i+1}</span>
                                    }else{
                                        return <span className={"pagination_number"} data-value={i+1} key={i}>{i+1}</span>
                                    }

                                    })}
                                </div>
                            ):("")
                        }
                </>
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
