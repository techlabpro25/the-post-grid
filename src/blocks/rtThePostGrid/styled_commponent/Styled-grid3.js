import styled, {css} from "styled-components";

export const Content_padding_grid_3 = styled.div`
    background-color: ${props => ((props.css_self['content-background-color'] == "") || (props.css_self['content-background-color'] == undefined))? "#4c6fff":props.css_self['content-background-color']} !important;
	padding: ${props => (props.css_pad != undefined) ? props.css_pad.top+" "+props.css_pad.right+" "+props.css_pad.bottom+" "+props.css_pad.left: '0px'} !important;
`;

