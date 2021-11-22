import Layout1 from "./layout/grid/Layout1";

const RenderView = (props) => {
    const {layout, data} = props;

    return(
        <>
            {
                (layout.value == "grid1")?(
                    <Layout1 {...props} data={data}/>
                ):("")
            }
        </>
    )
}

export default RenderView;