import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
	__experimentalNumberControl as NumberControl,
    SelectControl,
    ToggleControl 
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';
import apiFetch from "@wordpress/api-fetch";

function Image(props) {
    const {__} = wp.i18n;
    const { image } = props.attr.attributes
    const [ showimage, setShowimage ] = useState( true );
    const [sizes, setSizes] = useState([])

    // Get all Image Size
    useEffect(() => {
        apiFetch({ path: "/rt/v1/image-size" }).then((sizes) => {
            setSizes(sizes)
        })
    }, []);

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
                        options={ sizes }
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