import {
    PanelBody,
    SelectControl,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Content_Wrap(props) {
    const {__} = wp.i18n;
    const { content_wrap } = props.attr.attributes
    return (
        <PanelBody title={__( "Column", "the-post-grid")} initialOpen={false}>

            <SelectControl
                className={"rt-selectcontrol column"}
                label={__( "Column Spacing:", "the-post-grid")}
                value={ content_wrap.gutter }
                options={
                    [
                        {label:"1", value: "1"},
                        {label:"2", value: "2"},
                        {label:"3", value: "3"},
                        {label:"4", value: "4"},
                        {label:"5", value: "5"},
                    ]
                }
                onChange={ ( value ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "gutter": value} } ) }
            />
        
        </PanelBody>
    );
}

export default Content_Wrap;