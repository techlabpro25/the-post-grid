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
	const [hascommentcount, useHascommentcount] = useState(true)
	const [hastag, useHastag] = useState(true)
	

    return (
        <PanelBody title={__( "General", "the-post-grid")} className="general_tab" initialOpen={true}>
            <ToggleControl
                label={__( "Block Heading", "the-post-grid")}
                checked={ general.heading }
                onChange={ (val) => {
                    useHasheading( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "heading": val}})
                } }
            />

            <ToggleControl
                label={__( "Title", "the-post-grid")}
                checked={ general.title }
                onChange={ (val) => {
                    useHastitle( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "title": val}})
                } }
            />

            <ToggleControl
                label={__( "Excerpt", "the-post-grid")}
                checked={ general.excerpt }
                onChange={ (val) => {
                    useHasexcerpt( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "excerpt": val}})
                } }
            />

            <ToggleControl
                label={__( "Category", "the-post-grid")}
                checked={ general.category }
                onChange={ (val) => {
                    useHascategory( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "category": val}})
                } }
            />

            <ToggleControl
                label={__( "Author", "the-post-grid")}
                checked={ general.author }
                onChange={ (val) => {
                    useHasauthor( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "author": val}})
                } }
            />

            <ToggleControl
                label={__( "Post Date", "the-post-grid")}
                checked={ general.post_date }
                onChange={ (val) => {
                    useHaspost_date( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "post_date": val}})
                } }
            />

            <ToggleControl
                label={__( "Tag", "the-post-grid")}
                checked={ general.tag }
                onChange={ (val) => {
                    useHastag( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "tag": val}})
                } }
            />

            <ToggleControl
                label={__( "Comment Count", "the-post-grid")}
                checked={ general.comment_count }
                onChange={ (val) => {
                    useHascommentcount( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "comment_count": val}})
                } }
            />

            <ToggleControl
                label={__( "Read More", "the-post-grid")}
                checked={ general.see_more }
                onChange={ (val) => {
                    useHasseemore( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "see_more": val}})
                } }
            />
        </PanelBody>
    );
}

export default General;