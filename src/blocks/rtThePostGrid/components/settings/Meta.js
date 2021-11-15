import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    __experimentalUnitControl as UnitControl,
    SelectControl,
    ColorPalette,
    ToggleControl 
} from "@wordpress/components";

import { useState, useEffect } from '@wordpress/element';

function Meta(props) {
    const {meta, meta_style} = props.attr.attributes
    const [hasmetaicon, useHasmetaicon] = useState(true)

    const position = [
        {
            label: "Above Title",
            value: "above"
        },
        {
            label: "Between Title and Excerpt",
            value: "between"
        },
        {
            label: "Below Excerpt",
            value: "below"
        }
    ]

    return (
        <PanelBody title="Meta" initialOpen={false}>
            <SelectControl
                label="Position"
                value={ meta.position }
                options={ position }
                onChange={ ( val ) => props.attr.setAttributes( {meta: {...meta, "position": val}} ) }
            />

            <SelectControl
                label="Seperator"
                value={ meta.seperator }
                options={ [
                    { label: 'Dot(.)', value: '.' },
                    { label: 'Single Slash ( / )', value: '/' },
                    { label: 'Double Slash ( // )', value: '//' },
                    { label: 'Hypen ( - )', value: '-' },
                    { label: 'Vertical Pipe ( | )', value: '|' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {meta: {...meta, "seperator": value} }) }
            />

            <ToggleControl
                label="Icon"
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