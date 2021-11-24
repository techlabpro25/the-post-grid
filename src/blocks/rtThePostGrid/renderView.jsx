import Layout1 from "./layout/grid/Layout1";
import {List1} from "./layout/list/List1";
import {List2} from "./layout/list/List2";

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
                    <List2 {...props} data={data}/>
                ):(layout.value == "isotope1")?(
                    <h1> Isotope 1 Template</h1>
                ):("")
            }
        </>
    )
}

export default RenderView;