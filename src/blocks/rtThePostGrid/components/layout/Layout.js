import { PanelBody, RadioControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import list from './list.png';
function Layout(props) {
	const [option, setOption] = useState("a");
    return (
			<PanelBody title="Layout Type" initialOpen={true}>
				<RadioControl
					label="Layouts:"
					selected={option}
					options={[
						{ label: "Grid", value: "a" },
						{ label: "List", value: "e" },
						{ label: "Isotope", value: "i" },
					]}
					onChange={(value) => setOption(value)}
				/>
				<img src={list}/>
			</PanelBody>
		);
}

export default Layout;