import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";
import {useState} from '@wordpress/element';

function General(props) {

    const {general} = props.attr.attributes

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
        <PanelBody title="General" className="general_tab" initialOpen={true}>
            <ToggleControl
                label="Heading"
                checked={ general.heading }
                onChange={ (val) => {
                    useHasheading( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "heading": val}})
                } }
            />

            <ToggleControl
                label="Title"
                checked={ general.title }
                onChange={ (val) => {
                    useHastitle( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "title": val}})
                } }
            />

            <ToggleControl
                label="Excerpt"
                checked={ general.excerpt }
                onChange={ (val) => {
                    useHasexcerpt( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "excerpt": val}})
                } }
            />

            <ToggleControl
                label="Category"
                checked={ general.category }
                onChange={ (val) => {
                    useHascategory( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "category": val}})
                } }
            />

            <ToggleControl
                label="Author"
                checked={ general.author }
                onChange={ (val) => {
                    useHasauthor( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "author": val}})
                } }
            />

            <ToggleControl
                label="Post Date"
                checked={ general.post_date }
                onChange={ (val) => {
                    useHaspost_date( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "post_date": val}})
                } }
            />

            <ToggleControl
                label="Tag"
                checked={ general.tag }
                onChange={ (val) => {
                    useHastag( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "tag": val}})
                } }
            />

            <ToggleControl
                label="Comment Count"
                checked={ general.comment_count }
                onChange={ (val) => {
                    useHascommentcount( ( state ) => ! state );
                    props.attr.setAttributes({general: {...general, "comment_count": val}})
                } }
            />

            <ToggleControl
                label="Read More"
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