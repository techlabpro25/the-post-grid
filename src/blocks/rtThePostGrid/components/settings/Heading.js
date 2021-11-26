import { 
    PanelBody, 
    SelectControl,
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup, 
    TextControl,
} from "@wordpress/components";
import {useState} from '@wordpress/element';

function Heading(props) {
    const {heading, heading_style} = props.attr.attributes
    return (
        <PanelBody title="Block Heading" initialOpen={true}>
            <SelectControl
                label="Tag:"
                value={ heading["tag"] }
                options={ [
                    { label: 'H1', value: '1' },
                    { label: 'H2', value: '2' },
                    { label: 'H3', value: '3' },
                    { label: 'H4', value: '4' },
                    { label: 'H5', value: '5' },
                    { label: 'H6', value: '6' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {heading: {...heading, "tag": value} } ) }
            />

            <SelectControl
                label="Style"
                value={ heading["style"] }
                options={ [
                    { label: 'Style 1', value: "1" },
                    { label: 'Style 2', value: "2" },
                    { label: 'Style 3', value: "3" },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {heading: {...heading, "style": value} } ) }
            />

            <Text>
                Text Alignment:
            </Text>
            <RadioGroup defaultChecked="left" onChange={ (val) =>props.attr.setAttributes({heading_style: {...heading_style, "text-align": val}}) } checked={ heading_style["text-align"] }>
                <Radio value="left"></Radio>
                <Radio value="center"></Radio>
                <Radio value="right"></Radio>
            </RadioGroup>


            <TextControl
                label='Link:'
                value={ heading.link }
                onChange={ (val) => props.attr.setAttributes({heading: {...heading, "link": val}}) }
            />
        </PanelBody>
    );
}

export default Heading;