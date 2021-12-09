import {
    PanelBody,
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalNumberControl as NumberControl,
    __experimentalBoxControl as BoxControl,
    __experimentalUnitControl as UnitControl,
    TabPanel,
    ColorPalette,
    BaseControl,
    Button,
    Dropdown,
    SelectControl
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Read_More(props) {
    const { button, button_style, button_padding} = props.attr.attributes
    const {__} = wp.i18n;

    return (
        <PanelBody title={__( "Read More Button", "the-post-grid")} initialOpen={false}>
            <TabPanel
                className="button-color-panel"
                activeClass="active-tab"
                tabs={ [
                    {
                        name: 'normal',
                        title: __('Normal', 'the-post-grid'),
                        className: 'btn-normal tab_panel',
                    },
                    {
                        name: 'hover',
                        title: __('Hover', 'the-post-grid'),
                        className: 'btn-hover tab_panel',
                    },
                ] }
            >
                { ( tab ) => {
                    if(tab.name == "normal"){
                        return(
                            <>
                                <Text>
                                    {__( "Text Color:", "the-post-grid")}
                                </Text>
                                <ColorPalette
                                    className={"rt-colorcontrol"}
                                    colors={ props.attr.colors }
                                    value={ button_style.color }
                                    onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "color": color}} ) }
                                />

                                <Text>
                                    {__( "Background Color:", "the-post-grid")}
                                </Text>
                                <ColorPalette
                                    className={"rt-colorcontrol"}
                                    label = "Select Color"
                                    colors={props.attr.colors }
                                    value={ button_style["background-color"] }
                                    onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "background-color": color}} ) }
                                />

                                <Text>
                                    {__( "Active Color:", "the-post-grid")}
                                </Text>

                                <ColorPalette
                                    className={"rt-colorcontrol"}
                                    colors={ props.attr.colors }
                                    value={ button_style.active_color }
                                    onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "active_color": color}} ) }
                                />
                            </>
                        )
                    }else if (tab.name == "hover"){
                        return (
                            <>
                                <Text>
                                    {__( "Text Hover Color:", "the-post-grid")}
                                </Text>
                                <ColorPalette
                                    className={"rt-colorcontrol"}
                                    colors={ props.attr.colors }
                                    value={ button_style.h_color }
                                    onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "h_color": color}} ) }
                                />

                                <Text>
                                    {__( "Background Hover Color:", "the-post-grid")}
                                </Text>
                                <ColorPalette
                                    className={"rt-colorcontrol"}
                                    colors={ props.attr.colors }
                                    value={ button_style.h_bg_color }
                                    onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "h_bg_color": color}} ) }
                                />
                            </>
                        )
                    }
                } }
            </TabPanel>

            <br/>
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
                                className={"rt-unitcontrol"}
                                value={ button_style["font-size"] }
                                onChange={ ( val ) => props.attr.setAttributes( {button_style: {...button_style, "font-size": val}} ) }
                            />

                            <SelectControl
                                label={__( "Font Weight:", "the-post-grid")}
                                className={"rt-selectcontrol"}
                                value={ button_style["font-weight"] }
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
                                onChange={ ( value ) => props.attr.setAttributes( {button_style: {...button_style, "font-weight": value} } ) }
                            />
                            <SelectControl
                                label={__( "Text Transform", "the-post-grid")}
                                className={"rt-selectcontrol meta"}
                                value={ button_style["transform"] }
                                options={ props.attr.transform}
                                onChange={ ( value ) => props.attr.setAttributes( {button_style: {...button_style, "transform": value} } ) }
                            />

                            <Text>
                                {__( "Letter Spacing:", "the-post-grid")}
                            </Text>
                            <UnitControl
                                className={"rt-unitcontrol meta"}
                                units={props.attr.units}
                                value={ button_style["letter-spacing"] }
                                onChange={ ( val ) => props.attr.setAttributes( {button_style: {...button_style, "letter-spacing": val}} ) }
                            />

                            <NumberControl
                                className={"rt-numbercontrol"}
                                label={__('Line Height:', 'the-post-grid')}
                                onChange={ (value) =>{props.attr.setAttributes({button_style: {...button_style,"line-height":value}})}}
                                value={ button_style['line-height'] }
                            />
                        </div>
                    )}
                />
            </BaseControl>

            <NumberControl
                className={"rt-numbercontrol"}
                label={__( "Border Radius", "the-post-grid")}
                value={button["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { button: {...button, "border-radius": value} }) }
            />

            <Text>
                {__( "Alignment:", "the-post-grid")}
            </Text>
            <RadioGroup defaultChecked="left"
                className={".rt-radiocontrol"}
                onChange={ (val) =>props.attr.setAttributes({button: {...button, "text-align": val}}) }
                checked={ button["text-align"] }
            >
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
            </RadioGroup>

            <p></p>

            <BoxControl
                label={__( "Padding:", "the-post-grid")}
                values={ button_padding }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({button_padding: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Read_More;