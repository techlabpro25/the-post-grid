import {
    PanelBody,
    __experimentalText as Text,
    SelectControl,
    Button
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { useState, useEffect } from "@wordpress/element";
import $ from "jquery";
const ALLOWED_MEDIA_TYPES = [ 'image' ];


const Others = (props) =>{
    const {__} = wp.i18n;
    const {root_margin, grid_style, content_visible_permission, default_preview_image } = props.attr.attributes

    return (
        <PanelBody title={__( "Others", "the-post-grid")} initialOpen={false}>
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

            <Text>
                {__("Default Preview Image", "the-post-grid")}
            </Text>
            <div className="rt-tpg-image-review-panel">
                {
                    (default_preview_image?.url !== "") && (default_preview_image?.url != undefined)?(
                        <div className="rt-tpg-default-image-preview">
                            <img src={default_preview_image?.url}/>
                        </div>
                    ):(
                        <div className="rt-tpg-no-preview-image">
                            {__("No Image Available", "the-post-grid")}
                        </div>
                    )
                }
            </div>
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={ ( media ) =>
                        {
                            props.attr.setAttributes({
                                default_preview_image:
                                    {
                                        ...default_preview_image,
                                        'id': media.id,
                                        'url': media.url
                                    }
                            })
                        }

                    }
                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                    value={ (default_preview_image?.id === undefined)? 0: default_preview_image.id }
                    render={ ( { open } ) => (
                        <div className="rt-tpg-media-upload">
                            <Button
                                className="rt-tpg-media-button upload"
                                icon="upload"
                                onClick={ open }
                            >{__("Upload", 'the-post-grid')}</Button>
                            {
                                (default_preview_image?.url !== "") && (default_preview_image?.url != undefined)?(
                                    <>
                                        <Button
                                            className="rt-tpg-media-button remove"
                                            icon="trash"
                                            onClick={ ()=>{
                                                props.attr.setAttributes({
                                                    default_preview_image:
                                                        {
                                                            ...default_preview_image,
                                                            'id': 0,
                                                            'url': ""
                                                        }
                                                })
                                            } }
                                        >{__("Remove", 'the-post-grid')}</Button>
                                    </>
                                ):("")
                            }
                        </div>

                    ) }
                />
            </MediaUploadCheck>


        </PanelBody>
    );
}

export default Others;