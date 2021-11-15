import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
	__experimentalNumberControl as NumberControl,
    SelectControl,
    ToggleControl 
} from "@wordpress/components";
import { useState } from '@wordpress/element';

function Image(props) {
    const { image } = props.attr.attributes
    const [ showimage, setShowimage ] = useState( true );

    return (
        <PanelBody title="Image" initialOpen={false}>
            <ToggleControl
                label="Show Image"
                checked={ image.show_hide }
                onChange={ (val) => {
                    setShowimage( ( state ) => ! state );
                    props.attr.setAttributes({image: {...image, "show_hide": val}})
                } }
            />

            {
                image.show_hide?(
                    <SelectControl
                        label="Featured Image Size:"
                        value={ image.size }
                        options={ [
                            { label: 'Thumbnail (150 x 150)', value: "150x150" },
                            { label: 'Medium (300 x 300)', value: "300x300" },
                            { label: 'Large (1024 x 1024)', value: "1024x1024" },
                            { label: '1536 x 1536 (1536 x 1536)', value: "1536x1536" },
                            { label: '2048 x 2048 (2048 x 2048)', value: "2048x2048" },
                        ] }
                        onChange={ ( value ) => props.attr.setAttributes( {image: {...image, "size": value} } ) }
                    />

                ):("")
            }

            <Text>
                Shape:
            </Text>
            <RadioGroup defaultChecked="Normal" 
                onChange={ (val) =>props.attr.setAttributes({image: {...image, "shape": val}}) } 
                checked={ image["shape"] }
            >
                <Radio value="image-normal">Normal</Radio>
                <Radio value="image-circle">Circle</Radio>
            </RadioGroup>
            

            <SelectControl
                label="Hover Animation:"
                value={ image.animation }
                options={ [
                    { label: 'None', value: "none" },
                    { label: 'Zoom In', value: "anim_zoom_in" },
                    { label: 'Zoom Out', value: "anim_zoom_out" },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {image: {...image, "animation": value} } ) }
            />

            <NumberControl
                label="Border Radius"
                value={image["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { image: {...image, "border-radius": value} }) }
            />
        </PanelBody>
    );
}

export default Image;