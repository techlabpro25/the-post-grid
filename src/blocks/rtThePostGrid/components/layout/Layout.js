import { PanelBody, RadioControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import $ from 'jquery'

function Layout(props) {
	const {__} = wp.i18n;
	const  {layout, plugin_path, general} = props.attr.attributes;

	const clickHandler = (e) =>{
		props.attr.setAttributes({layout: {...layout, 'type': e.target.value}})

		if($('.rt-tpg-layout-control-parent input.active').hasClass('active')){
			$('.rt-tpg-layout-control-parent input.active').removeClass('active');
			$('.rt-tpg-layout-control-parent .'+e.target.value).addClass("active");
		}else{
			$('.rt-tpg-layout-control-parent .'+e.target.value).addClass("active");
		}
	}

	const layoutClickHandler = (e) =>{
		props.attr.setAttributes({layout: {...layout, 'value': e.target.value}})
		props.attr.setAttributes({general: {...general, 'presdefault': true}})

		if($('.rt-tpg-layout-control-child input.active').hasClass('active')){
			$('.rt-tpg-layout-control-child input.active').removeClass('active');
			$('.rt-tpg-layout-control-child .'+e.target.value).addClass("active");
		}else{
			$('.rt-tpg-layout-control-child .'+e.target.value).addClass("active");
		}
	}

	useEffect(() =>{
		if(layout.type.length != 0){
			$('.rt-tpg-layout-control-parent .'+layout.type).addClass("active");
		}
		if(layout.value.length != 0){
			$('.rt-tpg-layout-control-child .'+layout.value).addClass("active");
		}
	}, [])


	return (
		<PanelBody title={__( "Layout Type", "the-post-grid")} initialOpen={true}>
			<div className="rt-tpg-layout-control-parent">
				<label>{__( "Layout Type:", "the-post-grid")}</label>
				<label>
					<input className={`grid`} type="radio" name="laytype" value="grid" onClick={clickHandler}/>
					<img src={plugin_path+'grid.png'}/>
				</label>

				<label>
					<input className={"list"} type="radio" name="laytype" value="list" onClick={clickHandler}/>
					<img src={plugin_path+'list.png'}/>
				</label>

				{/*<label>*/}
				{/*	<input className={"isotope"} type="radio" name="laytype" value="isotope" onClick={clickHandler}/>*/}
				{/*	<img src={plugin_path+'isotope.png'}/>*/}
				{/*</label>*/}
			</div>

			<div className="rt-tpg-layout-control-child">
				<label>{__( "Layout: ", "the-post-grid")}</label>
				{
					layout.type == "grid"?(
						<label>
							<input className={`grid1`} type="radio" name="layout" value="grid1" onClick={layoutClickHandler}/>
							<img src={plugin_path+'grid1.png'}/>
						</label>
					):("")
				}

				{
					layout.type == "list"?(
						<>
							<label>
								<input className={"list1"} type="radio" name="layout" value="list1" onClick={layoutClickHandler}/>
								<img src={plugin_path+'list1.png'}/>
							</label>
							<label>
								<input className={"list2"} type="radio" name="layout" value="list2" onClick={layoutClickHandler}/>
								<img src={plugin_path+'list2.png'}/>
							</label>
						</>
					):("")
				}

				{/*{*/}
				{/*	layout.type == "isotope"?(*/}
				{/*		<label>*/}
				{/*			<input className={"isotope1"} type="radio" name="layout" value="isotope1" onClick={layoutClickHandler}/>*/}
				{/*			<img src={plugin_path+'isotope1.png'}/>*/}
				{/*		</label>*/}
				{/*	):("")*/}
				{/*}*/}


			</div>
		</PanelBody>
	);
}

export default Layout;