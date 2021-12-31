
export const PredefaultAttr = (props) =>{
    const {layout, content_padding, content_wrap, button, title_style, image, columns} = props.attributes
    // ===========================================================================
    // ========================= Grid 1 ==========================================

    if ((layout.value == 'grid1') || (layout.value == "isotope1")) {
        props.setAttributes({
            content_padding:
                {
                    ...content_padding,
                    "top": '15px',
                    'right': "15px",
                    'bottom': '15px',
                    'left': '15px'
                },

            image:
                {
                    ...image,
                    "size": '300x300',
                    'img-column': '12',
                    'content-column': '12',
                    'animation': 1.1,
                    'border-radius': '0px'
                },
            button:
                {
                    ...button,
                    "border-radius": '0px',
                    "h-boder-radius": "0px"
                },
        })

    }

    // =============================================================================
    // ============================= List 1 ========================================

    if (layout.value == 'list1') {
        props.setAttributes({
            content_padding:
                {
                    ...content_padding,
                    "top": '0px',
                    'right': "0px",
                    'bottom': '0px',
                    'left': '0px'
                },
            image:
                {
                    ...image,
                    "size": '300x300',
                    'img-column': '4',
                    'content-column': '8',
                    'animation': 1.1,
                    'border-radius': '0px'
                }
        })
    }

    // =======================================================================
    // ============================ List 2 ===================================


    if (layout.value == 'list2') {
                props.setAttributes({
                    content_padding:
                        {
                            ...content_padding,
                            "top": '0px',
                            'right': "0px",
                            'bottom': '0px',
                            'left': '0px'
                        },

                    image:
                        {
                            ...image,
                            "size": '150x150',
                            'img-column': '4',
                            'content-column': '8',
                            'animation': 1.0,
                            'border-radius': '50%'
                        }
                })
        }
}