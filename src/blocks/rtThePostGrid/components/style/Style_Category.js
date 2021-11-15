import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalNumberControl as NumberControl,
    __experimentalBoxControl as BoxControl,
    __experimentalUnitControl as UnitControl,
    ColorPalette
} from "@wordpress/components";

import { useState, useEffect } from '@wordpress/element';

function Category(props) {
    const { category, category_style, category_padding, category_margin, } = props.attr.attributes
    const [hasicon, useHasicon] = useState(true)
    return (
        <PanelBody title="Category" initialOpen={false}>
            
            <Text>
                Color:
            </Text>
            <ColorPalette
                label = "Select Color"
                colors={ props.attr.colors }
                value={ category_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, "color": color}} ) }
            />
            	

            <Text>
                Background-Color:
            </Text>
            <ColorPalette
                label = "Background Color"
                colors={ props.attr.colors }
                value={ category_style["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, "background-color": color}} ) }
            />
            

            <Text>
                Font Size::
            </Text>
            <UnitControl
                value={ category_style["font-size"] }
                onChange={ ( value ) => props.attr.setAttributes( { category_style: {...category_style, "font-size": value} }) }
            />
            

            <NumberControl
                label="Border Radius"
                value={category_style["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { category_style: {...category_style, "border-radius": value} }) }
            />

            <BoxControl
                label="Padding"														
                values={ category_padding }
                onChange={ ( val ) => {
                    props.attr.setAttributes({category_padding: val})
                }}
            />

            <BoxControl
                label="Margin"																
                values={ category_margin }
                onChange={ ( val ) => {
                    props.attr.setAttributes({category_margin: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Category;