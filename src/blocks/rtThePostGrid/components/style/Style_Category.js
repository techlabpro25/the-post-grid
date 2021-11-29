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
    const {__} = wp.i18n;
    const { category, category_style, category_padding, category_margin, } = props.attr.attributes
    const [hasicon, useHasicon] = useState(true)
    return (
        <PanelBody title={__( "Category", "the-post-grid")} initialOpen={false}>
            
            <Text>
                Color:
            </Text>
            <ColorPalette
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ category_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, "color": color}} ) }
            />
            	

            <Text>
                {__( "Background-Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                colors={ props.attr.colors }
                value={ category_style["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, "background-color": color}} ) }
            />
            

            <Text>
                {__( "Font Size:", "the-post-grid")}
            </Text>
            <UnitControl
                value={ category_style["font-size"] }
                onChange={ ( value ) => props.attr.setAttributes( { category_style: {...category_style, "font-size": value} }) }
            />
            

            <NumberControl
                label={__( "Border Radius:", "the-post-grid")}
                value={category_style["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { category_style: {...category_style, "border-radius": value} }) }
            />

            <BoxControl
                label={__( "Padding:", "the-post-grid")}
                values={ category_padding }
                onChange={ ( val ) => {
                    props.attr.setAttributes({category_padding: val})
                }}
            />

            <BoxControl
                label={__( "Margin:", "the-post-grid")}
                values={ category_margin }
                onChange={ ( val ) => {
                    props.attr.setAttributes({category_margin: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Category;