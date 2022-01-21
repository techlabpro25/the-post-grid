import RenderView from "./renderView";
import apiFetch from "@wordpress/api-fetch";
import {
    PanelBody,
    ColorPalette,
    TextControl,
    TabPanel,
    SelectControl,
    __experimentalText as Text
} from '@wordpress/components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUndoAlt} from "@fortawesome/free-solid-svg-icons";
import Query from './components/query/Query';
import Layout from './components/layout/Layout';
import Columns from './components/layout/Columns';
import Linking from './components/layout/Linking';

import General from './components/settings/General';
import Heading from './components/settings/Heading';
import Title from './components/settings/Title';
import Excerpt from './components/settings/Excerpt';
import Category from './components/settings/Category';
import Meta from './components/settings/Meta';
import Read_More from './components/settings/Read_More';
import Image from './components/settings/Image';
import Style_Heading from './components/style/Style_Heading';
import Style_Title from './components/style/Style_Title';
import Style_Excerpt from './components/style/Style_Excerpt';
import Style_Category from './components/style/Style_Category';
import Style_Meta from './components/style/Style_Meta';
import Style_Read_More from './components/style/Style_Read_More';
import Style_Content_wrap from './components/style/Style_Content_wrap';
import $ from 'jquery';
import {PredefaultAttr} from "./components/PredefaultAttr";
import Pagination from "./components/style/Pagination";
import {PaginationStyle, Pageprivnext, Load_more_spinner} from "./Style_component";
import Filter from "./components/layout/Filter";
import Others from "./components/layout/Others";
import Overlay from "./components/style/Style_Overlay";
import Header_Title from "./Header_Title";

const {__} = wp.i18n;
const {InspectorControls} = wp.blockEditor
const {useState, useEffect, useRef} = wp.element;

export default function Edit(props) {
    const {attributes, setAttributes } = props;
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [isrootloading, setIsrootloading] = useState(true);
    const [paginationNumber, setPaginationNumber] = useState(0);
    const [pageindex, setPageindex] = useState(1);
    const [scrolltop, setscrolltop] = useState(false);
    const [message, setMessage] = useState("");
    const [changestate, setChangestate] = useState(true);
    const [maxlimit, setMaxlimit] = useState(5);
    const [minlimit, setMinlimit] = useState(1);

    // Filter State Start
    const [terms, setTerms] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [filter_taxonomy, setFilter_taxonomy] = useState("");
    const [filter_author, setFilter_author] = useState("");
    const [filter_order_by, setFilter_order_by] = useState("");
    const [filter_order, setFilter_order] = useState("");
    const [filter_search, setFilter_search] = useState("");
    const [filter_active, setFilter_active] = useState(false);
    // Filter State end

    // 2nd Pagination loader
    const [page_loader_second, setPage_loader_second] = useState(false);
    const [load_more_ppp, setLoad_more_ppp] = useState(1);


    const {
        query,
        columns,
        general,
        pagination_spinner_margin,
        pagination_spinner_color,
        filters,
        className,
        primary_color,
        heading_title,
        pagination,
        pagination_padding,
        pagination_margin,
        excerpt,
        image,
        loaders,
        layout,
        pagination_style
    } = attributes

    const colors = [
        {name: 'red', color: '#f00'},
        {name: 'white', color: '#fff'},
        {name: 'blue', color: '#00f'},
        {name: 'black', color: '#000'},
        {name: 'green', color: '#00cc00'},
        {name: 'pink', color: '#cc0066'},
        {name: 'gray', color: '#F1F1F1'},
        {name: 'yellow', color: '#FFE225'},
        {name: 'cyan', color: '#4FFFFB'},
        {name: 'perple', color: '#C111FF'},
    ];

    const matrix_position = [
        {
            label: __("Default", 'the-post-grid'),
            value: ""
        },
        {
            label: __("Above Title", 'the-post-grid'),
            value: "above-title"
        },
        {
            label: __("Over Image (Top Left)", 'the-post-grid'),
            value: "over-image top_left"
        },
        {
            label: __("Over Image (Top Right)", 'the-post-grid'),
            value: "over-image top_right"
        },
        {
            label: __("Over Image (Bottom Left)", 'the-post-grid'),
            value: "over-image bottom_left"
        },
        {
            label: __("Over Image (Bottom Right)", 'the-post-grid'),
            value: "over-image bottom_right"
        },
        {
            label: __("Over Image (Center)", 'the-post-grid'),
            value: "over-image image_center"
        },

    ];

    const units = [
        { value: 'px', label: __('px', 'the-post-grid'), default: 0 },
        { value: '%', label: __('%', 'the-post-grid'), default: 10 },
        { value: 'em', label: __('em', 'the-post-grid'), default: 0 },
    ];
    const border_style = [
        {value: 'dotted', label: __('Dotted', 'the-post-grid')},
        {value: 'dashed', label: __('Dashed', 'the-post-grid')},
        {value: 'solid', label: __('Solid', 'the-post-grid')},
        {value: 'double', label: __('Double', 'the-post-grid')},
        {value: 'groove', label: __('Groove', 'the-post-grid')},
        {value: 'ridge', label: __('Ridge', 'the-post-grid')},
        {value: 'inset', label: __('Inset', 'the-post-grid')},
        {value: 'outset', label: __('Outset', 'the-post-grid')},
    ]
    const order_by_type = [
        {
            label: __( "-- Select --", "the-post-grid"),
            value: "",
        },
        {
            label: __( "Title", "the-post-grid"),
            value: "title",
        },
        {
            label: __( "ID", "the-post-grid"),
            value: "ID",
        },

        {
            label: __( "Date", "the-post-grid"),
            value: "date",
        },
        {
            label: __( "Menu Order", "the-post-grid"),
            value: "menu_order",
        },
    ];

    const transform = [
        {
            label: __("None", 'the-post-grid'),
            value: ""
        },
        {
            label: __("Capitalize", 'the-post-grid'),
            value: "capitalize"
        },
        {
            label: __("Uppercase", 'the-post-grid'),
            value: "uppercase"
        },
        {
            label: __("Lowercase", 'the-post-grid'),
            value: "lowercase"
        },
        {
            label: __("Initial", 'the-post-grid'),
            value: "initial"
        },
        {
            label: __("Inherit", 'the-post-grid'),
            value: "inherit"
        },
    ]
    const listingWrapRef = useRef();

    const call_all_post = (query, pagination, image, excerpt) =>{
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
        var post_per_page = 0;
        var testoffset = 0;
        if (pagination.show) {
            post_per_page = load_more_ppp * pagination.post_per_page  // For load more pagination index will be always 1 and ppp will increase
            if(pagination.pagination_type === "load_more"){
                testoffset = ((post_per_page * 1) - post_per_page) + query.offset
            }else{
                testoffset = ((post_per_page * pageindex) - post_per_page) + query.offset
            }

        } else {
            post_per_page = query.limit
            testoffset = query.offset
        }
        setAttributes({loaders: {...loaders, "disable":true}})
        apiFetch({
            path: '/rt/v1/query',
            method: 'POST',
            data: {
                post_type: query.post_type,
                post_per_page: post_per_page,
                include: query.include,
                exclude: query.exclude,
                offset: testoffset,
                order_by: query.order_by,
                order: query.order,
                author: nawauthor,
                status: newstatus,
                keyword: query.keyword,
                terms: query.tax_term,
                relation: query.relation,
                pagination: pagination.show,
                limit: query.limit,
                excerpt_type: excerpt.type,
                imgsize: image.size,
                date_from: query.date_from,
                date_to: query.date_to,
                sticky: query.show_sticky,
                filter_taxonomy_taxonomy: filters.taxonomy_filter,
                filter_taxonomy: filter_taxonomy,
                filter_author:filter_author,
                filter_order_by: filter_order_by,
                filter_order: filter_order,
                filter_search:filter_search,
                filter_active:filter_active
            }
        }).then((posts) => {
            if ('message' in posts) {
                setMessage(__("Sorry! No Post Found.", "the-post-grid"))
                setPaginationNumber(0)
            } else {
                setMessage("")
                // if(pagination.pagination_type === "load_more"){
                //     setData(prev =>{
                //         if(JSON.stringify(prev) !== JSON.stringify(posts) ){
                //             prev + posts
                //         }else{
                //             return prev
                //         }
                //     });
                // }

                setData(posts);

                setPaginationNumber(Math.ceil((posts?.[0]?.total_post - query.offset) / ((post_per_page == 0) || (post_per_page == -1) ? 1 : post_per_page)))
            }

            setAttributes({loaders: {...loaders, "image":false, 'disable': false}})
            $('.layout_parent').css('opacity', 1.0);
            setIsloading(false);
            setIsrootloading(false);
            setFilter_active(false)
            setPage_loader_second(false)
        });
    }

    useEffect(() => {
        call_all_post(query, pagination, image, excerpt)
    }, [ query, pageindex, pagination, image.size, filter_taxonomy, filter_author, filter_order_by, filter_order, filter_search]);

    const executeScroll = () => listingWrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    useEffect(() => {
        var url_string = window.location.href
        var url = new URL(url_string);
        var id = url.searchParams.get("post");

        apiFetch({path: '/rt/v1/post_title?id=' + id}).then((data) => {
            const pluginPath = data.path + "/the-post-grid/images/";
            if(heading_title.length == 0){
                setAttributes({heading_title: data.title})
            }
            setAttributes({plugin_path: pluginPath})
        });
    }, [])

    useEffect(() => {
        $('.layout_parent').css('opacity', 0.2);
        if(pagination.pagination_type !== "load_more"){
            executeScroll();                            // Preventing scroll to top only for load more pagination
        }
        setIsloading(true);
    }, [pageindex, filters.hide_show_all_button, filters.selected_filtered_item])

    //Set pageindex 0 when query change
    useEffect(()=>{
        $('.layout_parent').css('opacity', 0.2);
        setIsloading(true);
        setTimeout(() => {
            setPageindex(1)
            setMaxlimit(5)
            setMinlimit(1)
        }, 5);
    },[ query, pagination])

    // Only for image as image already has loader
    useEffect(()=>{
        setTimeout(() => {
            setPageindex(1)
            setMaxlimit(5)
            setMinlimit(1)
        }, 5);
    },[image.size])

    useEffect(()=>{
        if((columns.desktop == "") || (general.presdefault)){
            PredefaultAttr(props)
            setAttributes({
                general:{
                    ...general,
                    'presdefault': false
                }
            })
        }
    },[layout.value])

    //
    //
    // useEffect(()=>{
    //     window.addEventListener('scroll', function (){
    //         console.log('apple')
    //     });
    // }, [])

    const nextbtn = (pageval) =>{
        if(maxlimit <pageval){
            return <Pageprivnext css={pagination_style} css_pad={pagination_padding} css_mar={pagination_margin} className={`pagination_number next`} onClick={nextpageset}>Next</Pageprivnext>
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

    const global_attr = {attributes, setAttributes, colors, matrix_position, units, transform, border_style}


    // For Filter Start

    // Filter Get Terms
    useEffect(()=>{
        var total_count = 0;
        if(filters.taxonomy_filter !== ""){
            apiFetch({ path: "/rt/v1/categories?tax_type="+filters.taxonomy_filter }).then((terms) => {
                const tempterms = terms.map((item_key, i) => {
                    if(filters.show_post_count){
                        total_count += parseInt(item_key.count)
                        return {
                            label: item_key.name+" ("+item_key.count+")",
                            value: item_key.id,
                        };
                    }else{
                        return {
                            label: item_key.name,
                            value: item_key.id,
                        };
                    }
                })
                if(filters.hide_show_all_button === false){
                    if(filters.show_post_count){
                        tempterms.unshift({label: __("Show All ("+total_count+")", "the-post-grid"), value: ""})
                    }else {
                        tempterms.unshift({label: __("Show All", "the-post-grid"), value: ""})
                    }
                }

                if(tempterms.length === 0){
                    setTerms([{label: __("No Terms Available", "the-post-grid"), value: ""}])
                }else{
                    if(filters.selected_filtered_item === ""){
                        setFilter_taxonomy(tempterms[0].value)
                    }else{
                        setFilter_taxonomy(filters.selected_filtered_item)
                    }
                    setTerms(tempterms);
                }
            });
        }else{
            setTerms([{label: __("-- Select --", "the-post-grid"), value: ""}])
        }

    }, [filters.taxonomy_filter, filters.hide_show_all_button, filters.selected_filtered_item, filters.show_post_count])

    // Filter Get Author
    useEffect(() => {
        apiFetch({ path: "/wp/v2/users" }).then((user) => {
            const tempauthor = user.map((item_key) => {
                return {
                    label: item_key.name,
                    value: item_key.id,
                };
            })
            if(filters.hide_show_all_button === false){
                setFilter_author("")
                tempauthor.unshift({label: __("Any", "the-post-grid"), value: ""})
            }else{
                setFilter_author(tempauthor[0].value)  // When Show all button disabled set the first item for filter
            }
            setAuthors(tempauthor)
        });
    }, [filters.hide_show_all_button]);


    const resetfilter = () =>{
        setFilter_taxonomy(filters.selected_filtered_item);
        setFilter_author("");
        setFilter_order_by("");
        setFilter_order("");
        setFilter_search("");
        setLoad_more_ppp(1); // For load more pagination when reset filter make ppp initial number
        setPageindex(1);
    }


    return (
        <>
            <InspectorControls>
                <PanelBody className="the_post_grid_blocks" title={__("The Post Grid", 'the-post-grid')}>
                    <TabPanel
                        className="custom-tab-panel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: 'query',
                                title: 'Query',
                                className: 'tab-query panel_tab parent_tab',
                            },
                            {
                                name: 'layout',
                                title: 'Layout',
                                className: 'tab-latout panel_tab parent_tab',
                            },
                            {
                                name: 'advanced',
                                title: 'Advanced',
                                className: 'tab-advanced panel_tab parent_tab',
                            }

                        ]}
                    >
                        {(tab) => {
                            if (tab?.name == "query") {
                                return (
                                    <>
                                        {/* Query  */}
                                        <Query attr={global_attr}/>
                                    </>
                                )
                            } else if (tab?.name == "layout") {
                                return (
                                    <>
                                        {/* Layout Type */}

                                        <Layout attr={global_attr}/>

                                        {/*Filters*/}

                                        <Filter attr={global_attr}/>

                                        {/* Columns */}

                                        <Columns attr={global_attr}/>


                                        {/* Linking */}

                                        <Linking attr={global_attr}/>

                                        {/*Others*/}

                                        <Others attr={global_attr}/>
                                    </>
                                )
                            } else if (tab?.name == "advanced") {
                                return (
                                    <>
                                        <TabPanel
                                            className="custom-tab-panel"
                                            activeClass="active-tab"
                                            tabs={[
                                                {
                                                    name: 'fields',
                                                    title: __('Fields', "the-post-grid"),
                                                    className: 'tab-fields panel_tab child_tab',
                                                },
                                                {
                                                    name: 'settings',
                                                    title: __('Settings', "the-post-grid"),
                                                    className: 'tab-settings panel_tab child_tab',
                                                },
                                                {
                                                    name: 'style',
                                                    title: __('Style', "the-post-grid"),
                                                    className: 'tab-style panel_tab child_tab',
                                                },


                                            ]}
                                        >
                                            {(tab) => {
                                                if (tab?.name == "fields") {
                                                    return (
                                                        <>
                                                            {/* General */}
                                                            <General attr={global_attr}/>
                                                        </>
                                                    )
                                                } else if (tab?.name == "settings") {
                                                    return (
                                                        <>
                                                            {/* Heading  */}

                                                            {
                                                                general.heading ?
                                                                    (
                                                                        <Heading attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Title  */}

                                                            {
                                                                general.title ?
                                                                    (
                                                                        <Title attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Excerpt */}

                                                            {
                                                                general.excerpt ?
                                                                    (
                                                                        <Excerpt attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Category */}

                                                            {
                                                                general.category ?
                                                                    (
                                                                        <Category attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Meta */}

                                                            <Meta attr={global_attr}/>

                                                            {/* Button */}

                                                            {
                                                                general.see_more ?
                                                                    (
                                                                        <Read_More attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Image */}
                                                            <Image attr={global_attr}/>
                                                        </>
                                                    )
                                                } else if (tab?.name == "style") {
                                                    return (
                                                        <>
                                                            <Text>
                                                                Primary Color:
                                                            </Text>
                                                            <ColorPalette
                                                                className={'rt-colorcontrol'}
                                                                label={__("Primary", "the-post-grid")}
                                                                value={primary_color}
                                                                colors={colors}
                                                                onChange={(val) => props.setAttributes({primary_color: val})}
                                                            />

                                                            <br/>
                                                            {
                                                                general.heading ?
                                                                    (
                                                                        <Style_Heading attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Title  */}

                                                            {
                                                                general.title ?
                                                                    (
                                                                        <Style_Title attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Excerpt */}

                                                            {
                                                                general.excerpt ?
                                                                    (
                                                                        <Style_Excerpt attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Section */}
                                                            {/* <Style_Section attr={global_attr}/> */}

                                                            {/* Content Wrap */}

                                                            <Style_Content_wrap attr={global_attr}/>

                                                            {/* Category */}

                                                            {
                                                                general.category ?
                                                                    (
                                                                        <Style_Category attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/* Meta */}

                                                            <Style_Meta attr={global_attr}/>

                                                            {/* Button */}

                                                            {
                                                                general.see_more ?
                                                                    (
                                                                        <Style_Read_More attr={global_attr}/>
                                                                    ) : ("")

                                                            }

                                                            {/*Pagination*/}
                                                            <Pagination attr={global_attr}/>

                                                            {/*Overlay*/}

                                                            <Overlay attr={global_attr}/>
                                                        </>
                                                    )
                                                }
                                            }
                                            }
                                        </TabPanel>
                                    </>
                                )
                            }
                        }}
                    </TabPanel>
                </PanelBody>

            </InspectorControls>
            <div className="rt-postsreact-editor rt-tpg-root" ref={listingWrapRef}>
                {
                    (isrootloading)?(
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    ):(
                        <>
                            <>
                                {
                                    isloading ? (
                                        <div className="loader-wrapper2">
                                            <div className="lds-ripple2">
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    ):("")
                                }
                                {/*Layout Render Parts start*/}
                                <>
                                    <div className={`${(className != undefined)? className: ""} rt-container-fluid rt-tpg-container`}>
                                        <Header_Title {...attributes}/>
                                        {/*Filters*/}
                                        <div className="rt-tpg-layout-filter-panel">
                                            {
                                                // Taxonomy Filter Start
                                                filters.taxonomy_bool?(
                                                    <>
                                                        <div className="rt-tpg-layout-taxonomy-filter">
                                                            {
                                                                (filters.taxonomy_filter_type === "dropdown")?(
                                                                    <div className="rt-tpg-layout-filter-input">
                                                                        {/*Dropdown Type*/}
                                                                        <SelectControl
                                                                            options={terms}
                                                                            value ={filter_taxonomy}
                                                                            disabled={loaders.disable}
                                                                            onChange={(val)=>{
                                                                                setFilter_taxonomy(val)
                                                                                setFilter_active(true)
                                                                                setPageindex(1)
                                                                                setLoad_more_ppp(1) // For load more pagination when reset filter make ppp initial number
                                                                            }}
                                                                        />
                                                                    </div>
                                                                ):(
                                                                    <>
                                                                        {/*Button Type*/}
                                                                        <div className="rt-tpg-layout-taxonomy-filter-button">
                                                                            {
                                                                                terms.map((el) =>{
                                                                                    const filter_active = el.value == filter_taxonomy? "active": "";
                                                                                    return(
                                                                                        <button
                                                                                            className={`rt-tpg-filter-button ${filter_active}`}
                                                                                            value={el.value}
                                                                                            onClick={()=>{
                                                                                                setFilter_taxonomy(el.value)
                                                                                                setFilter_active(true)
                                                                                                setPageindex(1)
                                                                                                setLoad_more_ppp(1) // For load more pagination when reset filter make ppp initial number
                                                                                            }}
                                                                                        >
                                                                                            {el.label}
                                                                                        </button>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                    </>
                                                ):("")
                                                // Taxonomy Filter end
                                            }

                                            {
                                                // Author Filter Start
                                                filters.author_bool?(
                                                    <>
                                                        <div className="rt-tpg-layout-author-filter rt-tpg-layout-filter-input">
                                                            <SelectControl
                                                                options={authors}
                                                                value ={filter_author}
                                                                disabled={loaders.disable}
                                                                onChange={(val)=>{
                                                                    setFilter_author(val)
                                                                    setFilter_active(true)
                                                                    setPageindex(1)
                                                                    setLoad_more_ppp(1) // For load more pagination when reset filter make ppp initial number
                                                                }}
                                                            />
                                                        </div>
                                                    </>
                                                ):("")
                                                // Author Filter End
                                            }

                                            {
                                                // Order Sort By
                                                filters.order_sort_by_bool?(
                                                    <>
                                                        <div className="rt-tpg-layout-order-by-filter rt-tpg-layout-filter-input">
                                                            <SelectControl
                                                                options={order_by_type}
                                                                value ={filter_order_by}
                                                                disabled={loaders.disable}
                                                                onChange={(val)=>{
                                                                    setFilter_order_by(val)
                                                                    setFilter_active(true)
                                                                    setPageindex(1)
                                                                    setLoad_more_ppp(1) // For load more pagination when reset filter make ppp initial number
                                                                }}
                                                            />
                                                        </div>
                                                    </>
                                                ):("")
                                            }

                                            {
                                                // Order Sort
                                                filters.order_sort_bool?(
                                                    <>
                                                        <div className="rt-tpg-layout-order-filter rt-tpg-layout-filter-input">
                                                            <SelectControl
                                                                options={[
                                                                    { label: "-- Select --", value: "" },
                                                                    { label: "Ascending", value: "ASC" },
                                                                    { label: "Descending", value: "DESC" },
                                                                ]}
                                                                value ={filter_order}
                                                                disabled={loaders.disable}
                                                                onChange={(val)=>{
                                                                    setFilter_order(val)
                                                                    setFilter_active(true)
                                                                    setPageindex(1)
                                                                    setLoad_more_ppp(1) // For load more pagination when reset filter make ppp initial number
                                                                }}
                                                            />
                                                        </div>
                                                    </>
                                                ):("")
                                            }

                                            {
                                                // Search
                                                filters.search_bool?(
                                                    <>
                                                        <div className="rt-tpg-layout-search-filter rt-tpg-layout-filter-input">
                                                            <TextControl
                                                                value={filter_search}
                                                                disabled={loaders.disable}
                                                                onChange={(val)=>{
                                                                    setFilter_search(val)
                                                                    setFilter_active(true)
                                                                    setPageindex(1)
                                                                    setLoad_more_ppp(1) // For load more pagination when reset filter make ppp initial number
                                                                }}
                                                            />
                                                        </div>
                                                    </>
                                                ):("")
                                            }

                                            {/*Reset Button*/}
                                            {
                                                (filters.taxonomy_bool || filters.author_bool || filters.order_sort_by_bool || filters.order_sort_bool || filters.search_bool)?(
                                                    <>
                                                        <button className="rt-tpg-filter-reset-button" onClick={resetfilter}><FontAwesomeIcon icon={faUndoAlt}/></button>
                                                    </>
                                                ):("")
                                            }
                                        </div>
                                        {/*Filters end*/}
                                        {
                                            (message.length) ? (
                                                <div className={"no_notice"}>
                                                    {query.not_found_text}
                                                </div>

                                            ) : (
                                                <RenderView {...attributes} setattr = {setAttributes} data={data}/>
                                            )
                                        }

                                    </div>

                                </>
                                {/*Layout Render Parts end*/}
                            </>

                            {
                                pagination.show ? (
                                    <div className={"pagination"}>
                                        {
                                            // If pagination type pagination ajax
                                            (pagination.pagination_type === "pagination_ajax")?(
                                                <>
                                                    {
                                                        (paginationNumber > 1) ?(
                                                            <>
                                                                {prevbtn(paginationNumber)}
                                                                {
                                                                    Array(paginationNumber).fill().map((_, i) => {

                                                                        if(((i+1) >= minlimit) && (i+1) <= maxlimit){
                                                                            const activeClass = pageindex === i +1 ? ' active': '';
                                                                            return <PaginationStyle
                                                                                css={pagination_style}
                                                                                css_pad={pagination_padding}
                                                                                css_mar={pagination_margin}
                                                                                className={`pagination_number ${i+1}${activeClass}`}
                                                                                data-value={i + 1}
                                                                                key={i}
                                                                                onClick={() => {
                                                                                    setPageindex(i + 1)
                                                                                    setscrolltop(true)
                                                                                }}>{i + 1}</PaginationStyle>
                                                                        }
                                                                    })
                                                                }

                                                                {nextbtn(paginationNumber)}

                                                            </>
                                                        ):("")
                                                    }
                                                </>
                                            ):(

                                                <>
                                                    {
                                                        // If pagination type load more button
                                                        ((pagination.pagination_type === "load_more") && (paginationNumber > pageindex))?(
                                                            <>
                                                                <div className="rt-tpg-pagination-load-more">
                                                                    <PaginationStyle
                                                                        css={pagination_style}
                                                                        css_pad={pagination_padding}
                                                                        css_mar={pagination_margin}
                                                                        className="rt-tpg-pagination-button"
                                                                        onClick={()=>{
                                                                            setPage_loader_second(true)
                                                                            setPageindex((prev) => prev + 1)
                                                                            setLoad_more_ppp(prev=> prev+ 1)
                                                                        }}
                                                                    >
                                                                        {__("Load More", "the-post-grid")}
                                                                        {
                                                                            (page_loader_second)? (
                                                                                <>
                                                                                    <Load_more_spinner
                                                                                        className="rt-tpg-load-more-lds-dual-ring"
                                                                                        css={pagination_spinner_color}
                                                                                        css_mar={pagination_spinner_margin}
                                                                                    ></Load_more_spinner>
                                                                                </>
                                                                            ):("")
                                                                        }
                                                                    </PaginationStyle>
                                                                </div>
                                                            </>
                                                        ):("")
                                                    }

                                                    {/*{*/}
                                                    {/*    // If pagination type load more button*/}
                                                    {/*        (pagination.pagination_type === "load_on_scroll")?(*/}
                                                    {/*            <>*/}
                                                    {/*                {load_more_by_scroll(paginationNumber)}*/}
                                                    {/*            </>*/}
                                                    {/*    ):("")*/}
                                                    {/*}*/}
                                                </>
                                            )
                                        }
                                    </div>
                                ) : ("")
                            }
                        </>
                    )
                }
            </div>
        </>
    );

}