import Layout1 from "./layout/grid/Layout1";
import {List1} from "./layout/list/List1";

const RenderView = (props) => {
    const {layout, data} = props;

    return(
        <>
            {
                (layout.value == "grid1")?(
                    <Layout1 {...props} data={data}/>
                ):(layout.value == "list1")?(
                    <List1 {...props} data={data}/>
                ):(layout.value == "list2")?(
                    <h1> List 2 Template</h1>
                ):(layout.value == "isotope1")?(
                    <h1> Isotope 1 Template</h1>
                ):("")
            }
        </>
    )
}

export default RenderView;