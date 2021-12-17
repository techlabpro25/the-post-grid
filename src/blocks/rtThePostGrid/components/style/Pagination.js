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
    const { pagination, pagination_padding, pagination_margin} = props.attr.attributes
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
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination.color }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Background Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-colorcontrol"}
                                                    label = "Select Color"
                                                    colors={props.attr.colors }
                                                    value={ pagination["bg-color"] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "bg-color": color}} ) }
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
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination['h-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "h-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Background Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination['h-bg-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "h-bg-color": color}} ) }
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
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination['a-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "a-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Background Color:", "the-post-grid")}
                                                </Text>
                                                <ColorPalette
                                                    className={"rt-colorcontrol"}
                                                    colors={ props.attr.colors }
                                                    value={ pagination['a-bg-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "a-bg-color": color}} ) }
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
                                                    className={"rt-unitcontrol"}
                                                    value={ pagination["font-size"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "font-size": val}} ) }
                                                />

                                                <SelectControl
                                                    label={__( "Font Weight:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination["font-weight"] }
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
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination: {...pagination, "font-weight": value} } ) }
                                                />
                                                <SelectControl
                                                    label={__( "Text Transform", "the-post-grid")}
                                                    className={"rt-selectcontrol meta"}
                                                    value={ pagination["transform"] }
                                                    options={ props.attr.transform}
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination: {...pagination, "transform": value} } ) }
                                                />

                                                <Text>
                                                    {__( "Letter Spacing:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol meta"}
                                                    units={props.attr.units}
                                                    value={ pagination["letter-spacing"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "letter-spacing": val}} ) }
                                                />

                                                <NumberControl
                                                    className={"rt-numbercontrol"}
                                                    label={__('Line Height:', 'the-post-grid')}
                                                    onChange={ (value) =>{props.attr.setAttributes({pagination: {...pagination,"line-height":value}})}}
                                                    value={ pagination['line-height'] }
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
                                                    className={"rt-unitcontrol"}
                                                    value={ pagination["h-font-size"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "h-font-size": val}} ) }
                                                />

                                                <SelectControl
                                                    label={__( "Font Weight:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination["h-font-weight"] }
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
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination: {...pagination, "h-font-weight": value} } ) }
                                                />
                                                <SelectControl
                                                    label={__( "Text Transform", "the-post-grid")}
                                                    className={"rt-selectcontrol meta"}
                                                    value={ pagination["h-transform"] }
                                                    options={ props.attr.transform}
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination: {...pagination, "h-transform": value} } ) }
                                                />

                                                <Text>
                                                    {__( "Letter Spacing:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol meta"}
                                                    units={props.attr.units}
                                                    value={ pagination["h-letter-spacing"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "h-letter-spacing": val}} ) }
                                                />

                                                <NumberControl
                                                    className={"rt-numbercontrol"}
                                                    label={__('Line Height:', 'the-post-grid')}
                                                    onChange={ (value) =>{props.attr.setAttributes({pagination: {...pagination,"h-line-height":value}})}}
                                                    value={ pagination['h-line-height'] }
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
                                                    className={"rt-unitcontrol"}
                                                    value={ pagination["a-font-size"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "a-font-size": val}} ) }
                                                />

                                                <SelectControl
                                                    label={__( "Font Weight:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination["a-font-weight"] }
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
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination: {...pagination, "a-font-weight": value} } ) }
                                                />
                                                <SelectControl
                                                    label={__( "Text Transform", "the-post-grid")}
                                                    className={"rt-selectcontrol meta"}
                                                    value={ pagination["a-transform"] }
                                                    options={ props.attr.transform}
                                                    onChange={ ( value ) => props.attr.setAttributes( {pagination: {...pagination, "a-transform": value} } ) }
                                                />

                                                <Text>
                                                    {__( "Letter Spacing:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol meta"}
                                                    units={props.attr.units}
                                                    value={ pagination["a-letter-spacing"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "a-letter-spacing": val}} ) }
                                                />

                                                <NumberControl
                                                    className={"rt-numbercontrol"}
                                                    label={__('Line Height:', 'the-post-grid')}
                                                    onChange={ (value) =>{props.attr.setAttributes({pagination: {...pagination,"a-line-height":value}})}}
                                                    value={ pagination['a-line-height'] }
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
                                                    value={ pagination['border-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "border-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Border Width:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[{ value: 'px', label: 'px', default: 0 }]}
                                                    value={ pagination["border-width"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "border-width": val}} ) }
                                                />
                                                <SelectControl
                                                    label={__( "Border Style:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination["border-style"] }
                                                    options={ props.attr.border_style }
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination: {...pagination, "border-style": value} }) }
                                                />
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[
                                                        { value: 'px', label: 'px', default: 0 },
                                                        { value: '%', label: '%', default: 10 },
                                                    ]}
                                                    label={__( "Border Radius", "the-post-grid")}
                                                    value={pagination["border-radius"]}
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination: {...pagination, "border-radius": value} }) }
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
                                                    value={ pagination['h-border-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "h-border-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Border Width:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[{ value: 'px', label: 'px', default: 0 }]}
                                                    value={ pagination["h-border-width"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "h-border-width": val}} ) }
                                                />
                                                <SelectControl
                                                    label={__( "Border Style:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination["h-border-style"] }
                                                    options={ props.attr.border_style }
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination: {...pagination, "h-border-style": value} }) }
                                                />
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[
                                                        { value: 'px', label: 'px', default: 0 },
                                                        { value: '%', label: '%', default: 10 },
                                                    ]}
                                                    label={__( "Border Radius", "the-post-grid")}
                                                    value={pagination["h-border-radius"]}
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination: {...pagination, "h-border-radius": value} }) }
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
                                                    value={ pagination['a-border-color'] }
                                                    onChange={ ( color ) => props.attr.setAttributes( {pagination: {...pagination, "a-border-color": color}} ) }
                                                />

                                                <Text>
                                                    {__( "Border Width:", "the-post-grid")}
                                                </Text>
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[{ value: 'px', label: 'px', default: 0 }]}
                                                    value={ pagination["a-border-width"] }
                                                    onChange={ ( val ) => props.attr.setAttributes( {pagination: {...pagination, "a-border-width": val}} ) }
                                                />
                                                <SelectControl
                                                    label={__( "Border Style:", "the-post-grid")}
                                                    className={"rt-selectcontrol"}
                                                    value={ pagination["a-border-style"] }
                                                    options={ props.attr.border_style }
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination: {...pagination, "a-border-style": value} }) }
                                                />
                                                <UnitControl
                                                    className={"rt-unitcontrol"}
                                                    units={[
                                                        { value: 'px', label: 'px', default: 0 },
                                                        { value: '%', label: '%', default: 10 },
                                                    ]}
                                                    label={__( "Border Radius", "the-post-grid")}
                                                    value={pagination["a-border-radius"]}
                                                    onChange={ ( value ) => props.attr.setAttributes( { pagination: {...pagination, "a-border-radius": value} }) }
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
        
        </PanelBody>
    );
}

export default Pagination;