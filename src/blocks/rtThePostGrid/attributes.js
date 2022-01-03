const attributes = {
	query: {
		type: "object",
		default: {
			post_type: "post",
			limit: -1,
			include: "",
			exclude: "",
			offset: 0,
			taxonomy_bool: true,
			category_bool: false,
			taxonomy: [],
			tax_term: {},
			category: [],
			category_operator: "",
			tag_bool: false,
			tag: [],
			tag_operator: "",
			relation: "AND",
			order_bool: true,
			order_by: "date",
			order: "DESC",
			author_bool: false,
			author: [],
			status_bool: true,
			status: [{label: 'Publish', value: 'publish'}],
			keyword_bool: false,
			keyword: "",
			filter: true,
			tax_item: {},
			pageindex: 1,
			loader: false
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

	pagination_style:{
		default:{
			color: '',
			['h-color']: '',
			['a-color']: '',
			['bg-color']: "",
			['h-bg-color']: "",
			['a-bg-color']: "",
			['border-color']: "",
			['h-border-color']: "",
			['a-border-color']: "",
			['border-style']: "",
			['h-border-style']: "",
			['a-border-style']: "",
			['border-width']: "",
			['h-border-width']: "",
			['a-border-width']: "",
			['border-radius']: "",
			['h-border-radius']: "",
			['a-border-radius']: "",
			['font-size']: "",
			['h-font-size']: "",
			['a-font-size']: "",
			['font-weight']: "",
			['h-font-weight']: "",
			['a-font-weight']: "",
			['transform']: "",
			['h-transform']: "",
			['a-transform']: "",
			['letter-spacing']: "",
			['h-letter-spacing']: "",
			['a-letter-spacing']: "",
			['line-height']: "",
			['h-line-height']: "",
			['a-line-height']: "",
		}
	},
	pagination_padding:{
		default:{
			top: '15px',
			right: '15px',
			bottom: '15px',
			left: '15px',
		}
	},
	pagination_margin:{
		default:{
			top: '1px',
			right: '1px',
			bottom: '1px',
			left: '1px',
		}
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
			comment_count: true,
			see_more: true,
			presdefault: false
		},
	},
	heading: {
		type: "object",
		default: {
			tag: "2",
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
			["border-color"]: "",
			["border-width"]: "",
			["border-style"]: "",
			['line-height']: "",
			['font-weight']: 600,
			['font-size']: '',
			['letter-spacing']: '',
			['transform']: '',
			['dot-color']: ""
		},
	},
	heading_dot_margin:{
		type:"object",
		default:{
			top: "",
			right: "",
			bottom:"",
			left: ""
		}
	},
	heading_padding_object: {
		type: "object",
		default:{
			top: "",
			right: "",
			bottom: "",
			left: "",
		}
	},
	heading_margin_object: {
		type: "object",
	},
	title: {
		type: "object",
		default: {
			tag: "3",
			position: "",
			word_limit: 25,
			type: "full",
			more_text: "",
		},
	},
	title_style: {
		type: "object",
		default: {
			["text-align"]: "Left",
			color: "",
			h_color: "",
			["font-size"]: "22px",
			["font-weight"]: '500',
			['line-height']: "",
			['letter-spacing']: '',
			['transform']: ''
		},
	},
	excerpt: {
		type: "object",
		default: {
			limit: '25',
			type: "word",
			more_text: "...",
		},
	},
	excerpt_style: {
		type: "object",
		default: {
			["text-align"]: "Left",
			color: "",
			["font-size"]: "15px",
			["font-weight"]: 400,
			['line-height']: "",
			['letter-spacing']: '',
			['transform']: ''
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
			['h-color']: '',
			["background-color"]: "",
			["font-size"]: "",
			["border-radius"]: "",
			["font-weight"]: '',
			['letter-spacing']: '',
			['transform']: ''
		},
	},
	category_padding: {
		type: "object",
		default:{
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	category_margin: {
		type: "object",
		default:{
			top: '',
			right: '',
			bottom: '',
			left: '',
		}
	},
	meta: {
		type: "object",
		default: {
			position: "default",
			icon: true,
			seperator: "",
		},
	},
	meta_style: {
		type: "object",
		default: {
			["text-align"]: "Left",
			color: "",
			['h-color']: '',
			["font-size"]: "15px",
			["font-weight"]: 400,
			['line-height']: '',
			['letter-spacing']: '',
			['transform']: ''
		},
	},
	button: {
		type: "object",
		default: {
			["border-radius"]: "",
			['h-boder-radius'] : "",
			text: "View More",
			["text-align"]: "Left",
			['border-color']: '#e0e0e0',
			['h-border-color']: '#2271b1',
			['border-width']: '1px',
			['h-border-width']: '1px',
			['border-style']: 'solid',
			['h-border-style']: 'solid',
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
			['line-height']: "",
			['font-size']: "",
			["font-weight"]: 400,
			['letter-spacing']: '',
			['transform']: ''
		},
	},
	button_padding: {
		top:'8px',
		right:'15px',
		bottom:'8px',
		left:'15px',
	},
	image: {
		type: "object",
		default: {
			show_hide: true,
			size: "300x300",
			animation: "img_zoom_in",
			["border-radius"]: "",
			['img-column']: '',
			['content-column']: '',
			gutter: ""
		},
	},
	parent_class: {
		type: "string",
		default: "default"
	},
	primary_color: {
		type: "string",
		default: "",
	},
	content_wrap: {
		type: "object",
		default: {
			["background-color"]: "",
			["box-shadow-color"]: "transparent",
			radius: "",
			["border-color"]: "",
			["border-width"]: "",
			gutter: '',
		},
	},
	constent_box_padding: {
		type: "object",
	},
	content_padding: {
		type: "object",
		default:{
			top : '',
			right : '',
			left: '',
			bottom : '',
		}
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
	},
	loaders:{
		type: 'object',
		default:{
			excerpt: false
		}
	}

};

export default attributes;
