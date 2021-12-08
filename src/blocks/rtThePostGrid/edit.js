import RenderView from "./renderView";
import apiFetch from "@wordpress/api-fetch";
import {
    PanelBody,
    ColorPalette,
    TextControl,
    TabPanel,
    __experimentalText as Text
} from '@wordpress/components';

import Query from './components/query/Query';
import Layout from './components/layout/Layout';
import Columns from './components/layout/Columns';
import Pagination from './components/layout/Pagination';
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
import Style_Section from './components/style/Style_Section';
import $ from 'jquery';


const {__} = wp.i18n;
const {InspectorControls} = wp.blockEditor
const {useState, useEffect} = wp.element;

export default function Edit(props) {
    const {attributes, setAttributes, } = props;
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [paginationNumber, setPaginationNumber] = useState(0);
    const [pageindex, setPageindex] = useState(1);
    const [message, setMessage] = useState("");
    const [newOffset, setNewOffset] = useState(0);
    const [maxlimit, setMaxlimit] = useState(5);
    const [minlimit, setMinlimit] = useState(1);
    const {query, general, parent_class, primary_color, heading_title, pagination} = attributes

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
            label: "Default",
            value: ""
        },
        {
            label: "Above Title",
            value: "above-title"
        },
        {
            label: "Over Image (Top Left)",
            value: "over-image top_left"
        },
        {
            label: "Over Image (Top Right)",
            value: "over-image top_right"
        },
        {
            label: "Over Image (Bottom Left)",
            value: "over-image bottom_left"
        },
        {
            label: "Over Image (Bottom Right)",
            value: "over-image bottom_right"
        },
        {
            label: "Over Image (Center)",
            value: "over-image image_center"
        },

    ]

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
        var post_per_page;
        if (pagination.show) {
            post_per_page = pagination.post_per_page
            if (query.filter) {
                setNewOffset(0)

            } else {
                if (pageindex == 1) {
                    setNewOffset(0)
                } else {
                    setNewOffset((post_per_page * pageindex) - post_per_page)
                }
            }
        } else {
            post_per_page = query.limit
            setNewOffset(query.offset)
            setPageindex(1)
        }

        apiFetch({

            path: '/rt/v1/query',
            method: 'POST',
            data: {
                post_type: query.post_type,
                post_per_page: post_per_page,
                include: query.include,
                exclude: query.exclude,
                offset: newOffset,
                order_by: query.order_by,
                order: query.order,
                author: nawauthor,
                status: newstatus,
                keyword: query.keyword,
                terms: query.tax_term,
                relation: query.relation,
                pagination: pagination.show,
                limit: query.limit
            }
        }).then((posts) => {
            if ('message' in posts) {
                setMessage(__("Sorry! No Post Found.", "the-post-grid"))
                setPaginationNumber(0)
            } else {
                setMessage("")
                setData(posts);
                setPaginationNumber(Math.ceil(posts?.[0]?.total_post / ((post_per_page == 0) || (post_per_page == -1) ? 1 : post_per_page)))
            }
            setIsloading(false);
            // setAttributes({query: {...query, 'query_loader':false}})
        });
    }, [query, pagination, newOffset, pageindex]);

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

        if (pageindex > 0) {
            setAttributes({query: {...query, "filter": false, "pageindex":pageindex}})
        }
        $('.pagination_number.active').removeClass("active")
        $('.pagination_number.'+pageindex).addClass("active")
        setIsloading(true);
    }, [pageindex])

    useEffect(()=>{
        setPageindex(query.pageindex)
    }, [query.pageindex])

    useEffect(()=>{
        setPageindex(1)
    },[])

    useEffect(()=>{
        setIsloading(true)
        setAttributes({query: {...query, 'loader':false}})
    },[query.loader])
    

    const global_attr = {attributes, setAttributes, colors, matrix_position}

    return (
        <>
            <InspectorControls>
                <PanelBody className="post_grid_blocks" title={__("The Post Grid", 'the-post-grid')}>
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

                                        {/* Columns */}

                                        <Columns attr={global_attr}/>


                                        {/* Linking */}

                                        <Linking attr={global_attr}/>
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
                                                            <TextControl
                                                                label={__("Parent Class:", "the-post-grid")}
                                                                value={parent_class}
                                                                onChange={(val) => props.setAttributes({parent_class: val})}
                                                            />

                                                            <Text>
                                                                Primary Color:
                                                                <ColorPalette
                                                                    label={__("Primary", "the-post-grid")}
                                                                    value={primary_color}
                                                                    colors={colors}
                                                                    onChange={(val) => props.setAttributes({primary_color: val})}
                                                                />
                                                            </Text>
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
            <div className="rt-postsreact-editor">
                {
                    isloading ? (
                        <div className="rt-tpg-lds-dual-ring"></div>
                    ) : (
                        <>
                            {
                                (message.length) ? (
                                    <div className={"no_notice"}>
                                        {message}
                                    </div>

                                ) : (
                                    <RenderView {...attributes} data={data}/>
                                )
                            }
                        </>

                    )
                }
                {
                    pagination.show ? (
                        <div className={"pagination"}>
                            {
                                //Here paginationNumber = 3
                                (paginationNumber > 1) ?(
                                    <>
                                        {

                                            Array(paginationNumber).fill().map((_, i) => {

                                                if (i == 0){
                                                    return <button className={`pagination_number active ${i+1}`} data-value={i + 1}
                                                                   key={i}
                                                                   onClick={() => {setPageindex(i + 1)}}>{i + 1}</button>
                                                }else{
                                                    return <button className={`pagination_number ${i+1}`} data-value={i + 1}
                                                                   key={i}
                                                                   onClick={() => {setPageindex(i + 1)}}>{i + 1}</button>
                                                }
                                            })
                                        }
                                    </>
                                ):("")
                            }
                        </div>
                    ) : ("")
                }
            </div>
        </>
    );

}