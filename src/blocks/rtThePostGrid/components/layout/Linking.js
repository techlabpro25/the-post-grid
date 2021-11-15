import {
    PanelBody, 
    RadioControl, 
    ToggleControl
} from "@wordpress/components";
import {useState} from '@wordpress/element';


function Linking(props) {
    const [haslinking, useHaslinking] = useState(true)
    const {linking} = props.attr.attributes
    
    return (
        <PanelBody title="Linking" initialOpen={false}>

            <ToggleControl
                label="Link to Page Details:"
                checked={ linking.link_to_page }
                onChange={ (val) => {
                    useHaslinking( ( state ) => ! state );
                    props.attr.setAttributes({linking: {...linking, "link_to_page": val}})
                } }
            />
            {
                linking.link_to_page?(
                    <>
                        <RadioControl
                            label="Detail Page Link Type:"
                            selected={ linking.link_type }
                            options={ [
                                { label: 'PopUp', value: 'popup' },
                                { label: 'New Page', value: 'new_page' },
                            ] }
                            onChange={ ( val ) => props.attr.setAttributes({linking: {...linking, "link_type": val}}) }
                        />
                    </>
                ):("")
            }

            <RadioControl
                label="Link Target:"
                selected={ linking.target }
                options={ [
                    { label: 'Same Window', value: '' },
                    { label: 'New Window', value: '_blank' },
                ] }
                onChange={ ( val ) => props.attr.setAttributes({linking: {...linking, "target": val}}) }
            />
        </PanelBody>
    );
}

export default Linking;