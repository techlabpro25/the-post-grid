import {
    PanelBody, SelectControl, 
} from "@wordpress/components";


function Columns(props) {

    const {columns} = props.attr.attributes
    const column = [
        {
            label: "Column 1",
            value: "12"
        },
        {
            label: "Column 2",
            value: "6"
        },
        {
            label: "Column 3",
            value: "4"
        },
        {
            label: "Column 4",
            value: "3"
        },
        {
            label: "Column 6",
            value: "2"
        }
    ]
    return (
        <PanelBody title="Columns" initialOpen={false}>
            <SelectControl
                label="Columns (Desktop):"
                options={column}
                value ={columns.desktop}
                onChange={(val)=>props.attr.setAttributes( {columns: {...columns, "desktop": val} })}
            />

            <SelectControl
                label="Columns (Tablet):"
                options={column}
                value ={columns.tablet}
                onChange={(val)=>props.attr.setAttributes( {columns: {...columns, "tablet": val} })}
            />

            <SelectControl
                label="Columns (Mobile):"
                options={column}
                value ={columns.mobile}
                onChange={(val)=>props.attr.setAttributes( {columns: {...columns, "mobile": val} })}
            />
        </PanelBody>
    );
}

export default Columns;