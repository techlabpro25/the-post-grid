import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    ColorPalette,
    __experimentalNumberControl as NumberControl,
    Popover,
    Button,
    TextControl,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Read_More(props) {

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
        <PanelBody title="View More Button" initialOpen={false}>
            <NumberControl
                label="Border Radius"
                value={button["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { button: {...button, "border-radius": value} }) }
            />

            <br/>
            <Text>
                Alignment:
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
                label="Button Text:"
                value={button.text}
                onChange={(val) =>props.attr.setAttributes({button: {...button, "text": val}})}
            />
        
        </PanelBody>
    );
}

export default Read_More;