import { 
    PanelBody, 
    ColorPalette, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {useState} from '@wordpress/element';

function Style_Section(props) {
    const { section, section_padding, section_margin } = props.attr.attributes
    return (
        <PanelBody title="Full Area / Section" initialOpen={false}>
            <Text>
                Background Color:
            </Text>
            <ColorPalette
                label = "Select Background Color"
                colors={ props.attr.colors }
                value={ section["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {section: {...section, "background-color": color}} ) }
            />
            

            <BoxControl
                label="Padding"														
                values={ section_padding }
                onChange={ ( val ) => {
                    props.attr.setAttributes({section_padding: val})
                }}
            />

            <BoxControl
                label="Margin"																
                values={ section_margin }
                onChange={ ( val ) => {
                    props.attr.setAttributes({section_margin: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Style_Section;