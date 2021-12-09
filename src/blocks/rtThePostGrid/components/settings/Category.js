import {
    PanelBody, 
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    SelectControl,
    ToggleControl 
} from "@wordpress/components";

import { useState } from '@wordpress/element';

function Category(props) {
    const {__} = wp.i18n;
    const { category } = props.attr.attributes
    const [hasicon, useHasicon] = useState(true)
    return (
        <PanelBody title={__( "Category", "the-post-grid")} initialOpen={false}>
            <SelectControl
                className={"rt-selectcontrol terms"}
                label={__( "Category Position:", "the-post-grid")}
                value={ category.position }
                options={ props.attr.matrix_position }
                onChange={ ( val ) => props.attr.setAttributes( {category: {...category, "position": val}} ) }
            />

            <SelectControl
                className={"rt-selectcontrol terms"}
                label={__( "Style", "the-post-grid")}
                value={ category.style }
                options={ [
                    { label: __( 'Style 1', "the-post-grid"), value: 'style1' },
                    { label: __( 'Style 2', "the-post-grid"), value: 'style2' },
                    { label: __( 'Style 3', "the-post-grid"), value: 'style3' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {category: {...category, "style": value} }) }
            />

            <ToggleControl
                className={"rt-togglecontrol terms"}
                label={__( "Icon", "the-post-grid")}
                checked={ category.icon }
                onChange={ (val) => {
                    useHasicon( ( state ) => ! state );
                    props.attr.setAttributes({category: {...category, "icon": val}})
                } }
            />
        
        </PanelBody>
    );
}

export default Category;