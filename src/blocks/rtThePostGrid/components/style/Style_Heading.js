import { 
    PanelBody, 
    ColorPalette, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {useState} from '@wordpress/element';

function Heading(props) {
    const {__} = wp.i18n;
    const { heading_style, heading_padding_object, heading_margin_object} = props.attr.attributes
    return (
        <PanelBody title={__( "Block Heading" , "the-post-grid")} initialOpen={false}>
            <Text>
                {__( "Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ heading_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "color": color}} ) }
            />
            

            <Text>
                Background Color:
            </Text>
            <ColorPalette
                label = {__( "Select Background Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ heading_style["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "background-color": color}} ) }
            />
            

            <Text>
                {__( "Border Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                colors={ props.attr.colors }
                value={ heading_style["border-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "border-color": color}} ) }
            />
            

            <Text>
                {__( "Border Width:", "the-post-grid")}
            </Text>
            <UnitControl
                value={ heading_style["border-width"] }
                onChange={ ( val ) => props.attr.setAttributes( {heading_style: {...heading_style, "border-width": val}} ) } 
            />
            <NumberControl
                label={__('Line Height', 'the-post-grid')}
                onChange={ (value) =>{props.attr.setAttributes({heading_style: {...heading_style,"line-height":value}})}}
                value={ heading_style['line-height'] }
            />

            

            <BoxControl
                label={__( "Padding", "the-post-grid")}
                values={ heading_padding_object }
                onChange={ ( nextValues ) => {
                    props.attr.setAttributes({heading_padding_object: nextValues})
                }}
            />

            <BoxControl
                label={__( "Margin", "the-post-grid")}
                values={ heading_margin_object }
                onChange={ ( val ) => {
                    props.attr.setAttributes({heading_margin_object: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Heading;