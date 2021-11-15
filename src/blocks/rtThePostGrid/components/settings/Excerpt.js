import { 
    PanelBody, 
    TextControl,
    __experimentalNumberControl as NumberControl,
    RadioControl,
} from "@wordpress/components";

function Excerpt(props) {
    const { excerpt } = props.attr.attributes
    return (
        <PanelBody title="Excerpt" initialOpen={false}>
            <NumberControl
                label="Excerpt Limit"
                value={ excerpt.limit }
                min={1}
                step={1}
                onChange={( value ) => props.attr.setAttributes( {excerpt: {...excerpt, "limit": value} } )}
            />

            <RadioControl
                label="Limit Type"
                selected={ excerpt.type }
                options={ [
                    { label: 'Char', value: 'char' },
                    { label: 'Word', value: 'word' },
                    { label: 'Full Content', value: 'full' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {excerpt: {...excerpt, "type": value} } ) }
            />
            <TextControl
                label="Excerpt More Text"
                value={excerpt.more_text}
                onChange={(val) =>props.attr.setAttributes({excerpt: {...excerpt, "more_text": val}})}	
            />	
            
        </PanelBody>
    );
}

export default Excerpt;