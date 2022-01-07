import {
    PanelBody, 
    __experimentalText as Text,
    __experimentalNumberControl as NumberControl,
    __experimentalBoxControl as BoxControl,
    __experimentalUnitControl as UnitControl,
    ColorPalette,
    BaseControl,
    Button,
    Dropdown,
    SelectControl,
} from "@wordpress/components";

import { useState, useEffect } from '@wordpress/element';

function Category(props) {
    const {__} = wp.i18n;
    const { category, category_style, category_padding, category_margin, } = props.attr.attributes
    const [hasicon, useHasicon] = useState(true)
    return (
        <PanelBody title={__( "Category", "the-post-grid")} initialOpen={false}>
            
            <Text>
                Color:
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol terms"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ category_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, "color": color}} ) }
            />

            <Text>
                Link Hover Color:
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol meta"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ category_style['h-color'] }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, 'h-color': color}} ) }
            />

            <Text>
                {__( "Background-Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol terms"}
                colors={ props.attr.colors }
                value={ category_style["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {category_style: {...category_style, "background-color": color}} ) }
            />

            <BoxControl
                label={__( "Padding:", "the-post-grid")}
                values={ category_padding }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({category_padding: val})
                }}
            />

            <BoxControl
                label={__( "Margin:", "the-post-grid")}
                values={ category_margin }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({category_margin: val})
                }}
            />
            <NumberControl
                className={"rt-tpg-numbercontrol terms"}
                label={__( "Border Radius:", "the-post-grid")}
                labelPosition="side"
                value={category_style["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { category_style: {...category_style, "border-radius": value} }) }
            />

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
                                className={"rt-tpg-unitcontrol terms"}
                                value={ category_style["font-size"] }
                                onChange={ ( value ) => props.attr.setAttributes( { category_style: {...category_style, "font-size": value} }) }
                            />

                            <SelectControl
                                label={__( "Font Weight:", "the-post-grid")}
                                className={"rt-tpg-selectcontrol terms"}
                                value={ category_style["font-weight"] }
                                options={ [
                                    { label: 'Default', value: "" },
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
                                onChange={ ( value ) => props.attr.setAttributes( {category_style: {...category_style, "font-weight": value} } ) }
                            />

                            <SelectControl
                                label={__( "Text Transform", "the-post-grid")}
                                className={"rt-tpg-selectcontrol terms"}
                                value={ category_style["transform"] }
                                options={ props.attr.transform}
                                onChange={ ( value ) => props.attr.setAttributes( {category_style: {...category_style, "transform": value} } ) }
                            />

                            <Text>
                                {__( "Letter Spacing:", "the-post-grid")}
                            </Text>
                            <UnitControl
                                className={"rt-tpg-unitcontrol terms"}
                                units={props.attr.units}
                                value={ category_style["letter-spacing"] }
                                onChange={ ( val ) => props.attr.setAttributes( {category_style: {...category_style, "letter-spacing": val}} ) }
                            />

                            <UnitControl
                                className={"rt-tpg-unitcontrol terms"}
                                label={__('Line Height:', 'the-post-grid')}
                                units={props.attr.units}
                                onChange={ (value) =>{props.attr.setAttributes({category_style: {...category_style,"line-height":value}})}}
                                value={ category_style['line-height'] }
                            />


                        </div>
                    )}
                />
            </BaseControl>
        
        </PanelBody>
    );
}

export default Category;