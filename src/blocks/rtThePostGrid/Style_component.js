import styled from 'styled-components';

export const Titlea = styled.a`
	color: ${props => (props.css.color)? props.css.color: "#333"} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	&:hover{
	    color: ${props => (props.css.h_color)? props.css.h_color: '#2271b1'} !important;
	}
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	font-family: ${props => (props.css['font-family'])? props.css['font-family'].label+", "+props.css['font-family'].value : ""} !important;
`;

export const Titletag = styled.div`
	text-align: ${props => props.css['text-align']} !important;
`;

export const Excerpts = styled.div`
	color: ${props => (props.css.color)? props.css.color: '#333'} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	text-align: ${props => props.css['text-align']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
`;

export const Cat_style = styled.a`
	color: ${props => (!props?.css?.color)? ((props?.meta?.color)? props.meta.color:props.primary):props.css.color} !important;
	background-color: ${props => props.css['background-color']} !important;
	font-size: ${props => (props.css['font-size'] == "")? ((props.meta['font-size'] == "")? "15px": props.meta['font-size']): props.css['font-size']} !important;
	border-radius: ${props => props.css['border-radius']}px !important;
	padding: ${props => 
        ((props.css_pad.right != "") && (props.css_pad.left != ""))
        ?   (((props.css_pad.right != null) && (props.css_pad.left != null))?
            props.css_pad.top+" "+
            props.css_pad.right+" "+
            props.css_pad.bottom+" "+
            props.css_pad.left
                :
                    (((props.css['background-color'] == "") || (props.css['background-color'] == undefined))?
                        "0px": "0px 3px 0px 3px"
                    )
            )
            : 
            (
                (
                    (props.css['background-color'] == "") || (props.css['background-color'] == undefined)
                )? 
                    "0px"
                    : 
                    "0px 3px 0px 3px"
            )
        } !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: '0px'} !important;
	line-height: ${props => (props.meta['line-height'])?props.meta['line-height']: ""} !important;
	letter-spacing: ${props => ((!props.css['letter-spacing'])?((props.meta['letter-spacing'])? props.meta['letter-spacing']: "") : props.css['letter-spacing'])} !important;
	text-transform: ${props => ((!props.css['transform'])?((props.meta['transform'])? props.meta['transform']: "") : props.css['transform'])} !important;
	font-weight: ${props => (props.css['font-weight'] == '')? (props.meta['font-weight']? props.meta['font-weight'] : 400) : props.css['font-weight']} !important;
`;

export const Cat_style_non_default = styled.a`
${(props) =>{
    console.log(props)}}

	color: ${props => (!props?.css?.color)? ((props?.meta?.color)? props.meta.color:props.primary):props.css.color} !important;
	background-color: ${props => props.css['background-color']} !important;
	font-size: ${props => props.css['font-size']} !important;
	border-radius: ${props => props.css['border-radius']}px !important;
	padding: ${props =>
    ((props.css_pad.right != "") && (props.css_pad.left != ""))
        ?   (((props.css_pad.right != null) && (props.css_pad.left != null))?
                props.css_pad.top+" "+
                props.css_pad.right+" "+
                props.css_pad.bottom+" "+
                props.css_pad.left
                :
                (((props.css['background-color'] == "") || (props.css['background-color'] == undefined))?
                        ((props.cat_style.style == 'style1')? '0px': "0px 3px 0px 3px")
                        : "0px 3px 0px 3px"
                )
        )
        :
        (
            (
                (props.css['background-color'] == "") || (props.css['background-color'] == undefined)
            )?
                ((props.cat_style.style == 'style1')? '0px': "0px 3px 0px 3px")
                :
                "0px 3px 0px 3px"
        )
} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: '0px'} !important;
    font-weight: ${props => (props.css['font-weight'])?props.css['font-weight']: ""} !important;
    line-height: 22px !important;
	&::after{
		border-top-color: ${props => props.css['background-color']} !important;;
	}
`;

export const MetaStyle = styled.span`
	color: ${props => (props.css.color)? props.css.color: '#333'} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	
`;
export const MetaTagStyle = styled.a`
	color: ${props => (props.css.color)? props.css.color: ((props.primary != '')? props.primary: "")} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
`;

export const MetaStyle_align = styled.div`
	text-align: ${props => props.css['text-align']} !important;
`;

export const Button_style = styled.a`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	border-radius: ${props => props.css_btn['border-radius']} !important;
	background-color: ${props => props.css['background-color']} !important;
	border-color: ${props => (props.css_btn['border-color']) ? props.css_btn['border-color'] : ""} !important;
	border-style: ${props => (props.css_btn['border-style']) ? props.css_btn['border-style'] : ""} !important;
	border-width: ${props => (props.css_btn['border-width']) ? props.css_btn['border-width'] : ""} !important;
	&:hover{
		color: ${props => props.css.h_color} !important;
		background-color: ${props => props.css.h_bg_color} !important;
		border-color: ${props => (props.css_btn['h-border-color']) ? props.css_btn['h-border-color'] : ""} !important;
        border-style: ${props => (props.css_btn['h-border-style']) ? props.css_btn['h-border-style'] : ""} !important;
        border-width: ${props => (props.css_btn['h-border-width']) ? props.css_btn['h-border-width'] : ""} !important;
        border-radius: ${props => props.css_btn['h-border-radius']} !important;
	}
	font-size: ${props => (props.css['font-size'])? props.css['font-size']:""} !important;
	font-weight: ${props => (props.css['font-weight'])?props.css['font-weight']: ""} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: ''} !important;
`;

export const Btn_align = styled.div`
	text-align: ${props => props.css_btn['text-align']} !important;
`;

export const Head_title = styled.div`
    padding: ${props => (props.css_pad != undefined) ? (((props.css_pad.top == null) && (props.css_pad.right == null) && (props.css_pad.bottom == null) && (props.css_pad.left == null))?"5px 15px 5px 15px":props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left): '5px 15 5px 15px'} !important;
	margin: ${props => (props.css_mar != undefined) ? (((props.css_mar.top == null) && (props.css_mar.right == null) && (props.css_mar.bottom == null) && (props.css_mar.left == null))? "0px":props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left): '0px'} !important;
	background-color: ${props => props.css['background-color']} !important;
	background-color: ${props => ((props.css['background-color'] == "transparent")?((props.head_sty.style != 1)?"#1e73be":"transparent"): props.css['background-color'])} !important;
	
	:after{
	    background-color: ${props => ((props.head_sty.style == 2)? "": ((props.css.color)? props.css.color: ((props.primary)? props.primary: "#333")))} !important;
	    border-color: ${props => (props.css != undefined)? ((props.css['background-color'] == "transparent")?((props.head_sty.style != 1)?"#1e73be":"transparent"): props.css['background-color']): "#1e73be"} transparent !important;
	}

`;

export const Head_color = styled.div`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	font-weight: ${props => (props.css['font-weight'])?props.css['font-weight']: ""} !important;
	font-size: ${props => (props.css['font-size'])?props.css['font-size']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
`;

export const Head_border = styled.div`
	border-bottom: ${props => (props.css_head.style != '1')? props.css['border-width']+" solid "+((props.css['border-color'].length != 0)? props.css['border-color']: '#1e73be') : ""} !important;
`;
export const Head_border_style1 = styled.div`
	border-style: ${props => props.css['border-style'] } !important;
	border-width: ${props => props.css['border-width'] } !important;
	border-color: ${props => props.css['border-color'] } !important;

`;

export const Content_wrap = styled.div`
	background-color: ${props => ((props.css['background-color'] == "") || (props.css['background-color'] == undefined))? "#fff":props.css['background-color']} !important;
	border-radius: ${props => props.css.radius}px !important;
	border: ${props => (props?.layout?.value == "grid1") ?
    (
        (
            (props.css['border-width'] == "") ? 
                "1px"
                : 
                props.css['border-width']
        )+" solid "+
        (
            (
                (props.css['border-width'] == "") || (props.css['border-color'] == undefined)
            ) ? 
                "#d9d9d9"
                : 
                props.css['border-color']
        ) 
    )
    :
    (
        (
            (props.css['border-width'] == "") ?
                "0px"
                :
                props.css['border-width']
        )+" solid "+
        (
            (
                (props.css['border-width'] == "") || (props.css['border-color'] == undefined)
            ) ?
                "transparent"
                :
                props.css['border-color']
        )
    )
} !important;
	box-shadow: ${props => '0px 0px 5px 0px '+props.css['box-shadow-color']} !important;
	padding: ${props => 
    (props.css_pad != undefined) ?
        (((props.css_pad.top == null) && (props.css_pad.right == null) && (props.css_pad.bottom == null) && (props.css_pad.left == null))?
            ((props?.layout?.value == "grid1")?
                "0px"
                :
                "15px")
            : props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left
        )
        :
        ((props?.layout?.value == "grid1")? 
            "0px"
            : 
            "15px")
} !important;
`;

export const Content_padding = styled.div`
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
`;

export const ImgAnimation = styled.img`
	border-radius: ${props => (props.css['border-radius'] == 0)? ((props.layout == "list2")? "50%" : '0px') : props.css['border-radius']} !important;
	&:hover{
	    transform: scale(${props => props.css.animation})
	}
`;

export const MetaIcona = styled.div`
    color: ${props => (props.css.color)? props.css.color: props.primary} !important;
    padding-right: 4px !important;
    font-size: ${props => props.css['font-size']} !important;
    width: unset !important;
`
export const MetaIconspan = styled.div`
    color: ${props => (props.css.color)? props.css.color: '#333'} !important;
    padding-right: 4px !important;
    font-size: ${props => props.css['font-size']} !important;
    width: unset !important;
`

export const MetaCatIcon = styled.div`
    font-size: ${(props)=> (props.css['font-size'] == "")? ((props.meta['font-size'] == "")? "12px": props.meta['font-size']): props.css['font-size']} !important;
    color: ${props => 
    (props?.css?.['background-color'])? 
        props?.css?.['background-color']: 
        (
            (!props?.css?.color)? 
                ((props?.meta?.color)? 
                    props.meta.color:
                    (
                        (props?.primary)? 
                            props.primary: 
                            (
                                (
                                    (props.cat_type.position != "") && (props.cat_type.style != 'style1')
                                )?
                                "#1e73be": 
                                ""
                            )
                    )
                )
                :
                props.css.color
        )} !important;
        
    width: unset !important;
`
export const CatIcon = styled.div`
    color: ${props => (props.css.color)? props.css.color: props.primary}
`
export const PaginationStyle = styled.button`
    color: ${props => ((props.className.search("active") != -1)? props.css['a-color']:((props.css.color)? props.css.color: "#fff"))} !important;
    background-color: ${props => ((props.className.search("active") != -1)? props.css['a-bg-color']:((props.css['bg-color'])? props.css['bg-color']: "#4c6fff"))} !important;
   
    border-color: ${props => ((props.className.search("active") != -1)? props.css['a-border-color']:((props.css['border-color'])? props.css['border-color']: ""))} !important;
    border-style: ${props => ((props.className.search("active") != -1)? props.css['a-border-style']:((props.css['border-style'])? props.css['border-style']: ""))} !important;
    border-width: ${props => ((props.className.search("active") != -1)? props.css['a-border-width']:((props.css['border-width'])? props.css['border-width']: ""))} !important;
    border-radius: ${props => ((props.className.search("active") != -1)? props.css['a-border-radius']:((props.css['border-radius'])? props.css['border-radius']: ""))} !important;
    padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: ''} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: ''} !important;
    line-height: ${props => ((props.className.search("active") != -1)? props.css['a-line-height']:((props.css['line-height'])?props.css['line-height']: ""))} !important;
	font-weight: ${props => ((props.className.search("active") != -1)? props.css['a-font-weight']:((props.css['font-weight'])?props.css['font-weight']: ""))} !important;
	font-size: ${props => ((props.className.search("active") != -1)? props.css['a-font-size']:((props.css['font-size'])?props.css['font-size']: ""))} !important;
	letter-spacing: ${props => ((props.className.search("active") != -1)? props.css['a-letter-spacing']:((props.css['letter-spacing'])?props.css['letter-spacing']: ""))} !important;
	text-transform: ${props => ((props.className.search("active") != -1)? props.css['a-transform']:((props.css['transform'])?props.css['transform']: ""))} !important;
	&:hover{
	    color: ${props => (props.css['h-color'])? props.css['h-color']: "#fff"} !important;
        background-color: ${props => (props.css['h-bg-color'])? props.css['h-bg-color']: "#1c2f7a"} !important;
        border-color: ${props => (props.css['h-border-color'])? props.css['h-border-color']: ""} !important;
        border-style: ${props => (props.css['h-border-style'])? props.css['h-border-style']: ""} !important;
        border-width: ${props => (props.css['h-border-width'])? props.css['h-border-width']: ""} !important;
        border-radius: ${props => (props.css['h-border-radius'])? props.css['h-border-radius']: ""} !important;
        line-height: ${props => (props.css['h-line-height'])?props.css['h-line-height']: ""} !important;
        font-weight: ${props => (props.css['h-font-weight'])?props.css['h-font-weight']: ""} !important;
        font-size: ${props => (props.css['h-font-size'])?props.css['h-font-size']: ""} !important;
        letter-spacing: ${props => (props.css['h-letter-spacing'])?props.css['h-letter-spacing']: ""} !important;
        text-transform: ${props => (props.css['h-transform'])?props.css['h-transform']: ""} !important;
	}
	
`

export const Pageprivnext = styled.button`
    color: ${props => (props.css.color)? props.css.color: "#fff"} !important;
    background-color: ${props => (props.css['bg-color'])? props.css['bg-color']: "#4c6fff"} !important;
    border-color: ${props => (props.css['border-color'])? props.css['border-color']: ""} !important;
    border-style: ${props => (props.css['border-style'])? props.css['border-style']: ""} !important;
    border-width: ${props => (props.css['border-width'])? props.css['border-width']: ""} !important;
    border-radius: ${props => (props.css['border-radius'])? props.css['border-radius']: ""} !important;
    padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: ''} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: ''} !important;
    line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	font-weight: ${props => (props.css['font-weight'])?props.css['font-weight']: ""} !important;
	font-size: ${props => (props.css['font-size'])?props.css['font-size']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	&:hover{
	    color: ${props => (props.css['h-color'])? props.css['h-color']: "#fff"} !important;
        background-color: ${props => (props.css['h-bg-color'])? props.css['h-bg-color']: "#1c2f7a"} !important;
        border-color: ${props => (props.css['h-border-color'])? props.css['h-border-color']: ""} !important;
        border-style: ${props => (props.css['h-border-style'])? props.css['h-border-style']: ""} !important;
        border-width: ${props => (props.css['h-border-width'])? props.css['h-border-width']: ""} !important;
        border-radius: ${props => (props.css['h-border-radius'])? props.css['h-border-radius']: ""} !important;
        line-height: ${props => (props.css['h-line-height'])?props.css['h-line-height']: ""} !important;
        font-weight: ${props => (props.css['h-font-weight'])?props.css['h-font-weight']: ""} !important;
        font-size: ${props => (props.css['h-font-size'])?props.css['h-font-size']: ""} !important;
        letter-spacing: ${props => (props.css['h-letter-spacing'])?props.css['h-letter-spacing']: ""} !important;
        text-transform: ${props => (props.css['h-transform'])?props.css['h-transform']: ""} !important;
	}
`


