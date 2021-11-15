import { 
    PanelBody, 
    ColorPalette, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {useState} from '@wordpress/element';

function Heading(props) {
    const { heading_style, heading_padding_object, heading_margin_object} = props.attr.attributes
    return (
        <PanelBody title="Heading" initialOpen={false}>
            <Text>
                Color:
            </Text>
            <ColorPalette
                label = "Select Color"
                colors={ props.attr.colors }
                value={ heading_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "color": color}} ) }
            />
            

            <Text>
                Background Color:
            </Text>
            <ColorPalette
                label = "Select Background Color"
                colors={ props.attr.colors }
                value={ heading_style["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "background-color": color}} ) }
            />
            

            <Text>
                Border Color:
            </Text>
            <ColorPalette
                label = "Border Color"
                colors={ props.attr.colors }
                value={ heading_style["border-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "border-color": color}} ) }
            />
            

            <Text>
                Border Width:
            </Text>
            <UnitControl
                value={ heading_style["border-width"] }
                onChange={ ( val ) => props.attr.setAttributes( {heading_style: {...heading_style, "border-width": val}} ) } 
            />
            

            <BoxControl
                label="Padding"														
                values={ heading_padding_object }
                onChange={ ( nextValues ) => {
                    props.attr.setAttributes({heading_padding_object: nextValues})
                }}
            />

            <BoxControl
                label="Margin"																
                values={ heading_margin_object }
                onChange={ ( val ) => {
                    props.attr.setAttributes({heading_margin_object: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Heading;