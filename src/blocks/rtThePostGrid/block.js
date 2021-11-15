const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import attributes from "./attributes"
import edit from "./edit"

registerBlockType("rt-radius-blocks/thepostgrid", {
    title: __("The Post Grid", "radius-blocks"),
    keywords: [
        __("Posts", "radius-blocks"),
        __("Grid", "radius-blocks"),
    ],
    attributes,
    edit,
    save: () => null
});