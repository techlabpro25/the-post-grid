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

function Pagination(props) {
    const { pagination_style, pagination_padding, pagination_margin, pagination, pagination_spinner_margin, pagination_spinner_color} = props.attr.attributes
    const {__} = wp.i18n;

    return (
        <PanelBody title={__( "Pagination", "the-post-grid")} initialOpen={false}>
            {/*Color*/}
            <BaseControl label={__("Color", "the-post-grid")} className="rttpg-typography-base">
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
                                    {
                                        name: 'active',
                                        title: __('Active', 'the-post-grid'),
                                        className: 'btn-active tab_panel',
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
                                                    className={"rt-tpg-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style.color }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Background Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-tpg-colorcontrol"}
                                                    label = "Select Color"
                                                    colors={props.attr.colors }
                                                    value={ pagination_style["bg-color"] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "bg-color": color}} ) }
                                                />

                                            </>
                                        )
                                    }else if (tab.name == "hover"){
                                        return (
                                            <>
                                                <Text>
                                                    {__( "Text Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-tpg-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['h-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Background Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-tpg-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['h-bg-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-bg-color": color}} ) }
                                                />
                                            </>
                                        )
                                    }else if (tab.name == "active"){
                                        return (
                                            <>
                                                <Text>
                                                    {__( "Text Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-tpg-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['a-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Background Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-tpg-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['a-bg-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-bg-color": color}} ) }
                                                />
                                            </>
                                        )
                                    }
                                } }
                            </TabPanel>
                        </div>
                    )}
                />
            </BaseControl>

            {/*Typography*/}
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
                                    {
                                        name: 'active',
                                        title: __('Active', 'the-post-grid'),
                                        className: 'btn-active tab_panel',
                                    },
                                ] }
                            >
                                { ( tab ) => {
                                    if(tab.name == "normal"){
                                        return(
                                            <>
                                                <Text>
                                                    {__( "Font Size:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    value={ pagination_style["font-size"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "font-size": val}} ) }
                                                />

                                                <SelectControl
                                                    label={__( "Font Weight:", "the-post-grid")}
                                                    className={"rt-tpg-selectcontrol"}
                                                    value={ pagination_style["font-weight"] }
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
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "font-weight": value} } ) }
                                                />
                                                <SelectControl
                                                    label={__( "Text Transform", "the-post-grid")}
                                                    className={"rt-tpg-selectcontrol meta"}
                                                    value={ pagination_style["transform"] }
                                                    options={ props.attr.transform}
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "transform": value} } ) }
                                                />

                                                <Text>
                                                    {__( "Letter Spacing:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    units={props.attr.units}
                                                    value={ pagination_style["letter-spacing"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "letter-spacing": val}} ) }
                                                />

                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    units={props.attr.units}
                                                    label={__('Line Height:', 'the-post-grid')}
                                                    onChange={ (value) =>{props.attr.setAttributes({pagination_style: {...pagination_style,"line-height":value}})}}
                                                    value={ pagination_style['line-height'] }
                                                />
                                            </>
                                        )
                                    }else if (tab.name == "hover"){
                                        return (
                                            <>
                                                <Text>
                                                    {__( "Font Size:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    value={ pagination_style["h-font-size"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-font-size": val}} ) }
                                                />

                                                <SelectControl
                                                    label={__( "Font Weight:", "the-post-grid")}
                                                    className={"rt-tpg-selectcontrol"}
                                                    value={ pagination_style["h-font-weight"] }
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
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-font-weight": value} } ) }
                                                />
                                                <SelectControl
                                                    label={__( "Text Transform", "the-post-grid")}
                                                    className={"rt-tpg-selectcontrol meta"}
                                                    value={ pagination_style["h-transform"] }
                                                    options={ props.attr.transform}
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-transform": value} } ) }
                                                />

                                                <Text>
                                                    {__( "Letter Spacing:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol meta"}
                                                    units={props.attr.units}
                                                    value={ pagination_style["h-letter-spacing"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-letter-spacing": val}} ) }
                                                />

                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    units={props.attr.units}
                                                    label={__('Line Height:', 'the-post-grid')}
                                                    onChange={ (value) =>{props.attr.setAttributes({pagination_style: {...pagination_style,"h-line-height":value}})}}
                                                    value={ pagination_style['h-line-height'] }
                                                />
                                            </>
                                        )
                                    }else if (tab.name == "active"){
                                        return (
                                            <>
                                                <Text>
                                                    {__( "Font Size:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    value={ pagination_style["a-font-size"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-font-size": val}} ) }
                                                />

                                                <SelectControl
                                                    label={__( "Font Weight:", "the-post-grid")}
                                                    className={"rt-tpg-selectcontrol"}
                                                    value={ pagination_style["a-font-weight"] }
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
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-font-weight": value} } ) }
                                                />
                                                <SelectControl
                                                    label={__( "Text Transform", "the-post-grid")}
                                                    className={"rt-tpg-selectcontrol meta"}
                                                    value={ pagination_style["a-transform"] }
                                                    options={ props.attr.transform}
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-transform": value} } ) }
                                                />

                                                <Text>
                                                    {__( "Letter Spacing:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol meta"}
                                                    units={props.attr.units}
                                                    value={ pagination_style["a-letter-spacing"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-letter-spacing": val}} ) }
                                                />

                                                <UnitControl
                                                    className={"rt-tpg-unitcontrol"}
                                                    units={props.attr.units}
                                                    label={__('Line Height:', 'the-post-grid')}
                                                    onChange={ (value) =>{props.attr.setAttributes({pagination_style: {...pagination_style,"a-line-height":value}})}}
                                                    value={ pagination_style['a-line-height'] }
                                                />
                                            </>
                                        )
                                    }
                                } }
                            </TabPanel>
                            
                        </div>
                    )}
                />
            </BaseControl>

            {/*Border*/}

            <BaseControl label={__("Border", "the-post-grid")} className="rttpg-typography-base">
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
                                    {
                                        name: 'active',
                                        title: __('Active', 'the-post-grid'),
                                        className: 'btn-active tab_panel',
                                    },
                                ] }
                            >
                                { ( tab ) => {
                                    if(tab.name == "normal"){
                                        return(
                                            <>
                                                <Text>
                                                    {__( "Border Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['border-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "border-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Border Width:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[{ value: 'px', label: 'px', default: 0 }]}
                                                    value={ pagination_style["border-width"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "border-width": val}} ) }
                                                />
                                                <SelectControl
                                                    label={__( "Border Style:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination_style["border-style"] }
                                                    options={ props.attr.border_style }
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination_style: {...pagination_style, "border-style": value} }) }
                                                />
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[
                                                        { value: 'px', label: 'px', default: 0 },
                                                        { value: '%', label: '%', default: 10 },
                                                    ]}
                                                    label={__( "Border Radius", "the-post-grid")}
                                                    value={pagination_style["border-radius"]}
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination_style: {...pagination_style, "border-radius": value} }) }
                                                />
                                            </>
                                        )
                                    }else if (tab.name == "hover"){
                                        return (
                                            <>
                                                <Text>
                                                    {__( "Border Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['h-border-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-border-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Border Width:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[{ value: 'px', label: 'px', default: 0 }]}
                                                    value={ pagination_style["h-border-width"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "h-border-width": val}} ) }
                                                />
                                                <SelectControl
                                                    label={__( "Border Style:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination_style["h-border-style"] }
                                                    options={ props.attr.border_style }
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination_style: {...pagination_style, "h-border-style": value} }) }
                                                />
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[
                                                        { value: 'px', label: 'px', default: 0 },
                                                        { value: '%', label: '%', default: 10 },
                                                    ]}
                                                    label={__( "Border Radius", "the-post-grid")}
                                                    value={pagination_style["h-border-radius"]}
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination_style: {...pagination_style, "h-border-radius": value} }) }
                                                />
                                            </>
                                        )
                                    }else if (tab.name == "active"){
                                        return (
                                            <>
                                                <Text>
                                                    {__( "Border Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination_style['a-border-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-border-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Border Width:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[{ value: 'px', label: 'px', default: 0 }]}
                                                    value={ pagination_style["a-border-width"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination_style: {...pagination_style, "a-border-width": val}} ) }
                                                />
                                                <SelectControl
                                                    label={__( "Border Style:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination_style["a-border-style"] }
                                                    options={ props.attr.border_style }
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination_style: {...pagination_style, "a-border-style": value} }) }
                                                />
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[
                                                        { value: 'px', label: 'px', default: 0 },
                                                        { value: '%', label: '%', default: 10 },
                                                    ]}
                                                    label={__( "Border Radius", "the-post-grid")}
                                                    value={pagination_style["a-border-radius"]}
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination_style: {...pagination_style, "a-border-radius": value} }) }
                                                />
                                            </>
                                        )
                                    }
                                } }
                            </TabPanel>
                        </div>
                    )}
                />
            </BaseControl>

            <BoxControl
                label={__( "Padding:", "the-post-grid")}
                values={ pagination_padding }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({pagination_padding: val})
                }}
            />

            <BoxControl
                label={__( "Margin:", "the-post-grid")}
                values={ pagination_margin }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({pagination_margin: val})
                }}
            />

            {/*If load more button pagination*/}
            {
                (pagination.pagination_type == "load_more")?(
                    <>
                        <Text>
                            {__( "Spinner Color:", "the-post-grid")}
                        </Text>
                        <ColorPalette
                            className={"rt-colorcontrol"}
                            colors={ props.attr.colors }
                            value={ pagination_spinner_color }
                            onChange={ ( color ) => props.attr.setAttributes( {pagination_spinner_color: color} ) }
                        />

                        <BoxControl
                            label={__( "Spinner Margin:", "the-post-grid")}
                            values={ pagination_spinner_margin }
                            splitOnAxis={true}
                            onChange={ ( val ) => {
                                props.attr.setAttributes({pagination_spinner_margin: val})
                            }}
                        />
                    </>
                ):("")
            }
        
        </PanelBody>
    );
}

export default Pagination;