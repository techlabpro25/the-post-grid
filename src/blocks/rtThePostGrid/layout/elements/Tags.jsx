import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { Cat_style, MetaIcon } from "../../Style_component";

export const Tags = (props) => {
	const {
		meta,
		primary_color,
		post_tags,
		category_style,
		category_padding,
		category_margin,
	} = props.data;
	return (
		<span className="post-tags-links">
			{meta.icon ? (
				<MetaIcon
					as={FontAwesomeIcon}
					css={category_style}
					primary={primary_color}
					icon={faTags}
				/>
			) : (
				""
			)}
			&nbsp;
			{post_tags?.length &&
				post_tags.map((tag_item, i) => {
					return (
						<div key={`${tag_item}-${i}`}>
							{i > 0 ? ", " : ""}
							<Cat_style
								css={category_style}
								primary={primary_color}
								css_pad={category_padding}
								css_mar={category_margin}
								href={tag_item.tag_link}
								rel="tag"
							>
								{tag_item.tag_name}
							</Cat_style>
						</div>
					);
				})}
			{" " + meta.seperator}
		</span>
	);
};
