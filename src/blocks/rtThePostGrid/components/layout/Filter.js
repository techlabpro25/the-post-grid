import {
    PanelBody,
    CheckboxControl,
    SelectControl,
    ToggleControl
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import $ from "jquery";
import apiFetch from "@wordpress/api-fetch";

const Filter = (props) =>{
    const {__} = wp.i18n;
    const {filters, query} = props.attr.attributes
    const [taxonomy, setTaxonomy] = useState([]);
    const [taxloader, setTaxloader] = useState(true);
    const [hassubcat, useHassubcat] = useState(false)
    const [hasshowall, useHasshowall] = useState(false)
    const [showpostcount, useShowpostcount] = useState(false)
    const [filter_tax_warning, setFilter_tax_warning] = useState("");
    const [filter_term_list, setFilter_term_list] = useState([]);

    const ignoretypefilter = ["wp_template", "attachment", "wp_block", "post_format", "product_type", "product_visibility", "product_shipping_class"];
    useEffect(()=>{
        $.ajax({
            type: "POST",
            url: editor_ajax_call.ajax_url,
            dataType:"json",
            data: {
                action: 'get_all_taxonomy',
                post_type: query.post_type
            },
            success: function (data){
                if("message" in data.data){
                    setFilter_tax_warning(data.data.message)
                }else{
                    setFilter_tax_warning('');
                    let taxonomy_loop = data.data.map((item_key) => {
                        if (!ignoretypefilter.includes(item_key.name)) {
                            return {
                                label: item_key.label,
                                value: item_key.name,
                            };
                        }
                        return false;
                    })
                    taxonomy_loop.unshift({label: "-- Select--", value: ""})
                    const post_taxonomy = taxonomy_loop.filter(e => e)
                    // // Check if previus taxonoy exist or not
                    // const current_filter_category = filters.taxonomy_filter;
                    // const found = post_taxonomy.some((item) => item.value === current_filter_category)
                    // if(found === false){
                    //     props.attr.setAttributes({ filters: {
                    //             ...filters,
                    //             taxonomy_filter: "",
                    //         } })
                    // }
                    setTaxonomy(post_taxonomy)
                }
                setTaxloader(false)
            },
            error: function (e){
                alert(__('There are some problem with taxonomy.', 'the-post-grid'))
            }
        })
    }, [query.post_type])


    // get Terms
    useEffect(()=>{
        if(filters.taxonomy_filter !== ""){
            apiFetch({ path: "/rt/v1/categories?tax_type="+filters.taxonomy_filter }).then((terms) => {
                const tempterms = terms.map((item_key, i) => {
                    return {
                        label: item_key.name,
                        value: item_key.id,
                    };
                })
                tempterms.unshift({label: __("Show All", "the-post-grid"), value: ""})
                setFilter_term_list(tempterms);
            });
        }else{
            setFilter_term_list([{label: __("-- Select --", "the-post-grid"), value: ""}])
        }

    }, [filters.taxonomy_filter])

    return (
        <PanelBody title={__( "Filter", "the-post-grid")} initialOpen={false}>
            <CheckboxControl
                className="rt-tpg-filter-checkbox rt-tpg-filter-taxonomy"
                label={__( "Taxonomy Filter", "the-post-grid")}
                checked={filters.taxonomy_bool}
                onChange={(value) =>{
                    var taxonomy = filters.taxonomy_filter;
                    var sub_cat = filters.display_as_sub_cat_bool;
                    var tax_filter_type = filters.taxonomy_filter_type;
                    var selected_filter = filters.selected_filtered_item;
                    var hide_show_all_button = filters.hide_show_all_button;
                    var show_post_count = filters.show_post_count;
                    if (value == false){
                        taxonomy = "";
                        sub_cat = false;
                        tax_filter_type = "dropdown";
                        selected_filter = "";
                        hide_show_all_button = false;
                        show_post_count = false
                    }
                    props.attr.setAttributes({
                        filters: {
                            ...filters,
                            'taxonomy_bool': value,
                            'taxonomy_filter': taxonomy,
                            'display_as_sub_cat_bool': sub_cat,
                            'taxonomy_filter_type': tax_filter_type,
                            'selected_filtered_item': selected_filter,
                            'hide_show_all_button': hide_show_all_button,
                            'show_post_count': show_post_count
                        } })
                }}
            />

            {
                filters.taxonomy_bool?(
                    <div className="rt-tpg-filter-first-child">
                        {/*Taxonomy Filter*/}
                        {
                            taxloader?(
                                <>
                                    <div className="rt-tpg-control-lds-ripple">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </>
                            ):(
                                <>
                                    {
                                        (filter_tax_warning?.length && filters.taxonomy_bool)?(
                                            <div className={'no_notice'}>
                                                {__( filter_tax_warning, "the-post-grid")}
                                            </div>
                                        ):(
                                            <>
                                                <SelectControl
                                                    className="rt-tpg-filter-selectcontrol rt-tpg-filter-taxonomy"
                                                    label={__( "Taxonomy Filter:", "the-post-grid")}
                                                    value={filters.taxonomy_filter}
                                                    options={taxonomy}
                                                    onChange={(value) =>{
                                                        props.attr.setAttributes({ filters: {
                                                                ...filters,
                                                                taxonomy_filter: value,
                                                            } })
                                                    }
                                                    }
                                                />
                                            </>
                                        )
                                    }
                                </>
                            )
                        }
                        {/*Taxonomy Filter end*/}

                        {/*Display as sub category*/}
                        <ToggleControl
                            className={"rt-tpg-togglecontrol rt-tpg-filter-sub-category"}
                            label={__( "Display As Sub Category", "the-post-grid")}
                            checked={ filters.display_as_sub_cat_bool }
                            onChange={ (val) => {
                                useHassubcat( ( state ) => ! state );
                                props.attr.setAttributes({filters: {...filters, "display_as_sub_cat_bool": val}})
                            } }
                        />
                        {/*Display as sub category end*/}

                        {/*Taxonomy Filter Type*/}
                        <SelectControl
                            className="rt-tpg-filter-selectcontrol rt-tpg-filter-taxonomy-filter-type"
                            label={__( "Taxonomy Filter Type:", "the-post-grid")}
                            value={filters.taxonomy_filter_type}
                            options={[
                                {
                                    label: "Dropdown",
                                    value: "dropdown"
                                },
                                {
                                    label: "Button",
                                    value: "button"
                                }
                            ]}
                            onChange={(value) =>{
                                props.attr.setAttributes({ filters: {
                                        ...filters,
                                        taxonomy_filter_type: value,
                                    } })
                            }
                            }
                        />
                        {/*Taxonomy Filter Type end*/}

                        {/*Selected Filtered Term*/}
                        <SelectControl
                            className="rt-tpg-filter-selectcontrol rt-tpg-filter-selected-filter-term"
                            label={__( "Selected Filter Term:", "the-post-grid")}
                            value={filters.selected_filtered_item}
                            options={filter_term_list}
                            onChange={(value) =>{
                                props.attr.setAttributes({ filters: {
                                        ...filters,
                                        selected_filtered_item: value,
                                    } })
                            }
                            }
                        />
                        {/*Selected Filtered Term end*/}

                        {/*Hide show all button*/}
                        <ToggleControl
                            className={"rt-tpg-togglecontrol rt-tpg-filter-hide-show-all-button"}
                            label={__( "Hide All (Show all) Button", "the-post-grid")}
                            checked={ filters.hide_show_all_button }
                            onChange={ (val) => {
                                useHasshowall( ( state ) => ! state );
                                props.attr.setAttributes({filters: {...filters, "hide_show_all_button": val}})
                            } }
                        />
                        {/*Hide show all button end*/}

                        {/*Show Post Count*/}
                        <ToggleControl
                            className={"rt-tpg-togglecontrol rt-tpg-filter-show-post-count"}
                            label={__( "Show Post Count", "the-post-grid")}
                            checked={ filters.show_post_count }
                            onChange={ (val) => {
                                useShowpostcount( ( state ) => ! state );
                                props.attr.setAttributes({filters: {...filters, "show_post_count": val}})
                            } }
                        />
                        {/*Show Post Count end*/}
                    </div>
                ):("")
            }



            <CheckboxControl
                className="rt-tpg-filter-checkbox rt-tpg-filter-author"
                label={__( "Author Filter", "the-post-grid")}
                checked={filters.author_bool}
                onChange={(value) =>{
                    props.attr.setAttributes({ filters: { ...filters, 'author_bool': value } })
                }}
            />

            <CheckboxControl
                className="rt-tpg-filter-checkbox rt-tpg-filter-order-by"
                label={__( "Order - Sort retrieved posts by parameter", "the-post-grid")}
                checked={filters.order_sort_by_bool}
                onChange={(value) =>{
                    props.attr.setAttributes({ filters: { ...filters, 'order_sort_by_bool': value } })
                }}
            />

            <CheckboxControl
                className="rt-tpg-filter-checkbox rt-tpg-filter-order"
                label={__( "Sort Order - Designates the ascending or descending order of the \"orderby\" parameter", "the-post-grid")}
                checked={filters.order_sort_bool}
                onChange={(value) =>{
                    props.attr.setAttributes({ filters: { ...filters, 'order_sort_bool': value } })
                }}
            />

            <CheckboxControl
                className="rt-tpg-filter-checkbox rt-tpg-filter-search"
                label={__( "Search filter", "the-post-grid")}
                checked={filters.search_bool}
                onChange={(value) =>{
                    props.attr.setAttributes({ filters: { ...filters, 'search_bool': value } })
                }}
            />
        </PanelBody>
    );
}

export default Filter;