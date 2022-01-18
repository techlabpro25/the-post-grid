import RenderView from "./renderView";
import {PaginationStyle, Pageprivnext} from "./Style_component";
const {render, useState, useEffect, useRef} = wp.element;
import apiFetch from '@wordpress/api-fetch';
import $ from "jquery";
const {__} = wp.i18n;
const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [isrootloading, setIsrootloading] = useState(true);
    const {query, pagination, image, pagination_style, pagination_padding, pagination_margin, excerpt} = props
    const [pagestate, setPagestate] = useState(0);
    const [pageindex, setPageindex] = useState(1);
    const [scrolltop, setscrolltop] = useState(false);
    const [message, setMessage] = useState("");
    const [maxlimit, setMaxlimit] = useState(5);
    const [minlimit, setMinlimit] = useState(1);
    const [loadingindex, setLoadingindex] = useState(1);

    const listingWrapRef = useRef();
    const executeScroll = () => listingWrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

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
        if(pagination.show){
            newLimit = pagination.post_per_page
            newOffset = ((pageindex * newLimit)-newLimit) + query.offset
        }else{
            newLimit = query.limit
            newOffset = query.offset
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
                excerpt_type: excerpt.type,
                imgsize: image.size,
                date_from: query.date_from,
                date_to: query.date_to,
            }
        }).then((posts) => {
            if('message' in posts){
                setMessage(__("Sorry! No Post Found.", "the-post-grid"))
            }else{
                setMessage("")
                setData(posts);
                setPagestate(Math.ceil((posts?.[0]?.total_post - query.offset)/((newLimit == 0)||(newLimit == -1)? 1:newLimit)))
            }

            $('.layout_parent').css('opacity', 1.0);
            setIsloading(false);
            setIsrootloading(false)
        });
    }, [loadingindex]);


    useEffect(()=>{
        $('.layout_parent').css('opacity', 0.2);
        if(scrolltop){
            executeScroll();
        }
        // setTimeout(function(){
        //     setLoadingindex((prev)=> prev + 1)
        // }, 500)
        setLoadingindex((prev)=> prev + 1)

        setIsloading(true);
    },[pageindex])



    const nextbtn = (pageval) =>{
        if(maxlimit <pageval){
            return <Pageprivnext css={pagination_style} css_pad={pagination_padding} css_mar={pagination_margin}  className={`pagination_number next`} onClick={nextpageset}>Next</Pageprivnext>
        }
    }
    const prevbtn = (pageval) => {
        if(minlimit > 1){
            return <Pageprivnext css={pagination_style} css_pad={pagination_padding} css_mar={pagination_margin} className={`pagination_number prev`} onClick={prevpageset}>Prev</Pageprivnext>
        }
    }

    const nextpageset = () => {
        setMaxlimit((prev) => prev + 1)
        setMinlimit((prev) => prev + 1)
        setPageindex((prev) => prev + 1)
    }

    const prevpageset = () => {
        setMaxlimit((prev) => prev - 1)
        setMinlimit((prev) => prev - 1)
        setPageindex((prev) => prev - 1)
    }


    return (
        <div className="rt-thepostgrid-frontend rt-tpg-root" ref={listingWrapRef}>
            {
                (isrootloading)?(

                    <div className={"root-loader-wrapper"}>
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ):(
                    <>
                        {
                            (message.length )?(
                                <>
                                    {message}
                                </>

                            ):(
                                <>
                                    {
                                        isloading?(
                                            <div className="loader-wrapper">
                                                <div className="lds-ripple2">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        ):("")
                                    }
                                    <RenderView {...props} data={data}/>
                                </>

                            )
                        }

                        {
                            pagination.show?(
                                <div className={"pagination"}>
                                    {prevbtn(pagestate)}
                                    {Array.from(Array(pagestate), (e, i) => {
                                        if(((i+1) >= minlimit) && (i+1) <= maxlimit){
                                            if(pagestate > 1){
                                                const activeClass = pageindex === i +1 ? 'active': '';
                                                return <PaginationStyle
                                                    css={pagination_style}
                                                    css_pad={pagination_padding}
                                                    css_mar={pagination_margin}
                                                    className={`pagination_number ${i+1} ${activeClass}`}
                                                    data-value={i+1}
                                                    key={i} onClick={()=> {
                                                        setPageindex(i+1)
                                                        setscrolltop(true)
                                                    }}>{i+1}
                                                </PaginationStyle>
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