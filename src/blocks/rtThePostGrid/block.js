const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import attributes from "./attributes"
import edit from "./edit"

registerBlockType("rt-tpg/thepostgrid", {
    title: __("The Post Grid", "the-post-grid"),
    keywords: [
        __("Posts", "the-post-grid"),
        __("Grid", "the-post-grid"),
    ],
    attributes,
    edit,
    save: () => null,
    example: {},
});