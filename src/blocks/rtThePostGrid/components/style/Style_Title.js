import { 
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalUnitControl as UnitControl,
    SelectControl,
    ColorPalette 
} from "@wordpress/components";

function Title(props) {
    const {title, title_style} = props.attr.attributes
    return (
        <PanelBody title="Title" initialOpen={false}>
            <Text>
                Color:
            </Text>
            <ColorPalette
                label = "Select Color"
                colors={ props.attr.colors }
                value={ title_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {title_style: {...title_style, "color": color}} ) }
            />
            

            <Text>
                Text Alignment:
            </Text>
            <RadioGroup defaultChecked="left" onChange={ (val) =>props.attr.setAttributes({title_style: {...title_style, "text-align": val}}) } checked={ title_style["text-align"] }>
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
            </RadioGroup>
            
            <br/>
            <Text>
                Font Size:
            </Text>
            <UnitControl
                value={ title_style["font-size"] }
                onChange={ ( val ) => props.attr.setAttributes( {title_style: {...title_style, "font-size": val}} ) } 
            />


            <SelectControl
                label="Font Weight:"
                value={ title_style["font-weight"] }
                options={ [
                    { label: '100', value: 100 },
                    { label: '200', value: 200 },
                    { label: '300', value: 300 },
                    { label: '400', value: 400 },
                    { label: '500', value: 500 },
                    { label: '600', value: 600 },
                    { label: '700', value: 700 },
                    { label: '800', value: 800 },
                    { label: '900', value: 900 },
                ] }
                onChange={ ( value ) => props.attr.setAttributes( {title_style: {...title_style, "font-weight": value} } ) }
            />
        
        </PanelBody>
    );
}

export default Title;