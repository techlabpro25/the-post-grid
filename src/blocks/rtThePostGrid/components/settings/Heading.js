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
    const {__} = wp.i18n;
    const {heading, heading_style} = props.attr.attributes
    return (
        <PanelBody title={__( "Block Heading", "the-post-grid")} initialOpen={true}>
            <SelectControl
                label={__( "Tag:", "the-post-grid")}
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
                label={__( "Style", "the-post-grid")}
                value={ heading["style"] }
                options={ [
                    { label: __( 'Style 1', "the-post-grid"), value: "1" },
                    { label: __( 'Style 2', "the-post-grid"), value: "2" },
                    { label: __( 'Style 3', "the-post-grid"), value: "3" },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {heading: {...heading, "style": value} } ) }
            />

            <Text>
                {__( "Text Alignment:", "the-post-grid")}
            </Text>
            <RadioGroup defaultChecked="left" onChange={ (val) =>props.attr.setAttributes({heading_style: {...heading_style, "text-align": val}}) } checked={ heading_style["text-align"] }>
                <Radio value="left"></Radio>
                <Radio value="center"></Radio>
                <Radio value="right"></Radio>
            </RadioGroup>


            <TextControl
                label={__( "Link:", "the-post-grid")}
                value={ heading.link }
                onChange={ (val) => props.attr.setAttributes({heading: {...heading, "link": val}}) }
            />
        </PanelBody>
    );
}

export default Heading;