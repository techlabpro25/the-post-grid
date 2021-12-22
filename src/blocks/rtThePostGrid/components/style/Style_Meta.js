import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalUnitControl as UnitControl,
    __experimentalNumberControl as NumberControl,
    SelectControl,
    ColorPalette,
    BaseControl,
    Button,
    Dropdown
} from "@wordpress/components";

import { useState, useEffect } from '@wordpress/element';

function Meta(props) {
    const {__} = wp.i18n;
    const { meta_style} = props.attr.attributes
    return (
        <PanelBody title={__( "Meta", "the-post-grid")} initialOpen={false}>
            <Text>
                Color:
            </Text>
            <ColorPalette
                className={"rt-colorcontrol meta"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ meta_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {meta_style: {...meta_style, "color": color}} ) }
            />

            <Text>
                {__( "Text Alignment:", "the-post-grid")}
            </Text>
            <RadioGroup defaultChecked="left"
                className={"rt-radiocontrol meta"}
                onChange={ (val) =>props.attr.setAttributes({meta_style: {...meta_style, "text-align": val}}) } 
                checked={ meta_style["text-align"] }
            >
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
            </RadioGroup>

            <BaseControl label={__("Typography", "the-post-grid")} className="rttpg-typography-base">
                <Dropdown
                    className="rttpg-typography-dropdown"
                    contentClassName="my-popover-content-classname"
                    position="bottom left"
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button
                            isSmall
                            onClick={onToggle}
                            aria-expanded={isOpen}
                            icon="edit"
                        ></Button>
                    )}
                    renderContent={() => (

                        <div className="rttpg-panel-control rtcl-gb-typography-component-panel">
                            <Text>
                                {__( "Font Size:", "the-post-grid")}
                            </Text>
                            <UnitControl
                                className={"rt-unitcontrol meta"}
                                value={ meta_style["font-size"] }
                                onChange={ ( value ) => props.attr.setAttributes( { meta_style: {...meta_style, "font-size": value} }) }
                            />

                            <SelectControl
                                className={"rt-selectcontrol meta"}
                                label={__( "Font Weight:", "the-post-grid")}
                                value={ meta_style["font-weight"] }
                                options={ [
                                    { label: '100', value: 100 },
                                    { label: '200', value: 200 },
                                    { label: '300', value: 300 },
                                    { label: '400', value: 400 },
                                    { label: '500', value: 500 },
                                    { label: '600', value: 600 },
                                    { label: '700', value: 700 },
                                    { label: '800', value: 800 },
                                    { label: '900', value: 900 },
                                ] }
                                onChange={ ( value ) => props.attr.setAttributes( {meta_style: {...meta_style, "font-weight": value} } ) }
                            />

                            <SelectControl
                                label={__( "Text Transform", "the-post-grid")}
                                className={"rt-selectcontrol meta"}
                                value={ meta_style["transform"] }
                                options={ props.attr.transform}
                                onChange={ ( value ) => props.attr.setAttributes( {meta_style: {...meta_style, "transform": value} } ) }
                            />

                            <Text>
                                {__( "Letter Spacing:", "the-post-grid")}
                            </Text>
                            <UnitControl
                                className={"rt-unitcontrol meta"}
                                units={props.attr.units}
                                value={ meta_style["letter-spacing"] }
                                onChange={ ( val ) => props.attr.setAttributes( {meta_style: {...meta_style, "letter-spacing": val}} ) }
                            />

                            <UnitControl
                                className={"rt-unitcontrol meta"}
                                units={props.attr.units}
                                label={__('Line Height', 'the-post-grid')}
                                onChange={ (value) =>{props.attr.setAttributes({meta_style: {...meta_style,"line-height":value}})}}
                                shiftStep={ 1 }
                                value={ meta_style['line-height'] }
                            />
                        </div>
                    )}
                />
            </BaseControl>
        
        </PanelBody>
    );
}

export default Meta;