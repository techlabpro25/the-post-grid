const attributes = {
	query: {
		type: "object",
		default: {
			post_type: "post",
			limit: -1,
			include: "",
			exclude: "",
			offset: 0,
			taxonomy_bool: false,
			category_bool: false,
			taxonomy: [],
			tax_term: {},
			category: [],
			category_operator: "",
			tag_bool: false,
			tag: [],
			tag_operator: "",
			relation: "AND",
			order_bool: false,
			order_by: "",
			order: "",
			author_bool: false,
			author: [],
			status_bool: false,
			status: ["publish"],
			keyword_bool: false,
			keyword: "",
			filter: true,
			tax_item: {},
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
			tag: "1",
			style: "1",
			link: "",
		},
	},
	heading_title:{
		type: "string",
		default: ""
	},
	heading_style: {
		type: "object",
		default: {
			["text-align"]: "left",
			color: "",
			["background-color"]: "transparent",
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
			tag: "2",
			position: "",
			word_limit: 100,
			type: "full",
			more_text: "...",
		},
	},
	title_style: {
		type: "object",
		default: {
			["text-align"]: "left",
			color: "",
			h_color: "",
			["font-size"]: "",
			["font-weight"]: 500,
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
			color: "",
			["font-size"]: "15px",
			["font-weight"]: 400,
		},
	},
	category: {
		type: "object",
		default: {
			position: "",
			style: "style1",
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
			seperator: "",
		},
	},
	meta_style: {
		type: "object",
		default: {
			["text-align"]: "left",
			color: "",
			["font-size"]: "15px",
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
			size: "150",
			shape: "normal",
			animation: 1,
			["border-radius"]: "",
		},
	},
	parent_class: {
		type: "string",
		default: "default"
	},
	primary_color: {
		type: "string",
		default: "#000",
	},
	content_wrap: {
		type: "object",
		default: {
			["background-color"]: "transparent",
			["box-shadow-color"]: "#fff",
			radius: "",
			["border-color"]: "gray",
			["border-width"]: "0px"
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
		type: "object",
		default: {
			type: 'grid',
			value: "grid1"
		},
	},
	plugin_path:{
		type: 'text'
	}
};

export default attributes;
