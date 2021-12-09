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
    const {__} = wp.i18n;
    const { image } = props.attr.attributes
    const [ showimage, setShowimage ] = useState( true );

    return (
        <PanelBody title={__( "Image", "the-post-grid")} initialOpen={false}>
            <ToggleControl
                className={"rt-togglecontrol image"}
                label={__( "Show Image", "the-post-grid")}
                checked={ image.show_hide }
                onChange={ (val) => {
                    setShowimage( ( state ) => ! state );
                    props.attr.setAttributes({image: {...image, "show_hide": val}})
                } }
            />

            {
                image.show_hide?(
                    <SelectControl
                        className={"rt-selectcontrol image"}
                        label={__( "Featured Image Size:", "the-post-grid")}
                        value={ image.size }
                        options={ [
                            { label: 'Thumbnail (150 x 150)', value: "150" },
                            { label: 'Medium (300 x 300)', value: "300" },
                            { label: 'Large (1024 x 1024)', value: "1024" },
                            { label: '1536 x 1536 (1536 x 1536)', value: "1536" },
                            { label: '2048 x 2048 (2048 x 2048)', value: "2048" },
                        ] }
                        onChange={ ( value ) => props.attr.setAttributes( {image: {...image, "size": value} } ) }
                    />

                ):("")
            }

            <SelectControl
                className={"rt-selectcontrol image"}
                label={__( "Hover Animation:", "the-post-grid")}
                value={ image.animation }
                options={ [
                    { label: __( 'None', "the-post-grid"), value: 1 },
                    { label: __( 'Zoom In', "the-post-grid"), value: 1.1 },
                    { label: __( 'Zoom Out', "the-post-grid"), value: 0.95 },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {image: {...image, "animation": value} } ) }
            />

            <NumberControl
                className={"rt-numbercontrol image"}
                label={__( "Border Radius", "the-post-grid")}
                value={image["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { image: {...image, "border-radius": value} }) }
            />
        </PanelBody>
    );
}

export default Image;