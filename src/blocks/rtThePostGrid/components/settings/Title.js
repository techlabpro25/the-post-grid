import { 
    PanelBody,
    __experimentalNumberControl as NumberControl,
    RadioControl,
    SelectControl,
    TextControl,
} from "@wordpress/components";

function Title(props) {
    const {__} = wp.i18n;
    const {title, title_style} = props.attr.attributes

    const title_position = [
        {
            label: __("Default", "the-post-grid"),
            value: ""
        },
        {
            label: __("Above Image", "the-post-grid"),
            value: "above-image"
        },
        {
            label: __("Below Image", "the-post-grid"),
            value: "below-image"
        }
    ]
    return (
        <PanelBody title={__( "Title", "the-post-grid")} initialOpen={false}>
            <SelectControl
                className={'rt-tpg-selectcontrol title'}
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
                options={ title_position }
                onChange={ ( newAlignment ) => props.attr.setAttributes( {title: {...title, "position": newAlignment} }) }
            />

            <NumberControl
                className={'rt-tpg-numbercontrol title'}
                label={__( "Title Limit:", "the-post-grid")}
                value={ title.word_limit }
                min={1}
                step={1}
                onChange={( value ) => props.attr.setAttributes( {title: {...title, "word_limit": value} } )}
            />


            <RadioControl
                className={'rt-tpg-radiocontrol title'}
                label={__( "Limit Type", "the-post-grid")}
                selected={ title.type }
                options={ [
                    { label: __( 'Character', "the-post-grid"), value: 'char' },
                    { label: __( 'Word', "the-post-grid"), value: 'word' },
                    { label: __( 'Full Title', "the-post-grid"), value: 'full' },
                ] }
                onChange={ ( value ) => {
                    var word_limit = title.word_limit
                    if(value == "full"){
                        word_limit = ""
                    }else{
                        if(word_limit == ""){
                            word_limit = 25
                        }
                    }

                    props.attr.setAttributes( {title: {...title, "type": value, 'word_limit': word_limit} } )
                } }
            />

            <TextControl
                className={"rt-tpg-textcontrol terms"}
                label={__( "Title More Text", "the-post-grid")}
                value={title.more_text}
                onChange={(val) =>props.attr.setAttributes({title: {...title, "more_text": val}})}
            />

        </PanelBody>
    );
}

export default Title;