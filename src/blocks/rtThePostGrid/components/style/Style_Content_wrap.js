import { 
    PanelBody, 
    ColorPalette, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";

function Style_Content_wrap(props) {
    const {__} = wp.i18n;
    const { content_wrap, content_padding, constent_box_padding} = props.attr.attributes
    return (
        <PanelBody title={__( "Content Wrap", "the-post-grid")} initialOpen={false}>
            <Text>
                {__( "Background Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                label = {__( "Select Background Color:", "the-post-grid")}
                colors={ props.attr.colors }
                value={ content_wrap["background-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "background-color": color}} ) }
            />
            

            <Text>
                {__( "Border Shadow Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                label = {__( "Select Color:", "the-post-grid")}
                colors={ props.attr.colors }
                value={ content_wrap["box-shadow-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "box-shadow-color": color}} ) }
            />
            

            <Text>
                {__( "Border Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                label = {__( "Border Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ content_wrap["border-color"] }
                onChange={ ( color ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "border-color": color}} ) }
            />


            <BoxControl
                label={__( "Box Padding:", "the-post-grid")}
                values={ constent_box_padding }
                splitOnAxis={true}
                onChange={ ( nextValues ) => {
                    props.attr.setAttributes({constent_box_padding: nextValues})
                }}
            />

            <BoxControl
                label={__( "Content Padding:", "the-post-grid")}
                values={ content_padding }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({content_padding: val})
                }}
            />

            <Text>
                {__( "Border Width:", "the-post-grid")}
            </Text>
            <UnitControl
                className={"rt-unitcontrol content-wrap"}
                value={ content_wrap["border-width"] }
                onChange={ ( val ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "border-width": val}} ) }
            />


            <NumberControl
                className={"rt-numbercontrol content-wrap"}
                label={__( "Border Radius", "the-post-grid")}
                labelPosition="side"
                value={content_wrap["radius"]}
                onChange={ ( value ) =>  props.attr.setAttributes( { content_wrap: {...content_wrap, "radius": value} })}
            />
        
        </PanelBody>
    );
}

export default Style_Content_wrap;