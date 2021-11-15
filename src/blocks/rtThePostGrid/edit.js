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

const {__} = wp.i18n;
const {InspectorControls} = wp.blockEditor
const {useState, useEffect} = wp.element;

export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const [data, setData] = useState([]);
    const { general, parent_class, primary_color } = attributes

    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
        { name: 'black', color: '#000' },
        { name: 'green', color: '#00cc00' },
        { name: 'pink', color: '#cc0066' },
        { name: 'gray', color: '#F1F1F1' },
        { name: 'yellow', color: '#FFE225' },
        { name: 'cyan', color: '#4FFFFB' },
        { name: 'perple', color: '#C111FF' },
    ];

	const matrix_position = [
		{
			label: "Default",
			value: ""
		},
		{
			label: "Above Title" ,
			value:"above-title"
		},
		{
			label: "Over Image (Top Left)" ,
			value:"over-image top_left"
		},
		{
			label: "Over Image (Top Right)" ,
			value:"over-image top_right"
		},
		{
			label: "Over Image (Bottom Left)" ,
			value:"over-image bottom_left"
		},
		{
			label: "Over Image (Bottom Right)" ,
			value:"over-image bottom_right"
		},
		{
			label: "Over Image (Center)" ,
			value:"over-image center"
		},
		
	]

    useEffect(() => {
        if (!attributes.limit) {
            return;
        }
        apiFetch({path: '/rt/v1/query?post_type=post&post_per_page&include=628,629,630&exclude=625,626&order_by=ID&order=ASC&status=publish&author=1'}).then((posts) => {
            setData(posts);
        });
    }, []);

    const global_attr = {attributes, setAttributes, colors, matrix_position}
    return (
        <>
            <InspectorControls>
                <PanelBody className="post_grid_blocks" title={__("The Post Grid", 'radius-blocks')}>
                    <TabPanel
                        className="custom-tab-panel"
                        activeClass="active-tab"
                        tabs={ [
                            {
                                name: 'query',
                                title: 'Query',
                                className: 'tab-query panel_tab',
                            },
                            {
                                name: 'layout',
                                title: 'Layout',
                                className: 'tab-latout panel_tab',
                            },
                            {
                                name: 'advanced',
                                title: 'Advanced',
                                className: 'tab-advanced panel_tab',
                            }
                            
                        ] }
                    >
                        { ( tab ) => {
                            if(tab?.name == "query"){
                                return(
                                    <>
                                        {/* Query  */}
                                        <Query attr={global_attr} />
                                    </>
                                )
                            }else if(tab?.name == "layout"){
                                return(
                                    <>
                                        {/* Layout Type */}

                                        <Layout attr={global_attr}/>

                                        {/* Columns */}

                                        <Columns attr={global_attr}/>

                                        {/* Pagination */}

                                        <Pagination attr={global_attr}/>

                                        {/* Linking */}

                                        <Linking attr={global_attr}/>
                                    </>
                                )
                            }else if(tab?.name == "advanced"){
                                return(
                                    <>
                                        <TabPanel
											className="custom-tab-panel"
											activeClass="active-tab"
											tabs={ [
												{
													name: 'fields',
													title: 'Fields',
													className: 'tab-fields panel_tab',
												},
												{
													name: 'settings',
													title: 'Settings',
													className: 'tab-settings panel_tab',
												},
												{
													name: 'style',
													title: 'Style',
													className: 'tab-style panel_tab',
												},
												
												
											] }
										>
											{ ( tab ) => {
												if(tab?.name == "fields"){
													return(
														<>
															{/* General */}
															<General attr={global_attr}/>
														</>
													)	
												}else if(tab?.name == "settings"){
													return(
														<>
															{/* Heading  */}

															{
																general.heading?
																	(
																		<Heading attr={global_attr}/>
																	):("")
																
															} 

															{/* Title  */}

															{
																general.title?
																	(
																		<Title attr={global_attr}/>
																	):("")
																
															} 

															{/* Excerpt */}

															{
																general.excerpt?
																	(
																		<Excerpt attr={global_attr}/>
																	):("")
																
															} 

															{/* Category */}

															{
																general.category?
																	(
																		<Category attr={global_attr}/>
																	):("")
																
															} 

															{/* Meta */}

															<Meta attr={global_attr}/>

															{/* Button */}

															{
																general.see_more?
																	(
																		<Read_More attr={global_attr}/>
																	):("")
																
															} 
															
															{/* Image */}
															<Image attr={global_attr}/>
														</>
													)
												}else if(tab?.name == "style"){
													return(
														<>
															<TextControl
																label="Parent Class:"
																value={parent_class}
																onChange={(val) =>props.attr.setAttributes({parent_class: val})}	
															/>
															
															<Text>
																Primary Color:
																<ColorPalette
																	label="Primary"
																	value={primary_color}
																	colors={colors}
																	onChange={(val) =>props.attr.setAttributes({primary_color: val})}
																/>
															</Text>
															<br/>
															{
																general.heading?
																	(
																		<Style_Heading attr={global_attr}/>
																	):("")
																
															} 

															{/* Title  */}

															{
																general.title?
																	(
																		<Style_Title attr={global_attr}/>
																	):("")
																
															} 

															{/* Excerpt */}

															{
																general.excerpt?
																	(
																		<Style_Excerpt attr={global_attr}/>
																	):("")
																
															} 

															{/* Section */}
															<Style_Section attr={global_attr}/>

															{/* Content Wrap */}

															<Style_Content_wrap attr={global_attr}/>

															{/* Category */}

															{
																general.category?
																	(
																		<Style_Category attr={global_attr}/>
																	):("")
																
															} 

															{/* Meta */}

															<Style_Meta attr={global_attr}/> 

															{/* Button */}

															{
																general.see_more?
																	(
																		<Style_Read_More attr={global_attr}/>
																	):("")
																
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
                        } }
                    </TabPanel>
                </PanelBody>
                
            </InspectorControls>
            <div className="rt-postsreact-editor">
                <RenderView {...attributes} data={data}/>
            </div>
        </>
    );
}