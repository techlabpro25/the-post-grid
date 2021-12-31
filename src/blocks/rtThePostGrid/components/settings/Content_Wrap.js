import {
    PanelBody,
    SelectControl,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Content_Wrap(props) {
    const {__} = wp.i18n;
    const { content_wrap } = props.attr.attributes
    return (
        <PanelBody title={__( "Column", "the-post-grid")} initialOpen={false}>

            <NumberControl
                className={"rt-numbercontrol column"}
                label={__( "Gutter Control:", "the-post-grid")}
                value={ content_wrap.gutter }
                onChange={ ( value ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "gutter": value} } ) }
                min={ 0 }
                max={ 100 }
                step={1}
            />
        
        </PanelBody>
    );
}

export default Content_Wrap;