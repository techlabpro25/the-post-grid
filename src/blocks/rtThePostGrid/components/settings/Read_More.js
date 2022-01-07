import {
    PanelBody,
    TextControl,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Read_More(props) {
    const {__} = wp.i18n;
    const { button } = props.attr.attributes
    return (
        <PanelBody title={__( "Read More Button", "the-post-grid")} initialOpen={false}>
            <TextControl
                className={'rt-tpg-textcontrol'}
                label={__( "Button Text:", "the-post-grid")}
                value={button.text}
                onChange={(val) =>props.attr.setAttributes({button: {...button, "text": val}})}
            />
        
        </PanelBody>
    );
}

export default Read_More;