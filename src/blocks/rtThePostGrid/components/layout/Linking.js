import {
    PanelBody, 
    RadioControl, 
    ToggleControl
} from "@wordpress/components";
import {useState} from '@wordpress/element';


function Linking(props) {
    const {__} = wp.i18n;
    const [haslinking, useHaslinking] = useState(true)
    const {linking} = props.attr.attributes
    
    return (
        <PanelBody title={__( "Linking", "the-post-grid")} initialOpen={false}>

            <ToggleControl
                label={__( "Link to Page Details:", "the-post-grid")}
                checked={ linking.link_to_page }
                onChange={ (val) => {
                    useHaslinking( ( state ) => ! state );
                    var tar = linking.target
                    if(val == false){
                        tar = ""
                    }
                    props.attr.setAttributes({linking: {...linking, "link_to_page": val, 'target': tar}})
                } }
            />
            {
                linking.link_to_page?(
                    <>
                        {/*Pro Feature*/}

                        {/*<RadioControl*/}
                        {/*    label={__( "Detail Page Link Type:", "the-post-grid")}*/}
                        {/*    selected={ linking.link_type }*/}
                        {/*    options={ [*/}
                        {/*        { label: __( 'PopUp', "the-post-grid"), value: 'popup' },*/}
                        {/*        { label: __( "New Page", "the-post-grid"), value: 'new_page' },*/}
                        {/*    ] }*/}
                        {/*    onChange={ ( val ) => props.attr.setAttributes({linking: {...linking, "link_type": val}}) }*/}
                        {/*/>*/}

                        <RadioControl
                            label={__( "Link Target:", "the-post-grid")}
                            selected={ linking.target }
                            options={ [
                                { label: __( "Same Window", "the-post-grid"), value: '' },
                                { label: __( "New Window", "the-post-grid"), value: '_blank' },
                            ] }
                            onChange={ ( val ) => props.attr.setAttributes({linking: {...linking, "target": val}}) }
                        />
                    </>
                ):("")
            }


        </PanelBody>
    );
}

export default Linking;