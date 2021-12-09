import { 
    PanelBody, 
    ColorPalette, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
    __experimentalNumberControl as NumberControl,
    BaseControl,
    Button,
    Dropdown,
    SelectControl,
} from "@wordpress/components";
import {useState} from '@wordpress/element';

function Heading(props) {
    const {__} = wp.i18n;
    const { heading_style, heading_padding_object, heading_margin_object} = props.attr.attributes
    return (
        <PanelBody title={__( "Block Heading" , "the-post-grid")} initialOpen={false}>
            <Text>
                {__( "Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-colorcontrol heading"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ heading_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "color": color}} ) }
            />
            

            <Text>
                Background Color:
            </Text>
            <ColorPalette
                className={"rt-colorcontrol heading"}
                label = {__( "Select Background Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ heading_style["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "background-color": color}} ) }
            />
            

            <Text>
                {__( "Border Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-colorcontrol heading"}
                colors={ props.attr.colors }
                value={ heading_style["border-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {heading_style: {...heading_style, "border-color": color}} ) }
            />
            <Text>
                {__( "Border Width:", "the-post-grid")}
            </Text>
            <UnitControl
                className={"rt-unitcontrol heading"}
                value={ heading_style["border-width"] }
                onChange={ ( val ) => props.attr.setAttributes( {heading_style: {...heading_style, "border-width": val}} ) }
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
                                className={"rt-unitcontrol heading"}
                                value={ heading_style["font-size"] }
                                units={props.attr.units}
                                onChange={ ( val ) => props.attr.setAttributes( {heading_style: {...heading_style, "font-size": val}} ) }
                            />

                            <SelectControl
                                label={__( "Font Weight:", "the-post-grid")}
                                className={"rt-selectcontrol heading"}
                                value={ heading_style["font-weight"] }
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
                                onChange={ ( value ) => props.attr.setAttributes( {heading_style: {...heading_style, "font-weight": value} } ) }
                            />

                            <SelectControl
                                label={__( "Text Transform", "the-post-grid")}
                                className={"rt-selectcontrol heading"}
                                value={ heading_style["transform"] }
                                options={ props.attr.transform}
                                onChange={ ( value ) => props.attr.setAttributes( {heading_style: {...heading_style, "transform": value} } ) }
                            />

                            <Text>
                                {__( "Letter Spacing:", "the-post-grid")}
                            </Text>
                            <UnitControl
                                className={"rt-unitcontrol heading"}
                                units={props.attr.units}
                                value={ heading_style["letter-spacing"] }
                                onChange={ ( val ) => props.attr.setAttributes( {heading_style: {...heading_style, "letter-spacing": val}} ) }
                            />

                            <NumberControl
                                className={"rt-numbercontrol heading"}
                                label={__('Line Height:', 'the-post-grid')}
                                onChange={ (value) =>{props.attr.setAttributes({heading_style: {...heading_style,"line-height":value}})}}
                                value={ heading_style['line-height'] }
                            />

                        </div>
                    )}
                />
            </BaseControl>

            <BoxControl
                label={__( "Padding", "the-post-grid")}
                values={ heading_padding_object }
                splitOnAxis={true}
                onChange={ ( nextValues ) => {
                    props.attr.setAttributes({heading_padding_object: nextValues})
                }}
            />

            <BoxControl
                label={__( "Margin", "the-post-grid")}
                values={ heading_margin_object }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({heading_margin_object: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Heading;