import {
    PanelBody, 
    SelectControl, 
    ToggleControl,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";
import {useState} from '@wordpress/element';


function Pagination(props) {
    const {__} = wp.i18n;
    const [haspagination, useHaspagination] = useState(true)
    const {pagination, query} = props.attr.attributes
    const pagination_type = [
        {
            label: __( "Default", "the-post-grid"),
            value: ""
        },
        {
            label: __( "Pagination", "the-post-grid"),
            value: "pagination"
        },
        {
            label: __( "Ajax Number Pagination ( Only for Grid )", "the-post-grid"),
            value: "pagination_ajax"
        },
        {
            label: __( "Load more button (by ajax loading)", "the-post-grid"),
            value: "load_more"
        },
        {
            label: __( "Load more on scroll (by ajax loading)", "the-post-grid"),
            value: "load_on_scroll"
        }
    ]
    return (
        <PanelBody title={__( "Pagination", "the-post-grid")} initialOpen={false}>

            <ToggleControl
                label={__( "Show Pagination:", "the-post-grid")}
                checked={ pagination.show }
                onChange={ (val) => {
                    useHaspagination( ( state ) => ! state );
                    props.attr.setAttributes({pagination: {...pagination, "show": val}})
                } }
            />
            {
                pagination.show?(
                    <>
                        <NumberControl
                            label={__( "Display per page:", "the-post-grid")}
                            labelPosition="side"
                            min={1}
                            max={5000}
                            step={1}
                            value={pagination.post_per_page}
                            onChange={val =>{props.attr.setAttributes({
                                pagination: {
                                    ...pagination,
                                    "post_per_page": val
                                },
                                query:{
                                    ...query,
                                    'filter': true
                                }
                            })}}
                        />

                        <SelectControl
                            label={__( "Pagination Type:", "the-post-grid")}
                            options={pagination_type}
                            value ={pagination.pagination_type}
                            onChange={(val)=>props.attr.setAttributes( {
                                pagination: {
                                    ...pagination,
                                    "pagination_type": val
                                }
                            })}
                        />
                    </>
                ):("")
            }
        </PanelBody>
    );
}

export default Pagination;