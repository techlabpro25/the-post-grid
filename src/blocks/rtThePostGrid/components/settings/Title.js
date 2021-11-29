import { 
    PanelBody,
    __experimentalNumberControl as NumberControl,
    RadioControl,
    SelectControl
} from "@wordpress/components";

function Title(props) {
    const {__} = wp.i18n;
    const {title, title_style} = props.attr.attributes
    return (
        <PanelBody title={__( "Title", "the-post-grid")} initialOpen={false}>
            <SelectControl
                label={__( "Tag:", "the-post-grid")}
                value={ title["tag"] }
                options={ [
                    { label: 'H1', value: '1' },
                    { label: 'H2', value: '2' },
                    { label: 'H3', value: '3' },
                    { label: 'H4', value: '4' },
                    { label: 'H5', value: '5' },
                    { label: 'H6', value: '6' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {title: {...title, "tag": value} } ) }
            />
            
            <SelectControl
                label={__( "Title Position:", "the-post-grid")}
                value={ title.position }
                options={ props.attr.matrix_position }
                onChange={ ( newAlignment ) => props.attr.setAttributes( {title: {...title, "position": newAlignment} }) }
            />

            <NumberControl
                label={__( "Title Limit:", "the-post-grid")}
                value={ title.word_limit }
                min={1}
                step={1}
                onChange={( value ) => props.attr.setAttributes( {title: {...title, "word_limit": value} } )}
            />

            <RadioControl
                label={__( "Limit Type", "the-post-grid")}
                selected={ title.type }
                options={ [
                    { label: __( 'Character', "the-post-grid"), value: 'char' },
                    { label: __( 'Word', "the-post-grid"), value: 'word' },
                    { label: __( 'Full Content', "the-post-grid"), value: 'full' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {title: {...title, "type": value} } ) }
            />
        
        </PanelBody>
    );
}

export default Title;