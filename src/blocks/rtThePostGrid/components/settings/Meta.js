import {
    PanelBody,
    SelectControl,
    ToggleControl 
} from "@wordpress/components";

import { useState, useEffect } from '@wordpress/element';

function Meta(props) {
    const {__} = wp.i18n;
    const {meta, meta_style} = props.attr.attributes
    const [hasmetaicon, useHasmetaicon] = useState(true)

    const position = [
        {
          label: __("Default", "the-post-grid") ,
          value: "default"
        },
        {
            label: __( "Above Title", "the-post-grid"),
            value: "above"
        },
        {
            label: __( "Above Excerpt", "the-post-grid"),
            value: "between"
        },
        {
            label: __( "Below Excerpt", "the-post-grid"),
            value: "below"
        }
    ]

    return (
        <PanelBody title={__( "Meta", "the-post-grid")} initialOpen={false}>
            <SelectControl
                className={"rt-selectcontrol meta"}
                label={__( "Position", "the-post-grid")}
                value={ meta.position }
                options={ position }
                onChange={ ( val ) => props.attr.setAttributes( {meta: {...meta, "position": val}} ) }
            />

            <SelectControl
                className={"rt-selectcontrol meta"}
                label={__( "Seperator", "the-post-grid")}
                value={ meta.seperator }
                options={ [
                    { label: 'Default', value: '' },
                    { label: 'Dot(.)', value: ' . ' },
                    { label: 'Single Slash ( / )', value: ' / ' },
                    { label: 'Double Slash ( // )', value: ' // ' },
                    { label: 'Hypen ( - )', value: ' - ' },
                    { label: 'Vertical Pipe ( | )', value: ' | ' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {meta: {...meta, "seperator": value} }) }
            />

            <ToggleControl
                className={"rt-togglecontrol meta"}
                label={__( "Icon", "the-post-grid")}
                checked={ meta.icon }
                onChange={ (val) => {
                    useHasmetaicon( ( state ) => ! state );
                    props.attr.setAttributes({meta: {...meta, "icon": val}})
                } }
            />
        
        </PanelBody>
    );
}

export default Meta;