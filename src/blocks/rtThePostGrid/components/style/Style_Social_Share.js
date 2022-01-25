import { 
    PanelBody, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
    ColorPalette,

} from "@wordpress/components";

function Style_Social_Share(props) {
    const {__} = wp.i18n;
    const { social_style, social_style_padding, social_style_margin, social_style_icon_margin } = props.attr.attributes
    return (
        <PanelBody title={__( "Social Share", "the-post-grid")} initialOpen={false}>

            <Text>
                {__( "Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol rt-tpg-social-color"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ social_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {social_style: {...social_style, "color": color}} ) }
            />

            <Text>
                {__( "Hover Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol rt-tpg-social-color"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ social_style.h_color }
                onChange={ ( color ) => props.attr.setAttributes( {social_style: {...social_style, "h_color": color}} ) }
            />

            <BoxControl
                label={__( "Padding:", "the-post-grid")}
                values={ social_style_padding }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({social_style_padding: val})
                }}
            />

            <BoxControl
                label={__( "Margin:", "the-post-grid")}
                values={ social_style_margin }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({social_style_margin: val})
                }}
            />

            <BoxControl
                label={__( "Icon Margin:", "the-post-grid")}
                values={ social_style_icon_margin }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({social_style_icon_margin: val})
                }}
            />

        </PanelBody>
    );
}

export default Style_Social_Share;