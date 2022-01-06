
export const PredefaultAttr = (props) =>{
    const {layout, content_padding, content_wrap, button, title_style, image, columns} = props.attributes
    // ===========================================================================
    // ========================= Grid 1 ==========================================

    if ((layout.value == 'grid1') || (layout.value == "isotope1")) {
        props.setAttributes({


            image:
                {
                    ...image,
                    'img-column': '12',
                    'content-column': '12',
                    'border-radius': '0px'
                },
        })

    }

    // =============================================================================
    // ============================= List 1 ========================================

    if (layout.value == 'list1') {
        props.setAttributes({
            image:
                {
                    ...image,
                    'img-column': '4',
                    'content-column': '8',
                    'border-radius': '0px'
                }
        })
    }

    // =======================================================================
    // ============================ List 2 ===================================


    if (layout.value == 'list2') {
                props.setAttributes({
                    image:
                        {
                            ...image,
                            'img-column': '4',
                            'content-column': '8',
                            'border-radius': '50%'
                        }
                })
        }
}