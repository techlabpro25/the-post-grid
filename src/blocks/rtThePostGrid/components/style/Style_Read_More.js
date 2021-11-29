import {
    PanelBody, 
    __experimentalText as Text,
    ColorPalette,
    Popover,
    Button,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Read_More(props) {
    const { button, button_style, } = props.attr.attributes
    const {__} = wp.i18n;
    const [ colortoggle, setColortoggle ] = useState( false );
	const [ bgcolortoggle, setBgcolortoggle ] = useState( false );

    const btncolorpopover = () => {
        setColortoggle( ( state ) => ! state );
    };

	const btnbgcolorpopover = () => {
        setBgcolortoggle( ( state ) => ! state );
    };

    return (
        <PanelBody title={__( "Read More Button", "the-post-grid")} initialOpen={false}>
            <Button className="popovercomponent com_1" variant="secondary" onClick={ btncolorpopover }>
                Select Text Color
                { colortoggle && 
                    <Popover>
                        <br/>
                        <Text>
                            {__( "Text Color:", "the-post-grid")}
                        </Text>
                        <ColorPalette
                            colors={ props.attr.colors }
                            value={ button_style.color }
                            onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "color": color}} ) }
                        />


                        <Text>
                            {__( "Text Hover Color:", "the-post-grid")}
                        </Text>
                        <ColorPalette
                            colors={ props.attr.colors }
                            value={ button_style.h_color }
                            onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "h_color": color}} ) }
                        />
                        
                    </Popover> }
            </Button>
                <br/>
            <Button className="popovercomponent" variant="secondary" onClick={ btnbgcolorpopover }>
                Select Background Color
                { bgcolortoggle && 
                    <Popover>
                        <br/>
                        <Text>
                            {__( "Background Color:", "the-post-grid")}
                        </Text>
                        <ColorPalette
                            label = "Select Color"
                            colors={props.attr.colors }
                            value={ button_style["background-color"] }
                            onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "background-color": color}} ) }
                        />
                        

                        <Text>
                            {__( "Background Hover Color:", "the-post-grid")}
                        </Text>
                        <ColorPalette
                            colors={ props.attr.colors }
                            value={ button_style.h_bg_color }
                            onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "h_bg_color": color}} ) }
                        />
                        
                    </Popover> }
            </Button>

            <br/>

            <Text>
                {__( "Active Color:", "the-post-grid")}
            </Text>
            <ColorPalette
                colors={ props.attr.colors }
                value={ button_style.active_color }
                onChange={ ( color ) => props.attr.setAttributes( {button_style: {...button_style, "active_color": color}} ) }
            />
            
        
        </PanelBody>
    );
}

export default Read_More;