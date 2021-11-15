import {
    PanelBody, 
    SelectControl, 
    ToggleControl,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";
import {useState} from '@wordpress/element';


function Pagination(props) {
    const [haspagination, useHaspagination] = useState(true)
    const {pagination} = props.attr.attributes
    const pagination_type = [
        {
            label: "Default",
            value: ""
        },
        {
            label: "Pagination",
            value: "pagination"
        },
        {
            label: "Ajax Number Pagination ( Only for Grid )",
            value: "pagination_ajax"
        },
        {
            label: "Load more button (by ajax loading)",
            value: "load_more"
        },
        {
            label: "Load more on scroll (by ajax loading)",
            value: "load_on_scroll"
        }
    ]
    return (
        <PanelBody title="Pagination" initialOpen={false}>

            <ToggleControl
                label="Show Pagination:"
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
                            label="Display per page:"
                            labelPosition="side"
                            min={1}
                            max={5000}
                            step={1}
                            value={pagination.post_per_page}
                            onChange={val =>{props.attr.setAttributes({pagination: {...pagination, "post_per_page": val}})}}
                        />

                        <SelectControl
                            label="Pagination Type:"
                            options={pagination_type}
                            value ={pagination.pagination_type}
                            onChange={(val)=>props.attr.setAttributes( {pagination: {...pagination, "pagination_type": val} })}
                        />
                    </>
                ):("")
            }
        </PanelBody>
    );
}

export default Pagination;