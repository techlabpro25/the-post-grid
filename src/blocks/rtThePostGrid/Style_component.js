import styled from 'styled-components';

export const Titlea = styled.a`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
`;

export const Titletag = styled.div`
	text-align: ${props => props.css['text-align']} !important;
`;

export const Excerpts = styled.div`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	text-align: ${props => props.css['text-align']} !important;
`;

export const Cat_style = styled.a`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	background-color: ${props => props.css['background-color']} !important;
	font-size: ${props => props.css['font-size']} !important;
	border-radius: ${props => props.css['border-radius']}px !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: '0px'} !important;
`;

export const Cat_style_non_default = styled.a`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	background-color: ${props => props.css['background-color']} !important;
	font-size: ${props => props.css['font-size']} !important;
	border-radius: ${props => props.css['border-radius']}px !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: '0px'} !important;

	&::after{
		border-top-color: ${props => props.css['background-color']} !important;;
	}
`;

export const MetaStyle = styled.span`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
`;

export const MetaStyle_align = styled.div`
	text-align: ${props => props.css['text-align']} !important;
`;

export const Button_style = styled.a`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	border-radius: ${props => props.css_btn['border-radius']}px !important;
	background-color: ${props => props.css['background-color']} !important;
	&:hover{
		color: ${props => props.css.h_color} !important;
		background-color: ${props => props.css.h_bg_color} !important;
	}
	&:active{
		background-color: ${props => props.css.active_color} !important;
	}
`;

export const Btn_align = styled.div`
	text-align: ${props => props.css_btn['text-align']} !important;
`;

export const Head_title = styled.div`
    padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '15px'} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: '0px'} !important;
	background-color: ${props => props.css['background-color']} !important;
	:before{
	    background-color: ${props => (props.css.color)? props.css.color: props.primary} !important;
	}
	:after{
	    border-color: ${props => (props.css != undefined)? props.css['background-color']: "#1e73be"} transparent !important;
	}
	
`;

export const Head_color = styled.a`
	color: ${props => (props.css.color)? props.css.color: props.primary} !important;
`;

export const Head_border = styled.div`
	border-bottom: ${props => (props.css_head.style != '1')? props.css['border-width']+" "+props.css['border-style']+" "+props.css['border-color'] : ""} !important;
`;
export const Head_border_style1 = styled.div`
	border: ${props => props.css['border-width']+" "+props.css['border-style']+" "+props.css['border-color'] } !important;

`;

export const Content_wrap = styled.div`
	background-color: ${props => props.css['background-color']} !important;
	border-radius: ${props => props.css.radius}px !important;
	border: ${props => props.css['border-width']+" solid "+props.css['border-color']} !important;
	box-shadow: ${props => '0px 0px 5px 0px '+props.css['box-shadow-color']} !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
`;

export const Content_padding = styled.div`
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
`;

export const ImgAnimation = styled.img`
	width: ${props => props.css.size}px !important;
	height: ${props => (props.css.size == "150")? "150px": (props.css.size == "300")? "300px": "auto"} !important;
	&:hover{
	    transform: scale(${props => props.css.animation})
	}
`;

export const ImgParent = styled.div`
	border-radius: ${props => props.css['border-radius']}px !important;	
`;

