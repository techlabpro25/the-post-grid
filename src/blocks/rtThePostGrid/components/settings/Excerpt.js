import { 
    PanelBody, 
    TextControl,
    __experimentalNumberControl as NumberControl,
    RadioControl,
} from "@wordpress/components";

function Excerpt(props) {
    const {__} = wp.i18n;
    const { excerpt, loaders } = props.attr.attributes
    return (
        <PanelBody title={__( "Excerpt", "the-post-grid")} initialOpen={false}>
            <NumberControl
                className={"rt-numbercontrol terms"}
                label={__( "Excerpt Limit", "the-post-grid")}
                value={ excerpt.limit }
                min={1}
                step={1}
                onChange={( value ) => props.attr.setAttributes( {excerpt: {...excerpt, "limit": value} } )}
            />
            <RadioControl
                className={"rt-radiocontrol terms"}
                label={__( "Limit Type", "the-post-grid")}
                selected={ excerpt.type }
                options={ [
                    { label: __( 'Character', "the-post-grid"), value: 'char' },
                    { label: __( 'Word', "the-post-grid"), value: 'word' },
                    { label: __( 'Full excerpt', "the-post-grid"), value: 'fullex' },
                    { label: __( 'Full content', "the-post-grid"), value: 'full' },
                ] }
                onChange={
                    ( value ) =>{

                        props.attr.setAttributes( {excerpt: {...excerpt, "type": value} } )
                    }

                }
            />

            <TextControl
                className={"rt-textcontrol terms"}
                label={__( "Excerpt More Text", "the-post-grid")}
                value={excerpt.more_text}
                onChange={(val) =>props.attr.setAttributes({excerpt: {...excerpt, "more_text": val}})}	
            />	
            
        </PanelBody>
    );
}

export default Excerpt;