import { 
    PanelBody, 
    __experimentalText as Text,
    __experimentalBoxControl as BoxControl,
    SelectControl,
    ColorPalette,

} from "@wordpress/components";

function Overlay(props) {
    const {__} = wp.i18n;
    const { overlay, overlay_padding } = props.attr.attributes
    return (
        <PanelBody title={__( "Overlay", "the-post-grid")} initialOpen={false}>
            
            <Text>
                {__( "Overlay Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                className={"rt-tpg-colorcontrol rt-tpg-overlay-color"}
                label = {__( "Select Color", "the-post-grid")}
                colors={ props.attr.colors }
                value={ overlay.color }
                onChange={ ( color ) => props.attr.setAttributes( {overlay: {...overlay, "color": color}} ) }
            />
            <SelectControl
                className={"rt-tpg-selectcontrol rt-tpg-overlay-opacity"}
                label={__( "Opacity:", "the-post-grid")}
                value={ overlay.opacity }
                options={ [
                    { label: '10%', value: 0.1 },
                    { label: '20%', value: 0.2 },
                    { label: '30%', value: 0.3 },
                    { label: '40%', value: 0.4 },
                    { label: '50%', value: 0.5 },
                    { label: '60%', value: 0.6 },
                    { label: '70%', value: 0.7 },
                    { label: '80%', value: 0.8 },
                    { label: '90%', value: 0.9 },
                    { label: '100%', value: 1 },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {overlay: {...overlay, "opacity": value} } ) }
            />
            <BoxControl
                label={__( "Overlay Padding:", "the-post-grid")}
                values={ overlay_padding }
                splitOnAxis={true}
                onChange={ ( val ) => {
                    props.attr.setAttributes({overlay_padding: val})
                }}
            />



        </PanelBody>
    );
}

export default Overlay;