import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";
import {useState} from '@wordpress/element';

function General(props) {

    const {general} = props.attr.attributes
    const {__} = wp.i18n;
    const [hasheading, useHasheading] = useState(true)
	const [hastitle, useHastitle] = useState(true)
	const [hasexcerpt, useHasexcerpt] = useState(true)
	const [hascategory, useHascategory] = useState(true)
	const [hasauthor, useHasauthor] = useState(true)
	const [hasseemore, useHasseemore] = useState(true)
	const [haspost_date, useHaspost_date] = useState(true)
	const [hassocial_media, useHassocial_media] = useState(false)
	const [hascommentcount, useHascommentcount] = useState(true)
	const [hastag, useHastag] = useState(true)
	

    return (
        <PanelBody title={__( "General", "the-post-grid")} className="general_tab" initialOpen={true}>
            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Block Heading", "the-post-grid")}
                checked={ general.heading }
                onChange={ (val) => {
                    useHasheading( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "heading": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Title", "the-post-grid")}
                checked={ general.title }
                onChange={ (val) => {
                    useHastitle( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "title": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Excerpt", "the-post-grid")}
                checked={ general.excerpt }
                onChange={ (val) => {
                    useHasexcerpt( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "excerpt": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Category", "the-post-grid")}
                checked={ general.category }
                onChange={ (val) => {
                    useHascategory( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "category": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Author", "the-post-grid")}
                checked={ general.author }
                onChange={ (val) => {
                    useHasauthor( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "author": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Post Date", "the-post-grid")}
                checked={ general.post_date }
                onChange={ (val) => {
                    useHaspost_date( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "post_date": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Comment Count", "the-post-grid")}
                checked={ general.comment_count }
                onChange={ (val) => {
                    useHascommentcount( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "comment_count": val}})
                } }
            />

            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Show Read More", "the-post-grid")}
                checked={ general.see_more }
                onChange={ (val) => {
                    useHasseemore( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "see_more": val}})
                } }
            />
            <ToggleControl
                className={"rt-tpg-togglecontrol general"}
                label={__( "Social Share", "the-post-grid")}
                checked={ general.social_share }
                onChange={ (val) => {
                    useHassocial_media( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "social_share": val}})
                } }
            />

        </PanelBody>
    );
}

export default General;