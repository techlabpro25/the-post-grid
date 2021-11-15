import { 
    PanelBody, 
    ColorPalette, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {useState} from '@wordpress/element';

function Style_Content_wrap(props) {
    const { content_wrap, content_padding, constent_box_padding} = props.attr.attributes
    return (
        <PanelBody title="Content Wrap" initialOpen={false}>
            <Text>
                Background Color:
            </Text>
            <ColorPalette
                label = "Select Background Color"
                colors={ props.attr.colors }
                value={ content_wrap["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "background-color": color}} ) }
            />
            

            <Text>
                Border Shadow Color:
            </Text>
            <ColorPalette
                label = "Select Color"
                colors={ props.attr.colors }
                value={ content_wrap["box-shadow-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "box-shadow-color": color, "box-shadow":`0px 0px 1px ${color}`}} ) }
            />
            

            <Text>
                Border Color:
            </Text>
            <ColorPalette
                label = "Border Color"
                colors={ props.attr.colors }
                value={ content_wrap["border-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "border-color": color}} ) }
            />
            

            <Text>
                Border Width:
                </Text>
            <UnitControl
                value={ content_wrap["border-width"] }
                onChange={ ( val ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "border-width": val}} ) } 
            />
            

            <NumberControl
                label="Border Radius"
                value={content_wrap["radius"]}
                onChange={ ( value ) =>  props.attr.setAttributes( { content_wrap: {...content_wrap, "radius": value, "border-radius": `${value}px`} })}
            />

            <BoxControl
                label="Box Padding"														
                values={ constent_box_padding }
                onChange={ ( nextValues ) => {
                    props.attr.setAttributes({constent_box_padding: nextValues})
                }}
            />

            <BoxControl
                label="Content Padding"																
                values={ content_padding }
                onChange={ ( val ) => {
                    props.attr.setAttributes({content_padding: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Style_Content_wrap;