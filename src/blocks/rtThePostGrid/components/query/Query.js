import {
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalNumberControl as NumberControl,
	TextControl,
	__experimentalText as Text,
	CheckboxControl,
	RadioControl,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import $ from "jquery";

const Query = (props) => {
	const {__} = wp.i18n;
	const [pt, setPt] = useState([]);
	const [loading, setLoading] = useState(true);
	const [term_cat, setTerm_cat] = useState([]);
	const [post_term, setPost_term] = useState([]);
	const [tax_warning, setTax_warning] = useState("");
	const [authors, setAuthors] = useState([]);
	const { query } = props.attr.attributes;

	const operator = [
		{
			label: __( "IN — show posts which associate with one or more of selected terms", "the-post-grid" ),
			value: "IN",
		},
		{
			label:__( "NOT IN — show posts which do not associate with any of selected terms", "the-post-grid" ),
			value: "NOT IN",
		},
		{
			label: __( "AND — show posts which associate with all of selected terms", "the-post-grid"),
			value: "AND",
		},
	];

	const order_type = [
		{
			label: __( "ID", "the-post-grid"),
			value: "ID",
		},
		{
			label: __( "Title", "the-post-grid"),
			value: "title",
		},
		{
			label: __( "Created date", "the-post-grid"),
			value: "date",
		},
		{
			label: __( "Modified date", "the-post-grid"),
			value: "modified",
		},
		{
			label: __( "Menu Order", "the-post-grid"),
			value: "menu_order",
		},
	];

	const publish_type = [
		{
			label: __( "Publish", "the-post-grid"),
			value: "publish",
		},
		{
			label: __( "Pending", "the-post-grid"),
			value: "pending",
		},
		{
			label: __( "Draft", "the-post-grid"),
			value: "draft",
		},
		{
			label: __( "Auto Draft", "the-post-grid"),
			value: "auto-draft",
		},
		{
			label: __( "future", "the-post-grid"),
			value: "future",
		},
		{
			label: __( "Private", "the-post-grid"),
			value: "private",
		},
		{
			label: __( "Inherit", "the-post-grid"),
			value: "inherit",
		},
		{
			label: __( "Trash", "the-post-grid"),
			value: "trash",
		},
		{
			label: __( "Any", "the-post-grid"),
			value: "any",
		},
	];

	// const typefilter = ["wp_template", "attachment", "wp_block", "post_format", "product_type", "product_visibility", "product_shipping_class"];
	const typefilter = ["wp_template", "attachment", "wp_block", "product_type", "product_visibility", "product_shipping_class"];

	// Post Type
	useEffect(() => {
		apiFetch({ path: "/wp/v2/types" }).then((types) => {
			var newarrobj = Object.keys(types);
				let loop_var= newarrobj.map((item_key) => {
					if (!typefilter.includes(item_key)) {
						return {
							label: types[item_key].name,
							value: types[item_key].slug,
						};
					}
					return false
				})
			setPt(loop_var.filter(e => e))
		});
		setLoading(false);
	}, []);

	// Get terms by post
	useEffect(() => {
		apiFetch({ path: "/rt/v1/taxonomy?post_type="+query.post_type }).then((term) => {
			if("message" in term){
				setTax_warning(term.message)
			}else{
				setTax_warning('');
				let taxonomy_loop = term.map((item_key) => {
					if (!typefilter.includes(item_key.name)) {
						return {
							label: item_key.label,
							value: item_key.name,
						};
					}
					return false;
				})
				setPost_term(taxonomy_loop.filter(e => e))
			}

		});
	}, [query.post_type, query.taxonomy_bool]);


	// Get Authors
	useEffect(() => {
		apiFetch({ path: "/wp/v2/users" }).then((user) => {
			setAuthors(
				user.map((item_key) => {
					return {
						label: item_key.name,
						value: item_key.id,
					};
				})
			);
		});
	}, []);

	const termHandler = (tax, taxonomy) =>{
		apiFetch({ path: "/rt/v1/categories?tax_type="+tax }).then((category) => {
			const tax_item = {...query.tax_item};
			tax_item[tax] = category.map((item_key) => {
				return {
					label: item_key.name,
					value: item_key.id,
				};
			})
			props.attr.setAttributes({
				query:{ ...query, taxonomy, tax_item:tax_item}
			})

		});
	}


	return (
		<>
			<SelectControl
				label={__( "Post Type:", "the-post-grid")}
				value={query.post_type}
				options={pt}
				onChange={(value) =>{
					const taxonomy = [];
					const tax_term = {};
					const tax_item = {};
					$('.pagination_number.active').removeClass("active")
					$('.pagination_number').first().addClass("active")

					props.attr.setAttributes({ query: {
						...query,
							post_type: value,
							taxonomy_bool: false,
							taxonomy:taxonomy,
							tax_term:tax_term,
							tax_item:tax_item,
							filter: true
					} })
				}
				}
			/>

			<RangeControl
				label={__( "limit:", "the-post-grid")}
				help={__( "The number of posts to show. Set -1 to show all found posts.", "the-post-grid")}
				value={query.limit}
				onChange={(value) =>{
					$('.pagination_number.active').removeClass("active")
					$('.pagination_number').first().addClass("active")
					props.attr.setAttributes({ query: { ...query, limit: value, filter: true } })
				}
				}
				min={-1}
				max={1000}
				step={1}
			/>

			<TextControl
				label={__( "Include Only", "the-post-grid")}
				help={__( "List of post IDs to show (comma-separated values, for example: 1,2,3)", "the-post-grid")}
				value={query.include}
				onChange={(value) =>{
					$('.pagination_number.active').removeClass("active")
					$('.pagination_number').first().addClass("active")
					props.attr.setAttributes({ query: { ...query, include: value, filter: true } })
				}

				}
			/>

			<TextControl
				label={__( "Exclude", "the-post-grid")}
				help={__( "List of post IDs to hide (comma-separated values, for example: 1,2,3)", "the-post-grid")}
				value={query.exclude}
				onChange={(value) =>{
					$('.pagination_number.active').removeClass("active")
					$('.pagination_number').first().addClass("active")
					props.attr.setAttributes({ query: { ...query, exclude: value, filter: true } })
				}

				}
			/>

			<NumberControl
				label={__( "Offset", "the-post-grid")}
				labelPosition="side"
				onChange={(value) =>{
					$('.pagination_number.active').removeClass("active")
					$('.pagination_number').first().addClass("active")
					props.attr.setAttributes({ query: { ...query, offset: value } })
				}

				}
				Step={1}
				value={query.offset}
			/>

			<CheckboxControl
				label={__( "Taxonomy", "the-post-grid")}
				checked={query.taxonomy_bool}
				onChange={(value) =>{
					let tax_term = {...query.tax_term}
					let tax_item = {...query.tax_item}
					let taxonomy = [...query.taxonomy]

					if(!value){
						taxonomy = [];
						tax_term = {};
						tax_item = {};
					}
					props.attr.setAttributes({
						query: {...query, taxonomy_bool: value, taxonomy:taxonomy, tax_term:tax_term, tax_item:tax_item},
					})
				}
				}
			/>
			{
				(tax_warning.length && query.taxonomy_bool)?(
					<div className={'no_notice'}>
						{__( tax_warning, "the-post-grid")}
					</div>
				):(
					<>
						{post_term?.length &&
						post_term?.map((term_item) => {
							if (query.taxonomy_bool) {
								return (
									<>
										<div className="tax_first_child">
											<CheckboxControl
												label={__( term_item.label, "the-post-grid")}
												checked={query.taxonomy.includes(term_item.value)}
												onChange={(value) => {
													let taxonomy = [...query.taxonomy];
													let newTaxItem  = {...query.tax_term}
													let newTermItem  = {...query.tax_item}
													if (value) {
														taxonomy.push(term_item.value);
													} else {
														taxonomy = taxonomy.filter((i) => {
															return i !== term_item.value;
														});

														// Remove from array if not checked
														delete newTaxItem[term_item.value]
														delete newTermItem[term_item.value]
													}

													props.attr.setAttributes({
														query: { ...query, taxonomy: taxonomy, tax_term: newTaxItem, tax_item: newTermItem},
													});

													if(value){
														termHandler(term_item.value, taxonomy)
													}

												}}
											/>
										</div>
									</>
								);
							}
						})}
					</>
				)
			}


			{query.taxonomy.length > 0 && query.taxonomy.map((taxonomy) => {

				return(
					<div className="tax_second_child">
						<SelectControl
							label={__( (taxonomy.replace(/_/g, ' ')).charAt(0).toUpperCase() + (taxonomy.replace(/_/g, ' ').slice(1)), "the-post-grid")}
							value={query.tax_term[taxonomy]?.data || []}
							options={query.tax_item?.[taxonomy] || []}
							multiple={true}
							onChange={(value) => {
								const tax_term = { ...query.tax_term };
								if(tax_term[taxonomy]){
									tax_term[taxonomy].data = value
								}else{
									tax_term[taxonomy] ={
										data:value,
										operator: null
									}
								}
								$('.pagination_number.active').removeClass("active")
								$('.pagination_number').first().addClass("active")
								props.attr.setAttributes({
									query: { ...query, tax_term: tax_term, filter: true },
								});
							}}
						/>

						 <SelectControl
							label={__( `${(taxonomy.replace(/_/g, ' ')).charAt(0).toUpperCase() + (taxonomy.replace(/_/g, ' ').slice(1))} operator:`, "the-post-grid")}
							value={query.tax_term[taxonomy]?.operator}
							options={operator}
							onChange={(value) =>
								{
									const tax_term = { ...query.tax_term };
									if(tax_term[taxonomy]){
										tax_term[taxonomy].operator = value
									}else{
										tax_term[taxonomy] ={
											data:[],
											operator: value
										}
									}
									$('.pagination_number.active').removeClass("active")
									$('.pagination_number').first().addClass("active")
									props.attr.setAttributes({
										query: { ...query, tax_term: tax_term },
									});
								}
							}
						/>
					</div>
				)
			})}

			{(query.taxonomy.length > 1) ? (
				<div className="tax_second_child">
					<SelectControl
						label={__( "Relation: ", "the-post-grid")}
						value={query.relation}
						options={[
							{
								label: __( "AND — show posts which match all settings", "the-post-grid"),
								value: "AND",
							},
							{
								label: __( "OR — show posts which match one or more settings", "the-post-grid"),
								value: "OR",
							},
						]}
						onChange={(value) =>{
							$('.pagination_number.active').removeClass("active")
							$('.pagination_number').first().addClass("active")
							props.attr.setAttributes({ query: { ...query, relation: value } })
						}

						}
					/>
				</div>
			) : (
				""
			)}
			<CheckboxControl
				label={__( "Order", "the-post-grid")}
				checked={query.order_bool}
				onChange={(value) =>
					{
						let order_by ={...query.order_by}
						let order ={...query.order}
						if(!value){
							order_by = "";
							order = "";
						}
						props.attr.setAttributes({ query: {
							...query,
								order_bool: value,
								order_by: order_by,
								order: order,
								filter: true
						} })
					}

				}
			/>

			{query.order_bool ? (
				<>
					<SelectControl
						label={__( "Order BY:", "the-post-grid")}
						value={query.order_by}
						options={order_type}
						onChange={(value) =>{
							$('.pagination_number.active').removeClass("active")
							$('.pagination_number').first().addClass("active")
							props.attr.setAttributes({
								query: { ...query, order_by: value, filter: true },
							})
						}

						}
					/>

					<RadioControl
						label={__( "Order:", "the-post-grid")}
						selected={query.order}
						options={[
							{ label: "Ascending", value: "ASC" },
							{ label: "Descending", value: "DESC" },
						]}
						onChange={(value) =>{
							$('.pagination_number.active').removeClass("active")
							$('.pagination_number').first().addClass("active")
							props.attr.setAttributes({ query: { ...query, order: value, filter: true } })
						}

						}
					/>
				</>
			) : (
				""
			)}

			<CheckboxControl
				label={__( "Author", "the-post-grid")}
				checked={query.author_bool}
				onChange={(value) => {
					let author  = [...query.author]
					if(!value){
						author = []
					}
						props.attr.setAttributes({query: {
							...query,
								author: author,
								author_bool: value
						}})
					}
				}
			/>

			{query.author_bool ? (
				<SelectControl
					label={__( "Author:", "the-post-grid")}
					value={query.author}
					multiple={true}
					options={authors}
					onChange={(value) =>{
						$('.pagination_number.active').removeClass("active")
						$('.pagination_number').first().addClass("active")
						props.attr.setAttributes({ query: { ...query, author: value, filter: true } })
					}

					}
				/>
			) : (
				""
			)}

			<CheckboxControl
				label={__( "Status", "the-post-grid")}
				checked={query.status_bool}
				onChange={(value) =>
					{
						let status = [...query.status]
						if (!value){
							status = []
						}
						props.attr.setAttributes({ query: { ...query, status_bool: value, status: status } })
					}

				}
			/>

			{query.status_bool ? (
				<SelectControl
					label={__( "Status Type:", "the-post-grid")}
					value={query.status}
					multiple={true}
					options={publish_type}
					onChange={(value) =>{
						$('.pagination_number.active').removeClass("active")
						$('.pagination_number').first().addClass("active")
						props.attr.setAttributes({ query: { ...query, status: value, filter: true } })
					}

					}
				/>
			) : (
				""
			)}

			<CheckboxControl
				label={__( "Keyword", "the-post-grid")}
				checked={query.keyword_bool}
				onChange={(value) =>{
					let keyword = query.keyword
					if(!value){
						keyword = ""
					}
					props.attr.setAttributes({ query: { ...query, keyword_bool: value, keyword:keyword } })
				}

				}
			/>

			{query.keyword_bool ? (
				<TextControl
					label={__( "Enter Keyword:", "the-post-grid")}
					value={query.keyword}
					onChange={(value) =>{
						$('.pagination_number.active').removeClass("active")
						$('.pagination_number').first().addClass("active")
						props.attr.setAttributes({ query: { ...query, keyword: value, filter: true } })
					}

					}
				/>
			) : (
				""
			)}
		</>
	);
};

export default Query;
