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
        <PanelBody title="Heading" initialOpen={true}>
            <SelectControl
                label="Tag:"
                value={ heading["tag"] }
                options={ [
                    { label: 'H1', value: 'h1' },
                    { label: 'H2', value: 'h2' },
                    { label: 'H3', value: 'h3' },
                    { label: 'H4', value: 'h4' },
                    { label: 'H5', value: 'h5' },
                    { label: 'H6', value: 'h6' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {heading: {...heading, "tag": value} } ) }
            />

            <SelectControl
                label="Style"
                value={ heading["style"] }
                options={ [
                    { label: 'Style 1', value: "style_1" },
                    { label: 'Style 2', value: "style_2" },
                    { label: 'Style 3', value: "style_3" },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {heading: {...heading, "style": value} } ) }
            />

            <Text>
                Text Alignment:
            </Text>
            <RadioGroup defaultChecked="left" onChange={ (val) =>props.attr.setAttributes({heading_style: {...heading_style, "text-align": val}}) } checked={ heading_style["text-align"] }>
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
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