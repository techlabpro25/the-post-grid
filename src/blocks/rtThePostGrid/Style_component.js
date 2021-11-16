import styled from 'styled-components';

export const Titlea = styled.a`
	color: ${props => props.css.color} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
`;

export const Titletag = styled.h3`
	text-align: ${props => props.css['text-align']} !important;
`;

export const Excerpts = styled.div`
	color: ${props => props.css.color} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	text-align: ${props => props.css['text-align']} !important;
`;

export const Cat_style = styled.a`
	color: ${props => props.css.color} !important;
	background-color: ${props => props.css['background-color']} !important;
	font-size: ${props => props.css['font-size']} !important;
	border-radius: ${props => props.css['border-radius']}px !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
	margin: ${props => (props.css_mar != undefined) ? props.css_mar.top+" "+props.css_mar.right+" "+props.css_mar.bottom+" "+props.css_mar.left: '0px'} !important;
`;

export const MetaStyle = styled.span`
	color: ${props => props.css.color} !important;
	font-size: ${props => props.css['font-size']} !important;
	font-weight: ${props => props.css['font-weight']} !important;
	text-align: ${props => props.css['text-align']} !important;
`;

export const Button_style = styled.a`
	color: ${props => props.css.color} !important;
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