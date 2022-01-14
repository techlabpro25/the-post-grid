import Layout1 from "./layout/grid/Layout1";
import {List1} from "./layout/list/List1";
import {List2} from "./layout/list/List2";
import {Isotope1} from "./layout/isotope/Isotope1";
import Grid2 from "./layout/grid/Grid2";

const RenderView = (props) => {
    const {layout, data} = props;
    return(
        <>
            {
                (layout.value == "grid1")?(
                    <Layout1 {...props} data={data}/>
                ):(layout.value == "grid2")?(
                    <Grid2 {...props} data={data}/>
                ):(layout.value == "list1")?(
                    <List1 {...props} data={data}/>
                ):(layout.value == "list2")?(
                    <List2 {...props} data={data}/>
                ):(layout.value == "isotope1")?(
                    <Isotope1 {...props} data={data}/>
                ):("")
            }
        </>
    )
}

export default RenderView;