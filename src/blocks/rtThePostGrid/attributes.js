const attributes = {
	limit: {
		type: "number",
		default: 10,
	},
	query: {
		type: "object",
		default: {
			tt: "sdfsdf",
			post_type: "post",
			limit: -1,
			include: "",
			exclude: "",
			offset: 0,
			taxonomy_bool: false,
			category_bool: false,
			taxonomy: [],
			tax_term: {
				category: ["aa", "bb"],
			},
			category: [],
			category_operator: "",
			tag_bool: false,
			tag: [],
			tag_operator: "",
			relation: "",
			order_bool: false,
			order_by: "",
			order: "",
			author_bool: false,
			author: [],
			status_bool: false,
			status: ["publish"],
			keyword_bool: false,
			keyword: "",
		},
	},
	columns: {
		type: "object",
		default: {
			desktop: "4",
			tablet: "6",
			mobile: "12",
		},
	},
	pagination: {
		type: "object",
		default: {
			show: false,
			post_per_page: 5,
			pagination_type: "",
		},
	},
	linking: {
		type: "object",
		default: {
			link_to_page: true,
			link_type: "",
			target: "",
		},
	},
	general: {
		type: "object",
		default: {
			heading: true,
			title: true,
			excerpt: true,
			category: true,
			author: true,
			post_date: true,
			tag: true,
			comment_count: true,
			see_more: true,
		},
	},
	heading: {
		type: "object",
		default: {
			title: "",
			tag: "h2",
			style: "Style_1",
			link: "",
		},
	},
	heading_style: {
		type: "object",
		default: {
			["text-align"]: "left",
			color: "#000",
			["background-color"]: "#000",
			["border-color"]: "gray",
			["border-width"]: "1px",
			["border-style"]: "solid",
		},
	},
	heading_padding_object: {
		type: "object",
	},
	heading_margin_object: {
		type: "object",
	},
	title: {
		type: "object",
		default: {
			tag: "h2",
			position: "",
			word_limit: 100,
			type: "full",
			more_text: "...",
		},
	},
	title_style: {
		type: "object",
		default: {
			["text-align"]: "center",
			color: "#000",
			["font-size"]: "",
			["font-weight"]: 400,
		},
	},
	excerpt: {
		type: "object",
		default: {
			limit: 20,
			type: "full",
			more_text: "...",
		},
	},
	excerpt_style: {
		type: "object",
		default: {
			["text-align"]: "left",
			color: "#000",
			["font-size"]: "",
			["font-weight"]: 400,
		},
	},
	category: {
		type: "object",
		default: {
			position: "",
			style: "style_1",
			icon: true,
		},
	},
	category_style: {
		type: "object",
		default: {
			color: "",
			["background-color"]: "",
			["font-size"]: "12px",
			["border-radius"]: "",
		},
	},
	category_padding: {
		type: "object",
	},
	category_margin: {
		type: "object",
	},
	meta: {
		type: "object",
		default: {
			position: "between",
			icon: true,
			seperator: "|",
		},
	},
	meta_style: {
		type: "object",
		default: {
			["text-align"]: "left",
			color: "#000",
			["font-size"]: "",
			["font-weight"]: 400,
		},
	},
	button: {
		type: "object",
		default: {
			["border-radius"]: "",
			text: "View More",
			["text-align"]: "left",
		},
	},
	button_style: {
		type: "object",
		default: {
			color: "",
			h_color: "",
			["background-color"]: "",
			h_bg_color: "",
			active_color: "",
		},
	},
	image: {
		type: "object",
		default: {
			show_hide: true,
			size: "1024x1024",
			shape: "normal",
			animation: "none",
			["border-radius"]: "",
		},
	},
	parent_class: {
		type: "string",
	},
	primary_color: {
		type: "string",
	},
	content_wrap: {
		type: "object",
		default: {
			["background-color"]: "",
			["box-shadow-color"]: "",
			["box-shadow"]: "0px 0px 1px #jhjh",
			radius: "",
			["border-radius"]: "",
			["border-color"]: "gray",
			["border-width"]: "1px",
			["border-style"]: "solid",
		},
	},
	constent_box_padding: {
		type: "object",
	},
	content_padding: {
		type: "object",
	},
	section: {
		type: "object",
		default: {
			["background-color"]: "",
			padding: "",
			margin: "",
		},
	},
	section_padding: {
		type: "object",
	},
	section_margin: {
		type: "object",
	},
	layout: {
		type: "string",
		default: "grid1",
	},
};

export default attributes;
