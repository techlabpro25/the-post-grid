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

const Query = (props) => {
	const [pt, setPt] = useState([]);
	const [loading, setLoading] = useState(true);
	const [term_cat, setTerm_cat] = useState([]);
	const [post_term, setPost_term] = useState([]);
	const [authors, setAuthors] = useState([]);
	const { query } = props.attr.attributes;

	const operator = [
		{
			label:
				"IN — show posts which associate with one or more of selected terms",
			value: "IN",
		},
		{
			label:
				"NOT IN — show posts which do not associate with any of selected terms",
			value: "NOT IN",
		},
		{
			label: "AND — show posts which associate with all of selected terms",
			value: "AND",
		},
	];

	const order_type = [
		{
			label: "ID",
			value: "ID",
		},
		{
			label: "Title",
			value: "title",
		},
		{
			label: "Created date",
			value: "date",
		},
		{
			label: "Modified date",
			value: "modified",
		},
		{
			label: "Menu Order",
			value: "menu_order",
		},
	];

	const publish_type = [
		{
			label: "Publish",
			value: "publish",
		},
		{
			label: "Pending",
			value: "pending",
		},
		{
			label: "Draft",
			value: "draft",
		},
		{
			label: "Auto Draft",
			value: "auto-draft",
		},
		{
			label: "future",
			value: "future",
		},
		{
			label: "Private",
			value: "private",
		},
		{
			label: "Inherit",
			value: "inherit",
		},
		{
			label: "Trash",
			value: "trash",
		},
		{
			label: "Any",
			value: "any",
		},
	];

	const typefilter = ["wp_template", "attachment", "wp_block", "post_format"];

	// Post Type
	useEffect(() => {
		apiFetch({ path: "/wp/v2/types" }).then((types) => {
			var newarrobj = Object.keys(types);
			setPt(
				newarrobj.map((item_key) => {
					if (!typefilter.includes(item_key)) {

						return {
							label: types[item_key].name,
							value: types[item_key].slug,
						};
					}
					return false;
				})
			);
		});
		setLoading(false);
	}, []);

	// Get terms by post
	useEffect(() => {
		apiFetch({ path: "/rt/v1/post/categories" }).then((term) => {
			setPost_term(
				term.map((item_key) => {
					if (!typefilter.includes(item_key)) {
						return {
							label: item_key.label,
							value: item_key.name,
						};
					}
					return false;
				})
			);
		});
	}, [pt]);

	// console.log(post_term);

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

	// Get Categories by Taxonomy
	useEffect(() => {
		apiFetch({ path: "/rt/v1/categories/category" }).then((category) => {
			setTerm_cat(
				category.map((item_key) => {
					return {
						label: item_key.name,
						value: item_key.id,
					};
				})
			);
		});
	}, []);


	return (
		<>
			<SelectControl
				label="Post Type:"
				value={query.post_type}
				options={pt}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, post_type: value } })
				}
			/>

			<RangeControl
				label="limit:"
				help="The number of posts to show. Set -1 to show all found posts."
				value={query.limit}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, limit: value } })
				}
				min={-1}
				max={1000}
				step={1}
			/>

			<TextControl
				label="Include Only"
				help="List of post IDs to show (comma-separated values, for example: 1,2,3)"
				value={query.include}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, include: value } })
				}
			/>

			<TextControl
				label="Exclude"
				help="List of post IDs to hide (comma-separated values, for example: 1,2,3)"
				value={query.exclude}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, exclude: value } })
				}
			/>

			<NumberControl
				label="Offset"
				labelPosition="side"
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, offset: value } })
				}
				Step={1}
				value={query.offset}
			/>

			<CheckboxControl
				label="Taxonomy"
				checked={query.taxonomy_bool}
				onChange={(value) =>
					props.attr.setAttributes({
						query: { ...query, taxonomy_bool: value },
					})
				}
			/>

			{post_term?.length &&
				post_term?.map((term_item) => {
					if (query.taxonomy_bool) {
						return (
							<>
								<div className="tax_first_child">
									<CheckboxControl
										label={term_item.label}
										checked={query.taxonomy.includes(term_item.value)}
										onChange={(value) => {
											let taxonomy = [...query.taxonomy];
											if (value) {
												taxonomy.push(term_item.value);
											} else {
												taxonomy = taxonomy.filter((i) => {
													return i !== term_item.value;
												});
											}
											props.attr.setAttributes({
												query: { ...query, taxonomy: taxonomy },
											});
										}}
									/>
								</div>
							</>
						);
					}
				})}

			{query.taxonomy.length > 0 &&
				query.taxonomy.map((taxonomy) => {
					<div className="tax_second_child">
						<SelectControl
							label={taxonomy}
							value={[]}
							options={operator}
							multiple={true}
							onChange={(value) => {
								const tax_term = { ...query.tax_term };
								tax_term[taxonomy] = value;
								props.attr.setAttributes({
									query: { ...query, tax_term: tax_term },
								});
							}}
						/>

						{/* <SelectControl
							label={`Category Operator:`}
							value={query.category_operator}
							options={operator}
							onChange={(value) =>
								props.attr.setAttributes({
									query: { ...query, category_operator: value },
								})
							}
						/> */}
					</div>;
				})}

			{query.taxonomy_bool && query.category_bool && query.tag_bool ? (
				<SelectControl
					label="Relation:"
					value={query.relation}
					options={[
						{
							label: "AND — show posts which match all settings",
							value: "AND",
						},
						{
							label: "OR — show posts which match one or more settings",
							value: "OR",
						},
					]}
					onChange={(value) =>
						props.attr.setAttributes({ query: { ...query, relation: value } })
					}
				/>
			) : (
				""
			)}
			<CheckboxControl
				label="Order"
				checked={query.order_bool}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, order_bool: value } })
				}
			/>

			{query.order_bool ? (
				<>
					<SelectControl
						label="Order BY:"
						value={query.order_by}
						options={order_type}
						onChange={(value) =>
							props.attr.setAttributes({
								query: { ...query, order_by: value },
							})
						}
					/>

					<RadioControl
						label="Order:"
						selected={query.order}
						options={[
							{ label: "Ascending", value: "ASC" },
							{ label: "Descending", value: "DESC" },
						]}
						onChange={(value) =>
							props.attr.setAttributes({ query: { ...query, order: value } })
						}
					/>
				</>
			) : (
				""
			)}

			<CheckboxControl
				label="Author"
				checked={query.author_bool}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, author_bool: value } })
				}
			/>

			{query.author_bool ? (
				<SelectControl
					label="Author:"
					value={query.author}
					multiple={true}
					options={authors}
					onChange={(value) =>
						props.attr.setAttributes({ query: { ...query, author: value } })
					}
				/>
			) : (
				""
			)}

			<CheckboxControl
				label="Status"
				checked={query.status_bool}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, status_bool: value } })
				}
			/>

			{query.status_bool ? (
				<SelectControl
					label="Status Type:"
					value={query.status}
					multiple={true}
					options={publish_type}
					onChange={(value) =>
						props.attr.setAttributes({ query: { ...query, status: value } })
					}
				/>
			) : (
				""
			)}

			<CheckboxControl
				label="Keyword"
				checked={query.keyword_bool}
				onChange={(value) =>
					props.attr.setAttributes({ query: { ...query, keyword_bool: value } })
				}
			/>

			{query.keyword_bool ? (
				<TextControl
					label="Enter Keyword:"
					value={query.keyword}
					onChange={(value) =>
						props.attr.setAttributes({ query: { ...query, keyword: value } })
					}
				/>
			) : (
				""
			)}
		</>
	);
};

export default Query;
