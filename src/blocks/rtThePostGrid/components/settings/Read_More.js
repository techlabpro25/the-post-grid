import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalNumberControl as NumberControl,
    TextControl,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Read_More(props) {
    const {__} = wp.i18n;
    const { button } = props.attr.attributes
    const [ colortoggle, setColortoggle ] = useState( false );
	const [ bgcolortoggle, setBgcolortoggle ] = useState( false );
    const btncolorpopover = () => {
        setColortoggle( ( state ) => ! state );
    };
	const btnbgcolorpopover = () => {
        setBgcolortoggle( ( state ) => ! state );
    };

    return (
        <PanelBody title={__( "Read More Button", "the-post-grid")} initialOpen={false}>
            <NumberControl
                label={__( "Border Radius", "the-post-grid")}
                value={button["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { button: {...button, "border-radius": value} }) }
            />

            <br/>
            <Text>
                {__( "Alignment:", "the-post-grid")}
            </Text>
            <RadioGroup defaultChecked="left" 
                onChange={ (val) =>props.attr.setAttributes({button: {...button, "text-align": val}}) } 
                checked={ button["text-align"] }
            >
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
            </RadioGroup>
            
            
            <TextControl
                label={__( "Button Text:", "the-post-grid")}
                value={button.text}
                onChange={(val) =>props.attr.setAttributes({button: {...button, "text": val}})}
            />
        
        </PanelBody>
    );
}

export default Read_More;