import styled, {css} from 'styled-components';

export const Titlea = styled.a`
	color: inherit !important;
	font-size: inherit !important;
	font-weight: inherit !important;
	&:hover{
	    color: inherit !important;
	}
	
`;


export const Titletag = styled.div`
	text-align: ${props => props.css['text-align']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	&:hover{
	    color: ${props => (props.css.h_color)? props.css.h_color: '#2271b1'} !important;
	}
	
	${props => {
        if (props.lay_sty == "grid3") {
            // For grid 3
            if((props.css.color == "") || (props.css.color == undefined)){
                return css`
                    color: #fff !important;
                `
            }else{
                return css`
                    color: ${props.css.color} !important;
                `
            }
        }else{
            if((props.css.color == "") || (props.css.color == undefined)){
                return css`
                    color: #333 !important;
                `
            }else{
                return css`
                    color: ${props.css.color} !important;
                `
            }
        }
    }
    }
`;



export const Excerpts = styled.div`
    ${props =>{
        if(props.lay_sty === "grid3"){
            if((props.css.color == "") || (props.css.color == undefined)){
                return css`
                    color: #fff !important;
                `
            }else{
                return css`
                    color: ${props.css.color} !important;
                `
            }
        }else{
            if((props.css.color == "") || (props.css.color == undefined)){
                return css`
                    color: #333 !important;
                `
            }else{
                return css`
                    color: ${props.css.color} !important;
                `
            }
        }
    }}
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	text-align: ${props => props.css['text-align']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
`;

export const Cat_style = styled.a`
    ${props =>{
        // For Grid 3
        if(props.lay_sty == "grid3"){
            if((props.css.color == "") || (props.css.color == undefined)){
                if((props.meta.color == "") || (props.meta.color == undefined)){
                    if((props.primary == "") || (props.primary == undefined)){
                        return css`
                        color: #fff !important;
                    `
                    }else{
                        return css`
                        color: ${props.primary} !important;
                    `
                    }
                }else{
                    return css`
                    color: ${props.meta.color} !important;
                `
                }
            }else{
                return css`
                color: ${props.css.color} !important;
            `
            }
        }else{
            if((props.css.color == "") || (props.css.color == undefined)){
                if((props.meta.color == "") || (props.meta.color == undefined)){
                    if((props.primary == "") || (props.primary == undefined)){
                        return css`
                        color: "" !important;
                    `
                    }else{
                        return css`
                        color: ${props.primary} !important;
                    `
                    }
                }else{
                    return css`
                    color: ${props.meta.color} !important;
                `
                }
            }else{
                return css`
                color: ${props.css.color} !important;
            `
            }
        }
        
    }}
	background-color: ${props => props.css['background-color']} !important;
	font-size: ${props => (props.css['font-size'] == "")? ((props.meta['font-size'] == "")? "15px": props.meta['font-size']): props.css['font-size']} !important;
	line-height: ${props => (props.css['line-height'] == "")? ((props.meta['line-height'] == "")? "": props.meta['line-height']): props.css['line-height']} !important;
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
	letter-spacing: ${props => ((!props.css['letter-spacing'])?((props.meta['letter-spacing'])? props.meta['letter-spacing']: "") : props.css['letter-spacing'])} !important;
	text-transform: ${props => ((!props.css['transform'])?((props.meta['transform'])? props.meta['transform']: "") : props.css['transform'])} !important;
	font-weight: ${props => (props.css['font-weight'] == '')? (props.meta['font-weight']? props.meta['font-weight'] : 400) : props.css['font-weight']} !important;
    &:hover{
         color: ${props => 
        (props.css['h-color'] != "")?
            (props.css['h-color'] != undefined?
                props.css['h-color']: ((props.meta['h-color'] != "")?
                    (props.meta['h-color'] != undefined?
                        props.meta['h-color']: "#2973be"):
                    "#2973be"))
            :
            (props.meta['h-color'] != "")? 
                (props.meta['h-color'] != undefined? 
                    props.meta['h-color']: "#2973be"):
                "#2973be" 
        } !important;
    }
`;

export const Cat_style_non_default = styled.a`
    ${props =>{
        // For Grid 3
        if(props.lay_sty == "grid3"){
            if((props.css.color == "") || (props.css.color == undefined)){
                if((props.meta.color == "") || (props.meta.color == undefined)){
                    if((props.primary == "") || (props.primary == undefined)){
                        if((props.cat_style.position != "") && (props.cat_style.style != 'style1')){
                            return css`
                                    color: #fff !important;
                                `
                        }else{
                            if((props.cat_style.position != "") && (props.cat_style.style === 'style1')){
                                return css`
                                    color: #1e73be !important;
                                `
                            }
                            
                        }
                    }else{
                        return css`
                            color: ${props.primary} !important;
                        `
                    }
                }else{
                    return css`
                        color: ${props.meta.color} !important;
                    `
                }
            }else{
                return css`
                    color: ${props.css.color} !important;
                `
            }
        }else{
            if((props.css.color == "") || (props.css.color == undefined)){
                if((props.meta.color == "") || (props.meta.color == undefined)){
                    if((props.primary == "") || (props.primary == undefined)){
                        return css`
                            color: "" !important;
                        `
                    }else{
                        return css`
                            color: ${props.primary} !important;
                        `
                    }
                }else{
                    return css`
                        color: ${props.meta.color} !important;
                    `
                }
            }else{
                return css`
                    color: ${props.css.color} !important;
                `
            }
        }
    
    }}
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
    line-height: ${props => (props.css['line-height'] == "")? ((props.meta['line-height'] == "")? "": props.meta['line-height']): props.css['line-height']} !important;
	&::after{
		border-top-color: ${props => props.css['background-color']} !important;;
	}
	&:hover{
         color: ${props =>
    (props.css['h-color'] != "")?
        (props.css['h-color'] != undefined?
            props.css['h-color']: ((props.meta['h-color'] != "")?
                (props.meta['h-color'] != undefined?
                    props.meta['h-color']: "#2973be"):
                "#2973be"))
        :
        (props.meta['h-color'] != "")?
            (props.meta['h-color'] != undefined?
                props.meta['h-color']: "#2973be"):
            "#2973be"
} !important;
    }
`;

export const MetaStyle = styled.span`
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	
	${props =>{
        if (props.lay_sty == "grid3") {
            // For grid 3
            if((props.css.color == "") || (props.css.color == undefined)){
                return css`
                        color: #fff !important;
                    `
            }else{
                return css`
                        color: ${props.css.color} !important;
                    `
            }
        }else{
            if((props.css.color == "") || (props.css.color == undefined)){
                return css`
                        color: #333 !important;
                    `
            }else{
                return css`
                        color: ${props.css.color} !important;
                    `
            }
        }
    }}
	
`;
export const MetaTagStyle = styled.a`
	color: ${props => (props.css.color)? props.css.color: ((props.primary != '')? props.primary: "")} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	&:hover{
	    color: ${props => (props.css['h-color'] != "")? ((props.css['h-color'] != undefined)? props.css['h-color']: "#2973be"): "#2973be"} !important;
	}
	${props =>{
        if (props.lay_sty == "grid3") {
            // For grid 3
            if((props.css.color == "") || (props.css.color == undefined)){
                if((props.primary == "") || (props.primary == undefined)){
                    return  css`
                        color: #fff !important;
                    `
                }else{
                    return css`
                        color: ${props.primary} !important;
                    `
                }
            }else{
                return css`
                            color: ${props.css.color} !important;
                        `
            }
        }else{
            if((props.css.color == "") || (props.css.color == undefined)){
                if((props.primary == "") || (props.primary == undefined)){
                    return  css`
                        color: #333 !important;
                    `
                }else{
                    return css`
                        color: ${props.primary} !important;
                    `
                }
            }else{
                return css`
                            color: ${props.css.color} !important;
                        `
            }
        }
    }}
`;

export const MetaStyle_align = styled.div`
	text-align: ${props => props.css['text-align']} !important;
`;

export const Button_style = styled.a`
    ${props =>{
        if(props.lay_sty.value === "grid3"){
            if((props.css.color === "") || (props.css.color === undefined)){
                if((props.css_btn['border-color'] === "") || (props.css_btn['border-color'] === undefined)){
                    return css`
                        color: #fff !important;
                        border-color: #fff !important;
                    `
                }else{
                    return css`
                        color: #fff !important;
                        border-color: ${props.css_btn['border-color']} !important;
                    `
                }
            }else{
                if((props.css_btn['border-color'] === "") || (props.css_btn['border-color'] === undefined)){
                    return css`
                        color: ${props.css.color} !important;
                        border-color: #fff !important;
                    `
                }else{
                    return css`
                        color: ${props.css.color} !important;
                        border-color: ${props.css_btn['border-color']} !important;
                    `
                }
            }
        }
    }}
	border-radius: ${props => props.css_btn['border-radius']} !important;
	background-color: ${props => props.css['background-color']} !important;
	border-style: ${props => (props.css_btn['border-style'] != "") ? props.css_btn['border-style'] : ""} !important;
	border-width: ${props => (props.css_btn['border-width'] != "") ? props.css_btn['border-width'] : ""} !important;
	&:hover{
	    ${props =>{
            if(props.lay_sty.value === "grid3"){
                if((props.css.color === "") || (props.css.color === undefined)){
                    if((props.css_btn['border-color'] === "") || (props.css_btn['border-color'] === undefined)){
                        if((props.css.h_bg_color === "") || (props.css.h_bg_color === undefined)){
                            return css`
                                color: #4c6fff !important;
                                border-color: #fff !important;
                                background-color: #fff !important;
                            `
                        }else{
                            return css`
                                color: #4c6fff !important;
                                border-color: #fff !important;
                                background-color: ${props.css.h_bg_color} !important;
                            `
                        }
                        
                    }else{
                        if((props.css.h_bg_color === "") || (props.css.h_bg_color === undefined)){
                            return css`
                                color: #4c6fff !important;
                                border-color: ${props.css_btn['border-color']} !important;
                                background-color: #fff !important;
                            `
                        }else{
                            return css`
                                color: #4c6fff !important;
                                border-color: ${props.css_btn['border-color']} !important;
                                background-color: ${props.css.h_bg_color} !important;
                            `
                        }
                    }
                }else{
                    if((props.css_btn['border-color'] === "") || (props.css_btn['border-color'] === undefined)){
                        if((props.css.h_bg_color === "") || (props.css.h_bg_color === undefined)){
                            return css`
                                color: ${props.css.color} !important;
                                border-color: #fff !important;
                                background-color: #fff !important;
                            `
                        }else{
                            return css`
                                color: ${props.css.color} !important;
                                border-color: #fff !important;
                                background-color: ${props.css.h_bg_color} !important;
                            `
                        }
                    }else{
                        if((props.css.h_bg_color === "") || (props.css.h_bg_color === undefined)){
                            return css`
                                color: ${props.css.color} !important;
                                border-color: ${props.css_btn['border-color']} !important;
                                background-color: #fff !important;
                            `
                        }else{
                            return css`
                                color: ${props.css.color} !important;
                                border-color: ${props.css_btn['border-color']} !important;
                                background-color: ${props.css.h_bg_color} !important;
                            `
                        }
                    }
                }
            }
        }}
		color: ${props => (props.css.h_color == "")? '#2271b1': (props.css.h_color != undefined? props.css.h_color: "#2271b1")} !important;
		background-color: ${props => props.css.h_bg_color} !important;
		border-color: ${props => (props.css_btn['h-border-color'] != "") ? (props.css_btn['h-border-color'] != undefined? props.css_btn['h-border-color']: "#2271b1") : "#2271b1"} !important;
        border-style: ${props => (props.css_btn['h-border-style']) ? props.css_btn['h-border-style'] : ""} !important;
        border-width: ${props => (props.css_btn['h-border-width']) ? props.css_btn['h-border-width'] : ""} !important;
        border-radius: ${props => props.css_btn['h-border-radius']} !important;
	}
	font-size: ${props => (props.css['font-size'])? props.css['font-size']:""} !important;
	font-weight: ${props => (props.css['font-weight'])?props.css['font-weight']: ""} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
	padding: ${props =>
    (props.css_pad != undefined) ?
        ((props.css_pad.top != "") && (props.css_pad.right != "") && (props.css_pad.bottom != "") && (props.css_pad.left != ""))?
            ((props.css_pad.top != null) && (props.css_pad.right != null) && (props.css_pad.bottom != null) && (props.css_pad.left != null))?
                props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left
                :
                ""
            :
            ""
        :
        ''
    } !important;
	margin: ${props => 
        (props.css_mar != undefined) ?
            ((props.css_mar.top != "") && (props.css_mar.right != "") && (props.css_mar.bottom != "") && (props.css_mar.left != ""))?
                ((props.css_mar.top != null) && (props.css_mar.right != null) && (props.css_mar.bottom != null) && (props.css_mar.left != null))?
                    props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left
                    :
                    "0px"
                :
                "0px"
            : 
            '0px'
    } !important;
`;

export const Btn_align = styled.div`
	text-align: ${props => props.css_btn['text-align']} !important;
`;

export const Head_title = styled.div`
    color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	line-height: ${props => (props.css['line-height'])?props.css['line-height']: ""} !important;
	font-weight: ${props => (props.css['font-weight'])?props.css['font-weight']: ""} !important;
	font-size: ${props => (props.css['font-size'])?props.css['font-size']: ""} !important;
	letter-spacing: ${props => (props.css['letter-spacing'])?props.css['letter-spacing']: ""} !important;
	text-transform: ${props => (props.css['transform'])?props.css['transform']: ""} !important;
    padding: ${props => (
        props.css_pad != undefined) ? 
            (
                (
                    (props.css_pad.top == null) && (props.css_pad.right == null) && (props.css_pad.bottom == null) && (props.css_pad.left == null)
                )?
                    (((props.css['background-color'] == "") || (props.css['background-color'] == undefined))?
                        ((props.head_sty.style =='1')? "1px": "5px 15 5px 15px")
                        : 
                        "5px 15px 5px 15px")
                    :
                    (
                        (props.css_pad.top == "") && (props.css_pad.right == "") && (props.css_pad.bottom == "") && (props.css_pad.left == "")
                    )?(
                            (((props.css['background-color'] == "") || (props.css['background-color'] == undefined) || (props.css['background-color'] == 'transparent'))? ((props.head_sty.style =='1')? "1px": "5px 15 5px 15px"): "5px 15px 5px 15px")
                        )
                        :
                        props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left)
                :
                ((props.css['background-color'] == "") || (props.css['background-color'] == undefined)? ((props.head_sty.style =='1')? "2px": "5px 15 5px 15px"): "5px 15px 5px 15px")
            } !important;
	margin: ${props => (props.css_mar != undefined) ? (((props.css_mar.top == null) && (props.css_mar.right == null) && (props.css_mar.bottom == null) && (props.css_mar.left == null))? "0px":props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left): '0px'} !important;
	background-color: ${props => props.css['background-color']} !important;
	background-color: ${props => ((props.css['background-color'] == "transparent")?((props.head_sty.style != 1)?"#1e73be":"transparent"): props.css['background-color'])} !important;
	
	:after{
	    background-color: ${props => ((props.head_sty.style == 2)? "": ((props.css.color)? props.css.color: ((props.primary)? props.primary: "#333")))} !important;
	    border-color: ${props => (props.css['background-color'] != undefined)? ((props.css['background-color'] == "transparent")?((props.head_sty.style != 1)?"#1e73be":"transparent"): props.css['background-color']): "#1e73be"} transparent !important;
	}

`;

export const Dot_style = styled.span`
    background-color: ${props => ((props.css['dot-color'] == "") || (props.css['dot-color'] == undefined))? "":props.css['dot-color']} !important;
    margin: ${props => 
    (props.css_mar != undefined) ? 
        (
            (
                (props.css_mar.top != null) && (props.css_mar.right != null) && (props.css_mar.bottom != null) && (props.css_mar.left != null)
            )?
                (
                    ((props.css_mar.top == "") && (props.css_mar.right == "") && (props.css_mar.bottom == "") && (props.css_mar.left == ""))
                        ? "0px 15px 0px 15px": props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left)
                : "0px 15px 0px 15px"):
        '0px 15px 0px 15px'
} !important;
`;

export const Head_color = styled.div`
	color: inherit !important;
	line-height: inherit !important;
	font-weight: inherit !important;
	font-size: inherit !important;
	letter-spacing: inherit} !important;
	text-transform: inherit !important;
`;

export const Head_border = styled.div`
	border-bottom: ${props => (props.css_head.style != '1')? props.css['border-width']+" solid "+((props.css['border-color'] != undefined)? props.css['border-color']: '#1e73be') : ""} !important;
`;
export const Head_border_style1 = styled.div`
	border-style: ${props => props.css['border-style'] } !important;
	border-width: ${props => props.css['border-width'] } !important;
	border-color: ${props => props.css['border-color'] } !important;

`;
// Grid 1
export const Content_wrap = styled.div`
	background-color: ${props => ((props.css['background-color'] == "") || (props.css['background-color'] == undefined))? "#fff":props.css['background-color']} !important;
	border-radius: ${props => props.css.radius}px !important;
	border: ${props => ((props?.layout?.value == "grid1") || (props?.layout?.value == "grid2")) ?
        (
            (
                (props.css['border-width'] == "") ? 
                    "1px"
                    : 
                    props.css['border-width']
            )+" solid "+
            (
                (
                    (props.css['border-color'] == "") || (props.css['border-color'] == undefined)
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
                    "1px"
                    :
                    props.css['border-width']
            )+" solid "+
            (
                (
                    (props.css['border-color'] == "") || (props.css['border-color'] == undefined)
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
            (((props?.layout?.value == "grid1") || (props?.layout?.value == "grid2") || (props?.layout?.value == "grid3"))?
                "0px"
                :
                "15px")
            : props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left
        )
        :
        (((props?.layout?.value == "grid1") || (props?.layout?.value == "grid2") || (props?.layout?.value == "grid3"))? 
            "0px"
            : 
            "15px")
} !important;
`;

// Grid 2
export const Content_wrap_grid_2 = styled.div`
    &:hover .rt-detail{
        ${props =>{
            // Background color
            if ((props.hover['background'] === "") || (props.hover['background'] === undefined)){
                return css`
                    background-color: #0367bf !important;
                `
            }else{
                return css`
                    background-color: ${props.hover['background']} !important;
                `
            }
        }}
    }
    
    &:hover .rt-detail .tpg-post-title{
        ${props =>{
            // Title color
            if ((props.hover['title'] === "") || (props.hover['title'] === undefined)){
                return css`
                    color: #fff !important;
                `
            }else{
                return css`
                    color: ${props.hover['title']} !important;
                `
            }
        }}
    }
    
    &:hover .rt-detail .tpg-excerpt{
        ${props =>{
            // Excerpt color
            if ((props.hover['excerpt'] === "") || (props.hover['excerpt'] === undefined)){
                return css`
                    color: #fff !important;
                `
            }else{
                return css`
                    color: ${props.hover['excerpt']} !important;
                `
            }
        }}
    }
    
    &:hover .rt-detail .post-meta-user .author a, 
    &:hover .rt-detail .post-meta-user .author a svg,
    &:hover .rt-detail .post-meta-user .date span, 
    &:hover .rt-detail .post-meta-user .date svg, 
    &:hover .rt-detail .post-meta-user .comment-count a,
    &:hover .rt-detail .post-meta-user .comment-count a svg{
        ${props =>{
            // Meta color
            if ((props.hover['meta'] === "") || (props.hover['meta'] === undefined)){
                return css`
                    color: #fff !important;
                `
            }else{
                return css`
                    color: ${props.hover['meta']} !important;
                `
            }
        }}
    }
    
    &:hover .rt-detail .categories-links a{
        ${props =>{
            // Category Name
            if(props.category.position == "") { // if position default
                // Category color
                if ((props.hover['category'] === "") || (props.hover['category'] === undefined)) {
                    if ((props.hover['meta'] === "") || (props.hover['meta'] === undefined)) {
                        return css`
                    color: #fff !important;
                `
                    } else {
                        return css`
                    color: ${props.hover['meta']} !important;
                `
                    }
                } else {
                    return css`
                    color: ${props.hover['category']} !important;
                `
                }
            }else{
                if((props.category.style != "style1") && (props.category.position == "above-title")){ // Position for above title  and style non style 1
                    // Category color
                    if ((props.hover['category'] === "") || (props.hover['category'] === undefined)) {
                        if ((props.hover['meta'] === "") || (props.hover['meta'] === undefined)) {
                            if ((props.hover['category_bg'] === "") || (props.hover['category_bg'] === undefined)){
                                return css`
                                    color: #0367bf !important;
                                    background-color: #fff !important;
                                `
                            }else{
                                return css`
                                    color: #0367bf !important;
                                    background-color: ${props.hover['category_bg']} !important;
                                `
                            }
                            
                        } else {
                            if ((props.hover['category_bg'] === "") || (props.hover['category_bg'] === undefined)){
                                return css`
                                    color: ${props.hover['meta']} !important;
                                    background-color: #fff !important;
                                `
                            }else{
                                return css`
                                    color: ${props.hover['meta']} !important;
                                    background-color: ${props.hover['category_bg']} !important;
                                `
                            }
                        }
                    } else {
                        if ((props.hover['category_bg'] === "") || (props.hover['category_bg'] === undefined)){
                            return css`
                                    color: ${props.hover['category']} !important;
                                    background-color: #fff !important;
                                `
                        }else{
                            return css`
                                    color: ${props.hover['category']} !important;
                                    background-color: ${props.hover['category_bg']} !important;
                                `
                        }
                        
                    }
                    
                }else if((props.category.style == "style1") && (props.category.position == "above-title")){ // Position above title and style1
                    // Category color
                    if ((props.hover['category'] === "") || (props.hover['category'] === undefined)) {
                        if ((props.hover['meta'] === "") || (props.hover['meta'] === undefined)) {
                            return css`
                                color: #fff !important;
                            `
                        } else {
                            return css`
                                color: ${props.hover['meta']} !important;
                            `
                        }
                    } else {
                        return css`
                            color: ${props.hover['category']} !important;
                        `
                    }
                }
            }
        }}
    }
    
    &:hover .rt-detail .categories-links a svg{
        ${props =>{
            // Category icon
            if(props.category.position == "") { // if position default
                // Category color
                if ((props.hover['category'] === "") || (props.hover['category'] === undefined)) {
                    if ((props.hover['meta'] === "") || (props.hover['meta'] === undefined)) {
                        return css`
                            color: #fff !important;
                        `
                    } else {
                        return css`
                            color: ${props.hover['meta']} !important;
                        `
                    }
                } else {
                    return css`
                            color: ${props.hover['category']} !important;
                        `
                }
            }else{
                if((props.category.style != "style1") && (props.category.position == "above-title")){ // Position for above title  and style non style 1
                    // Category color
                    if ((props.hover['category_bg'] === "") || (props.hover['category_bg'] === undefined)){
                        return css`
                            color: #fff !important;
                        `
                    }else{
                        return css`
                            color: ${props.hover['category_bg']} !important;
                        `
                    }
        
                }else if((props.category.style == "style1") && (props.category.position == "above-title")){ // Position above title and style1
                    // Category color
                    if ((props.hover['category'] === "") || (props.hover['category'] === undefined)) {
                        if ((props.hover['meta'] === "") || (props.hover['meta'] === undefined)) {
                            return css`
                                        color: #fff !important;
                                    `
                        } else {
                            return css`
                                        color: ${props.hover['meta']} !important;
                                    `
                        }
                    } else {
                        return css`
                                    color: ${props.hover['category']} !important;
                                `
                    }
                }
            }
        }}
    }
    
    &:hover .rt-detail .read-more a.see_more_button:hover{
        ${props =>{
            // Button color
            if ((props.hover['button_h'] === "") || (props.hover['button_h'] === undefined)){
                if((props.hover['button_bg_h'] === "") || (props.hover['button_bg_h'] === undefined)){
                    if((props.hover['button_border_h'] === "") || (props.hover['button_border_h'] === undefined)){
                        return css`
                            color: #0367bf !important;
                            background-color: #fff !important;
                            border-color: #fff !important;
                        `
                    }else{
                        return css`
                            color: #0367bf !important;
                            background-color: #fff !important;
                            border-color: ${props.hover['button_border_h']} !important;
                        ` 
                    }
                    
                }else{
                    if((props.hover['button_border_h'] === "") || (props.hover['button_border_h'] === undefined)){
                        return css`
                             color: #fff !important;
                            background-color: ${props.hover['button_bg_h']} !important;
                            border-color: #fff !important;
                        `
                    }else{
                        return css`
                            color: #fff !important;
                            background-color: ${props.hover['button_bg_h']} !important;
                            border-color: ${props.hover['button_border_h']} !important;
                        `
                    }
                }
                
            }else{
                if((props.hover['button_bg_h'] === "") || (props.hover['button_bg_h'] === undefined)){
                    if((props.hover['button_border_h'] === "") || (props.hover['button_border_h'] === undefined)){
                        return css`
                            color: ${props.hover['button_h']} !important;
                            background-color: #fff !important;
                            border-color: #fff !important;
                        `
                    }else{
                        return css`
                            color: ${props.hover['button_h']} !important;
                            background-color: #fff !important;
                            border-color: ${props.hover['button_border_h']} !important;
                        `
                    }
                }else{
                    if((props.hover['button_border_h'] === "") || (props.hover['button_border_h'] === undefined)){
                        return css`
                            color: ${props.hover['button_h']} !important;
                            background-color: ${props.hover['button_bg_h']} !important;
                            border-color: #fff !important;
                        `
                    }else{
                        return css`
                            color: ${props.hover['button_h']} !important;
                            background-color: ${props.hover['button_bg_h']} !important;
                            border-color: ${props.hover['button_border_h']} !important;
                        `
                    }
                }
            }
        }}
    }
    
    &:hover .rt-detail .read-more a.see_more_button{
        ${props =>{
            // Button color
            if ((props.hover['button'] === "") || (props.hover['button'] === undefined)){
                if((props.hover['button_bg'] === "") || (props.hover['button_bg'] === undefined)){
                    if((props.hover['button_border'] === "") || (props.hover['button_border'] === undefined)){
                        return css`
                                    color: #fff !important;
                                    background-color: transparent !important;
                                    border-color: #fff !important;
                                `
                    }else{
                        return css`
                                    color: #fff !important;
                                    background-color: transparent !important;
                                    border-color: ${props.hover['button_border']} !important;
                                `
                    }
        
                }else{
                    if((props.hover['button_border'] === "") || (props.hover['button_border'] === undefined)){
                        return css`
                                     color: #fff !important;
                                    background-color: ${props.hover['button_bg']} !important;
                                    border-color: #fff !important;
                                `
                    }else{
                        return css`
                                    color: #fff !important;
                                    background-color: ${props.hover['button_bg']} !important;
                                    border-color: ${props.hover['button_border']} !important;
                                `
                    }
                }
        
            }else{
                if((props.hover['button_bg'] === "") || (props.hover['button_bg'] === undefined)){
                    if((props.hover['button_border'] === "") || (props.hover['button_border'] === undefined)){
                        return css`
                                    color: ${props.hover['button']} !important;
                                    background-color: transparent !important;
                                    border-color: #fff !important;
                                `
                    }else{
                        return css`
                                    color: ${props.hover['button']} !important;
                                    background-color: transparent !important;
                                    border-color: ${props.hover['button_border']} !important;
                                `
                    }
                }else{
                    if((props.hover['button_border'] === "") || (props.hover['button_border'] === undefined)){
                        return css`
                                    color: ${props.hover['button']} !important;
                                    background-color: ${props.hover['button_bg']} !important;
                                    border-color: #fff !important;
                                `
                    }else{
                        return css`
                                    color: ${props.hover['button']} !important;
                                    background-color: ${props.hover['button_bg']} !important;
                                    border-color: ${props.hover['button_border']} !important;
                                `
                    }
                }
            }
        }}
    }
    
	background-color: ${props => ((props.css['background-color'] == "") || (props.css['background-color'] == undefined))? "#fff":props.css['background-color']} !important;
	border-radius: ${props => props.css.radius}px !important;
	border: ${props => ((props?.layout?.value == "grid1") || (props?.layout?.value == "grid2")) ?
    (
        (
            (props.css['border-width'] == "") ?
                "1px"
                :
                props.css['border-width']
        )+" solid "+
        (
            (
                (props.css['border-color'] == "") || (props.css['border-color'] == undefined)
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
                "1px"
                :
                props.css['border-width']
        )+" solid "+
        (
            (
                (props.css['border-color'] == "") || (props.css['border-color'] == undefined)
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
                (((props?.layout?.value == "grid1") || (props?.layout?.value == "grid2"))?
                    "0px"
                    :
                    "15px")
                : props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left
        )
        :
        (((props?.layout?.value == "grid1") || (props?.layout?.value == "grid2"))?
            "0px"
            :
            "15px")
} !important;
`;

// Grid 1
export const Content_padding_grid = styled.div`
    background-color: ${props => ((props.css['background-color'] == "") || (props.css['background-color'] == undefined))? "#fff":props.css['background-color']} !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
`;

// Grid 2
export const Content_padding_grid_2 = styled.div`
   
    background-color: ${props => ((props.css['background-color'] == "") || (props.css['background-color'] == undefined))? "#fff":props.css['background-color']} !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
    
`;

export const Content_padding = styled.div`
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
`;

export const ImgAnimation = styled.img`
	border-radius: ${props => (props.css['border-radius'] == 0)? ((props.layout == "list2")? "50%" : '0px') : props.css['border-radius']} !important;
`;

export const MetaIcona = styled.div`
    ${props =>{
        if(props.icon_props['font-size'] == ""){
            return css`
                font-size: ${props.css['font-size']} !important;
            `
        }else{
            return css`
                font-size: ${props.icon_props['font-size']} !important;
            `
        }
    }}
    padding-right: 4px !important;
    
    width: unset !important;
    &:hover{
	    color: ${props => (props.css['h-color'] != "")? ((props.css['h-color'] != undefined)? props.css['h-color']: "#2973be"): "#2973be"} !important;
	}
	
	${props =>{
        if (props.lay_sty == "grid3") {
            // For grid 3
            if((props.icon_props.color == "") || (props.icon_props.color == undefined)) {
                if ((props.css.color == "") || (props.css.color == undefined)) {
                    if ((props.primary == "") || (props.primary == undefined)) {
                        return css`
                                color: #fff !important;
                            `
                    } else {
                        return css`
                                color: ${props.primary} !important;
                            `
                    }
                } else {
                    return css`
                        color: ${props.css.color} !important;
                    `
                }
            }else{
                return css`
                    color: ${props.icon_props.color} !important;
                `
            }
        }else{
            if((props.icon_props.color == "") || (props.icon_props.color == undefined)) {
                if ((props.css.color == "") || (props.css.color == undefined)) {
                    if ((props.primary == "") || (props.primary == undefined)) {
                        return css`
                                color: #333 !important;
                            `
                    } else {
                        return css`
                                color: ${props.primary} !important;
                            `
                    }
                } else {
                    return css`
                                    color: ${props.css.color} !important;
                                `
                }
            }else{
                return css`
                    color: ${props.icon_props.color} !important;
                `
            }
        }
    }}
`
export const MetaIconspan = styled.div`

    padding-right: 4px !important;
    ${props =>{
        if(props.icon_props['font-size'] == ""){
            return css`
                    font-size: ${props.css['font-size']} !important;
                `
        }else{
            return css`
                    font-size: ${props.icon_props['font-size']} !important;
                `
        }
    }}
    width: unset !important;
    ${props =>{
        if (props.lay_sty == "grid3") {
            // For grid 3
            if((props.icon_props.color == "") || (props.icon_props.color == undefined)) {
                if ((props.css.color == "") || (props.css.color == undefined)) {
                    return css`
                                color: #fff !important;
                            `
                } else {
                    return css`
                        color: ${props.css.color} !important;
                    `
                }
            }else{
                return css`
                    color: ${props.icon_props.color} !important;
                `
            }
        }else{
            if((props.icon_props.color == "") || (props.icon_props.color == undefined)) {
                if ((props.css.color == "") || (props.css.color == undefined)) {
                    return css`
                                color: #333 !important;
                            `
                } else {
                    return css`
                                color: ${props.css.color} !important;
                            `
                }
            }else{
                return css`
                    color: ${props.icon_props.color} !important;
                `
            }
        }
    }}
`

export const MetaCatIcon = styled.div`
    ${props =>{
        if(props.icon_props['font-size'] == ""){
            if(props.css['font-size'] == ""){
                if(props.meta['font-size'] == ""){
                    return css`
                        font-size: "" !important;
                    `
                }else{
                    return css`
                        font-size: ${props.meta['font-size']} !important;
                    `
                }
            }else{
                return css`
                    font-size: ${props.icon_props['font-size']} !important;
                `
            }
        }else{
            return css`
                font-size: ${props.icon_props['font-size']} !important;
            `
        }
    }}
    
   
    ${props => {
        if (props.lay_sty == "grid3") {
            // For grid 3
            if((props.icon_props.color == "") || (props.icon_props.color == undefined)) {
                if ((props.css['background-color'] == "") || (props.css['background-color'] == undefined)) {
                    if ((props.css.color == "") || (props.css.color == undefined)) {
                        if ((props.meta.color == "") || (props.meta.color == undefined)) {
                            if ((props.primary == "") || (props.primary == undefined)) {
                                if ((props.cat_type.position != "") && (props.cat_type.style != 'style1')) {
                                    return css`
                                    color: #1e73be !important;
                                `
                                } else {
                                    if ((props.cat_type.position != "") && (props.cat_type.style === 'style1')) {
                                        return css`
                                        color: #1e73be !important;
                                    `
                                    } else {
                                        return css`
                                        color: #fff !important;
                                    `
                                    }
                                }
                            } else {
                                return css`
                                color: ${props.primary} !important;
                            `
                            }
                        } else {
                            return css`
                            color: ${props.meta.color} !important;
                        `
                        }
                    } else {
                        return css`
                        color: ${props.css.color} !important;
                    `
                    }
                } else {
                    return css`
                    color: ${props.css['background-color']} !important;
                `
                }
            }else{
                return css`
                    color: ${props.icon_props.color} !important;
                `
            }
        } else {
            if((props.icon_props.color == "") || (props.icon_props.color == undefined)) {
                if ((props.css['background-color'] == "") || (props.css['background-color'] == undefined)) {
                    if ((props.css.color == "") || (props.css.color == undefined)) {
                        if ((props.meta.color == "") || (props.meta.color == undefined)) {
                            if ((props.primary == "") || (props.primary == undefined)) {
                                if ((props.cat_type.position != "") && (props.cat_type.style != 'style1')) {
                                    return css`
                                    color: #1e73be !important;
                                `
                                } else {
                                    return css`
                                    color: #fff !important;
                                `
                                }
                            } else {
                                return css`
                                color: ${props.primary} !important;
                            `
                            }
                        } else {
                            return css`
                            color: ${props.meta.color} !important;
                        `
                        }
                    } else {
                        return css`
                        color: ${props.css.color} !important;
                    `
                    }
                } else {
                    return css`
                    color: ${props.css['background-color']} !important;
                `
                }
            }else{
                return css`
                    color: ${props.icon_props.color} !important;
                `
            }
        }
    }}
        
    width: unset !important;
    &:hover{
         color: ${props =>
            (props.css['h-color'] != "")?
                (props.css['h-color'] != undefined?
                    props.css['h-color']: ((props.meta['h-color'] != "")?
                        (props.meta['h-color'] != undefined?
                            props.meta['h-color']: "#2973be"):
                        "#2973be"))
                :
                (props.meta['h-color'] != "")?
                    (props.meta['h-color'] != undefined?
                        props.meta['h-color']: "#2973be"):
                    "#2973be"
        } !important;
    }
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
export const ImgCol = styled.div`
    padding-right: ${props => (props.css.gutter == "")? "7.5": (props.css.show_hide)? String(parseInt(props.css.gutter)/2): ""}px !important;
`
export const ContentCol = styled.div`
    padding-left: ${props => (props.css.gutter == "")? "7.5": (props.css.show_hide)? String(parseInt(props.css.gutter)/2): ""}px !important;
`

export const Colgut = styled.div`
    ${props =>{
        if(props.lay_sty === "grid3"){
            if(props.css.gutter == ""){
                return css`
                    padding: 0px !important;
                `
            }else{
                return css`
                    padding: ${props.css.gutter}px !important;
                `
            }
        }else{
            if(props.css.gutter == ""){
                return css`
                    padding: 15px !important;
                `
            }else{
                return css`
                    padding: ${props.css.gutter}px !important;
                `
            }
        }
    }}
    margin: 0px !important;
`


