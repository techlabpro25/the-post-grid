import {
	Head_title,
	Head_color,
	Head_border,
	Head_border_style1,
	Dot_style
} from "./Style_component";


const Header_Title = (props) => {
	const {
		general,
		heading,
		heading_style,
		heading_title,
		heading_padding_object,
		heading_margin_object,
		primary_color,
		heading_dot_margin,
	} = props


	let Heading = "";
	if (heading.tag === undefined) {
		Heading = 'h2'
	} else {
		Heading = 'h' + heading.tag
	}


	return (
		<>
				{
					(general.heading && (heading_title.length > 0))?(
						<Head_border css={heading_style} css_head={heading} className={`tpg-widget-heading-wrapper heading-style${heading.style} ${heading_style['text-align']}`}>

							{
								(heading.style == "1") ? (<Head_border_style1 css={heading_style} className="tpg-widget-heading-line line-left"></Head_border_style1>) : ("")
							}
							<Head_title css={heading_style} head_sty={heading} primary={primary_color} css_pad={heading_padding_object} css_mar={heading_margin_object} as={Heading} className="tpg-widgets-heading">
								<Head_color as={(heading.link.length > 0)? 'a': 'span'} css={heading_style} primary={primary_color} href={heading.link}>{heading_title}</Head_color>
							</Head_title>
							<Dot_style css={heading_style} css_mar={heading_dot_margin} className="heading_dot"></Dot_style>
							{
								(heading.style == "1") ? (<Head_border_style1 css={heading_style} className="tpg-widget-heading-line"></Head_border_style1>) : ("")
							}

						</Head_border>
					):("")
				}

		</>
	);
}

export default Header_Title;