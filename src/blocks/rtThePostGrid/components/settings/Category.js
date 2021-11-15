import {
    PanelBody, 
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    SelectControl,
    ToggleControl 
} from "@wordpress/components";

import { useState } from '@wordpress/element';

function Category(props) {
    const { category } = props.attr.attributes
    const [hasicon, useHasicon] = useState(true)
    return (
        <PanelBody title="Category" initialOpen={false}>
            <SelectControl
                label="Title Position:"
                value={ category.position }
                options={ props.attr.matrix_position }
                onChange={ ( val ) => props.attr.setAttributes( {category: {...category, "position": val}} ) }
            />

            <SelectControl
                label="Style"
                value={ category.style }
                options={ [
                    { label: 'Style 1', value: 'style_1' },
                    { label: 'Style 2', value: 'style_2' },
                    { label: 'Style 3', value: 'style_3' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {category: {...category, "style": value} }) }
            />

            <ToggleControl
                label="Icon"
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