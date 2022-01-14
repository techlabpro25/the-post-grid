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

function Excerpt(props) {
    const {__} = wp.i18n;
    const { excerpt_style, layout, grid_2_body_hover } = props.attr.attributes
    return (
        <PanelBody title={__( "Excerpt", "the-post-grid")} initialOpen={false}>
            
            <Text>
                {__( "Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol excerpt"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ excerpt_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {excerpt_style: {...excerpt_style, "color": color}} ) }
            />

            {
                layout.value === "grid2"?(
                    <>
                        <Text>
                            {__( "Content Hover Color:", "the-post-grid")}
                        </Text>
                        <ColorPalette
                            className={"rt-tpg-colorcontrol title"}
                            colors={ props.attr.colors }
                            value={ grid_2_body_hover.excerpt }
                            onChange={ ( color ) => props.attr.setAttributes( {grid_2_body_hover: {...grid_2_body_hover, "excerpt": color}} ) }
                        />
                    </>
                ):("")
            }

            <Text>
                {__( "Text Alignment:", "the-post-grid")}
            </Text>
            <RadioGroup className={"rt-tpg-radiocontrol"} defaultChecked="left" onChange={ (val) =>props.attr.setAttributes({excerpt_style: {...excerpt_style, "text-align": val}}) } checked={ excerpt_style["text-align"] }>
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
                                className={"rt-tpg-unitcontrol excerpt"}
                                value={ excerpt_style["font-size"] }
                                onChange={ ( value ) => props.attr.setAttributes( { excerpt_style: {...excerpt_style, "font-size": value} }) }
                            />

                            <SelectControl
                                className={"rt-tpg-selectcontrol excerpt"}
                                label={__( "Font Weight:", "the-post-grid")}
                                value={ excerpt_style["font-weight"] }
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
                                onChange={ ( value ) => props.attr.setAttributes( {excerpt_style: {...excerpt_style, "font-weight": value} } ) }
                            />
                            <SelectControl
                                label={__( "Text Transform", "the-post-grid")}
                                className={"rt-tpg-selectcontrol excerpt"}
                                value={ excerpt_style["transform"] }
                                options={ props.attr.transform}
                                onChange={ ( value ) => props.attr.setAttributes( {excerpt_style: {...excerpt_style, "transform": value} } ) }
                            />

                            <Text>
                                {__( "Letter Spacing:", "the-post-grid")}
                            </Text>
                            <UnitControl
                                className={"rt-tpg-unitcontrol excerpt"}
                                units={props.attr.units}
                                value={ excerpt_style["letter-spacing"] }
                                onChange={ ( val ) => props.attr.setAttributes( {excerpt_style: {...excerpt_style, "letter-spacing": val}} ) }
                            />


                            <UnitControl
                                className={"rt-tpg-unitcontrol excerpt"}
                                units={props.attr.units}
                                label={__('Line Height', 'the-post-grid')}
                                onChange={ (value) =>{props.attr.setAttributes({excerpt_style: {...excerpt_style,"line-height":value}})}}
                                value={ excerpt_style['line-height'] }
                            />
                        </div>
                    )}
                />
            </BaseControl>
        </PanelBody>
    );
}

export default Excerpt;