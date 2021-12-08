import {
    PanelBody,
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalNumberControl as NumberControl,
    __experimentalBoxControl as BoxControl,
    __experimentalUnitControl as UnitControl,
    ColorPalette,
    Popover,
    Button,
} from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';

function Read_More(props) {
    const { button, button_style, button_padding} = props.attr.attributes
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

            <NumberControl
                label={__( "Border Radius", "the-post-grid")}
                value={button["border-radius"]}
                onChange={ ( value ) => props.attr.setAttributes( { button: {...button, "border-radius": value} }) }
            />

            <Text>
                {__( "Alignment:", "the-post-grid")}
            </Text>
            <RadioGroup defaultChecked="left"
                onChange={ (val) =>props.attr.setAttributes({button: {...button, "text-align": val}}) }
                checked={ button["text-align"] }
            >
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
            </RadioGroup>

            <Text>
                {__( "Font Size:", "the-post-grid")}
            </Text>
            <UnitControl
                value={ button_style["font-size"] }
                onChange={ ( val ) => props.attr.setAttributes( {button_style: {...button_style, "font-size": val}} ) }
            />

            <BoxControl
                label={__( "Padding:", "the-post-grid")}
                values={ button_padding }
                onChange={ ( val ) => {
                    props.attr.setAttributes({button_padding: val})
                }}
            />
        
        </PanelBody>
    );
}

export default Read_More;