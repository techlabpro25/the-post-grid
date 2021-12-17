const {useState, useEffect} = wp.element;
const PredefaultAttr = (props) =>{
    const {layout, content_padding, content_wrap, button} = props.attr.attributes
    useEffect(()=>{
        if (layout.value == 'grid1'){
            props.attr.setAttributes( {content_padding: {...content_padding, "top": '15px', 'right':"15px", 'bottom': '15px', 'left': '15px'} })
            props.attr.setAttributes( {content_wrap: {...content_wrap, "border-width": '1px', "border-color": "#d9d9d9"} })
            props.attr.setAttributes( {button: {...button, "border-radius": '0px', "h-boder-radius": "0px"} })
        }
        if (layout.value == 'list1'){
            props.attr.setAttributes( {content_padding: {...content_padding, "top": '0px', 'right':"15px", 'bottom': '15px', 'left': '15px'} })
            props.attr.setAttributes( {content_wrap: {...content_wrap, "border-width": '0px', "border-color": "transparent"} })
        }
        if (layout.value == 'list2'){
            props.attr.setAttributes( {content_padding: {...content_padding, "top": '0px', 'right':"15px", 'bottom': '15px', 'left': '15px'} })
            props.attr.setAttributes( {content_wrap: {...content_wrap, "border-width": '0px', "border-color": "transparent"} })
        }

    }, [layout.value])
    return null
}
export default PredefaultAttr;