import {
    PanelBody,
    CheckboxControl,
    SelectControl,
    ToggleControl
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import $ from "jquery";

const Others = (props) =>{
    const {__} = wp.i18n;
    const {root_margin, grid_style, content_visible_permission, default_preview_image,overlay } = props.attr.attributes

    return (
        <PanelBody title={__( "Others", "the-post-grid")} initialOpen={false}>
            <SelectControl
                className="rt-tpg-others-selectcontrol rt-tpg-others-margin"
                label={__( "Margin", "the-post-grid")}
                value={root_margin}
                options={[
                    {label: __('Bootstrap Default', 'the-post-grid'), value: ""},
                    {label: __('No Margin', 'the-post-grid'), value: "no_margin"}
                ]}
                onChange={(value) =>{
                    props.attr.setAttributes({ root_margin: value })
                }
                }
            />
            <SelectControl
                className="rt-tpg-others-selectcontrol rt-tpg-others-grid-style"
                label={__( "Grid style", "the-post-grid")}
                value={grid_style}
                options={[
                    {label: __('Even', 'the-post-grid'), value: "even"},
                    {label: __('Masonry', 'the-post-grid'), value: "masonry"}
                ]}
                onChange={(value) =>{
                    props.attr.setAttributes({ grid_style: value })
                }
                }
            />
            <SelectControl
                className="rt-tpg-others-selectcontrol rt-tpg-others-content-visibility"
                label={__( "Content Will Be Visible For", "the-post-grid")}
                value={content_visible_permission}
                options={[
                    {label: __('Any', 'the-post-grid'), value: "any"},
                ]}
                onChange={(value) =>{
                    props.attr.setAttributes({ content_visible_permission: value })
                }
                }
            />

        </PanelBody>
    );
}

export default Others;