import RenderView from "./renderView";

const {render, useState, useEffect} = wp.element;
import apiFetch from '@wordpress/api-fetch';
import $ from "jquery";
const {__} = wp.i18n;
const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const {query, pagination, image} = props
    const [pagestate, setPagestate] = useState(0);
    const [pageindex, setPageindex] = useState(1);
    const [message, setMessage] = useState("");
    const [maxlimit, setMaxlimit] = useState(5);
    const [minlimit, setMinlimit] = useState(1);
    const [loadingindex, setLoadingindex] = useState(1);

    useEffect(() => {
        let authors = [];
        let status = [];
        query.author.map((i)=>{
            authors.push(i.value)
        })

        query.status.map((i)=>{
            status.push(i.value)
        })

        let nawauthor = authors.toString();
        let newstatus = status.toString();
        let newOffset = 0;
        let newLimit = 0;
        let paginationLimit = 0;
        if(pagination.show){
            newLimit = pagination.post_per_page
            newOffset = ((pageindex * newLimit)-newLimit) + query.offset
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
                relation: query.relation,
                pagination: pagination.show,
                limit: query.limit,
                imgsize: image.size
            }
        }).then((posts) => {
            if('message' in posts){
                setMessage(__("Sorry! No Post Found.", "the-post-grid"))
            }else{
                setMessage("")
                setData(posts);
                setPagestate(Math.ceil((posts?.[0]?.total_post - query.offset)/((paginationLimit == 0)||(paginationLimit == -1)? 1:paginationLimit)))
            }

            setIsloading(false);
            $('.pagination .pagination_number.active').removeClass('active')
            $('.pagination .pagination_number.'+pageindex).addClass('active')

        });
    }, [query, pagination, pageindex, image.size]);

    useEffect(()=>{
        setIsloading(true);
    },[pageindex])

    const nextbtn = (pageval) =>{
        if(maxlimit <pageval){
            return <button className={`pagination_number next`} onClick={nextpageset}>Next</button>
        }
    }
    const prevbtn = (pageval) => {
        if(minlimit > 1){
            return <button className={`pagination_number prev`} onClick={prevpageset}>Prev</button>
        }
    }

    const nextpageset = () => {
        setMaxlimit((prev) => prev + 1)
        setMinlimit((prev) => prev + 1)
    }

    const prevpageset = () => {
        setMaxlimit((prev) => prev - 1)
        setMinlimit((prev) => prev - 1)
    }

    return (
        <div className="rt-thepostgrid-frontend">
            {
                isloading?(
                    <div className="rt-tpg-lds-dual-ring"></div>
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
                                    {prevbtn(pagestate)}
                                    {Array.from(Array(pagestate), (e, i) => {
                                        if(((i+1) >= minlimit) && (i+1) <= maxlimit){
                                            if(pagestate > 1){
                                                if(i == 0){
                                                    return <span className={`pagination_number active ${i+1}`}
                                                                 data-value={i+1}
                                                                 key={i} onClick={()=> {setPageindex(i+1)}}>{i+1}</span>
                                                }else{
                                                    return <span className={`pagination_number ${i+1}`}
                                                                 data-value={i+1}
                                                                 key={i} onClick={()=> {setPageindex(i+1)}}>{i+1}</span>
                                                }
                                            }
                                        }
                                    })}
                                    {nextbtn(pagestate)}
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
    div.classList.remove("rt-tpg-ph")
})
