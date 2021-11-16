import { 
    PanelBody, 
    __experimentalText as Text,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
    __experimentalNumberControl as NumberControl,
    RadioControl,
    SelectControl
} from "@wordpress/components";

function Title(props) {
    const {title, title_style} = props.attr.attributes
    return (
        <PanelBody title="Title" initialOpen={false}>
            <SelectControl
                label="Tag:"
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
                label="Title Position:"
                value={ title.position }
                options={ props.attr.matrix_position }
                onChange={ ( newAlignment ) => props.attr.setAttributes( {title: {...title, "position": newAlignment} }) }
            />

            <NumberControl
                label="Title Limit"
                value={ title.word_limit }
                min={1}
                step={1}
                onChange={( value ) => props.attr.setAttributes( {title: {...title, "word_limit": value} } )}
            />

            <RadioControl
                label="Limit Type"
                selected={ title.type }
                options={ [
                    { label: 'Char', value: 'char' },
                    { label: 'Word', value: 'word' },
                    { label: 'Full Title', value: 'full' },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {title: {...title, "type": value} } ) }
            />
        
        </PanelBody>
    );
}

export default Title;