import {
    PanelBody, SelectControl,
    __experimentalNumberControl as NumberControl,
} from "@wordpress/components";


function Columns(props) {
    const {__} = wp.i18n;
    const {columns, content_wrap} = props.attr.attributes
    const column = [
        {
            label: __( "Column 1", "the-post-grid"),
            value: "12"
        },
        {
            label: __( "Column 2", "the-post-grid"),
            value: "6"
        },
        {
            label: __( "Column 3", "the-post-grid"),
            value: "4"
        },
        {
            label: __( "Column 4", "the-post-grid"),
            value: "3"
        },
        {
            label: __( "Column 5", "the-post-grid"),
            value: "24"
        },
        {
            label: __( "Column 6", "the-post-grid"),
            value: "2"
        }
    ]
    return (
        <PanelBody title={__( "Columns", "the-post-grid")} initialOpen={false}>
            <SelectControl
                label={__( "Columns (Desktop):", "the-post-grid")}
                options={column}
                value ={columns.desktop}
                onChange={(val)=>props.attr.setAttributes( {columns: {...columns, "desktop": val} })}
            />

            <SelectControl
                label={__( "Columns (Tablet):", "the-post-grid")}
                options={column}
                value ={columns.tablet}
                onChange={(val)=>props.attr.setAttributes( {columns: {...columns, "tablet": val} })}
            />

            <SelectControl
                label={__( "Columns (Mobile):", "the-post-grid")}
                options={column}
                value ={columns.mobile}
                onChange={(val)=>props.attr.setAttributes( {columns: {...columns, "mobile": val} })}
            />

            <NumberControl
                className={"rt-tpg-numbercontrol column"}
                label={__( "Gutter Control:", "the-post-grid")}
                value={ content_wrap.gutter }
                onChange={ ( value ) => props.attr.setAttributes( {content_wrap: {...content_wrap, "gutter": value} } ) }
                min={ 0 }
                max={ 100 }
                step={1}
            />
            <div className="rt-tpg-small-notice">{__("(Unit is 'PX' in use)")}</div>
        </PanelBody>
    );
}

export default Columns;