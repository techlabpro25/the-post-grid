import { 
    PanelBody, 
    __experimentalText as Text,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalUnitControl as UnitControl,
    SelectControl,
    ColorPalette 
} from "@wordpress/components";

function Excerpt(props) {
    const { excerpt_style } = props.attr.attributes
    return (
        <PanelBody title="Excerpt" initialOpen={false}>
            
            <Text>
                Color:
            </Text>
            <ColorPalette
                label = "Select Color"
                colors={ props.attr.colors }
                value={ excerpt_style.color }
                onChange={ ( color ) => props.attr.setAttributes( {excerpt_style: {...excerpt_style, "color": color}} ) }
            />
            

            <Text>
                Font Size:
            </Text>
            <UnitControl
                value={ excerpt_style["font-size"] }
                onChange={ ( value ) => props.attr.setAttributes( { excerpt_style: {...excerpt_style, "font-size": value} }) }
            />
            


            <SelectControl
                label="Font Weight:"
                value={ excerpt_style["font-weight"] }
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
                onChange={ ( value ) => props.attr.setAttributes( {excerpt_style: {...excerpt_style, "font-weight": value} } ) }
            />

            <Text>
                Text Alignment:
            </Text>
            <RadioGroup defaultChecked="left" onChange={ (val) =>props.attr.setAttributes({excerpt_style: {...excerpt_style, "text-align": val}}) } checked={ excerpt_style["text-align"] }>
                <Radio value="Left"></Radio>
                <Radio value="Center"></Radio>
                <Radio value="Right"></Radio>
            </RadioGroup>
            
        
        </PanelBody>
    );
}

export default Excerpt;