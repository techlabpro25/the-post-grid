const {useState, useEffect} = wp.element;
const PredefaultAttr = (props) =>{
    const [difbool, setDifbool] = useState(false)
    const {layout, content_padding, content_wrap, button, title_style, image, columns, general} = props.attr.attributes
    useEffect(()=>{
        // if(difbool) {
            // ===========================================================================
            // ========================= Grid 1 ==========================================

            if (layout.value == 'grid1') {
                props.attr.setAttributes({
                    content_padding:
                        {
                            ...content_padding,
                            "top": '15px',
                            'right': "15px",
                            'bottom': '15px',
                            'left': '15px'
                        }
                })

                props.attr.setAttributes({
                    content_wrap:
                        {
                            ...content_wrap,
                            "border-width": '1px',
                            "border-color": "#d9d9d9",
                            "background-color": '#fff'
                        }
                })
                props.attr.setAttributes({
                        image:
                            {
                                ...image,
                                "size": '300x300',
                                'img-column': '12',
                                'content-column': '12',
                                'animation': 1.1
                            }
                    }
                )
                props.attr.setAttributes({
                    columns:
                        {
                            ...columns,
                            "desktop": '4'
                        }
                })
                props.attr.setAttributes({
                    button:
                        {
                            ...button,
                            "border-radius": '0px',
                            "h-boder-radius": "0px"
                        }
                })
                if ((title_style['font-weight'] == null)) {
                    props.attr.setAttributes({
                        title_style:
                            {
                                ...title_style,
                                "font-weight": 500
                            }
                    })
                }



                // if ((content_padding.top == "") && (content_padding.right == "") && (content_padding.bottom == "") && (content_padding.left == "")) {
                //
                // }
                //
                // if ((content_wrap["border-width"] == "") && (content_wrap["border-color"] == "") && (content_wrap["background-color"] == "")) {
                //
                // }
                //
                // if ((image.size == "") && (image['img-column'] == "") && (image['content-column'] == "") && (image.animation == null)) {
                //
                // }
                //
                // if (columns.desktop == "") {
                //
                // }
                //
                //
                // if ((button['border-radius'] == "") && (button['h-boder-radius'] == "")) {
                //
                // }


            }

            // =============================================================================
            // ============================= List 1 ========================================

            if (layout.value == 'list1') {
                props.attr.setAttributes({
                    content_padding:
                        {
                            ...content_padding,
                            "top": '0px',
                            'right': "0px",
                            'bottom': '0px',
                            'left': '0px'
                        }
                })
                props.attr.setAttributes({
                        columns:
                            {
                                ...columns,
                                "desktop": '6'
                            }
                    }
                )
                props.attr.setAttributes({
                    content_wrap:
                        {
                            ...content_wrap,
                            "border-width": '0px',
                            "border-color": "transparent",
                            "background-color": 'transparent'
                        }
                })
                props.attr.setAttributes({
                    title_style:
                        {
                            ...title_style,
                            "font-weight": 400
                        }
                })

                props.attr.setAttributes({
                        image:
                            {
                                ...image,
                                "size": '300x300',
                                'img-column': '4',
                                'content-column': '8',
                                'animation': 1.1
                            }
                    }
                )
                // if ((content_padding.top == "") && (content_padding.right == "") && (content_padding.bottom == "") && (content_padding.left == "")) {
                //
                // }
                //
                // if ((content_wrap["border-width"] == "") && (content_wrap["border-color"] == "") && (content_wrap["background-color"] == "")) {
                //
                // }
                //
                //
                // if ((title_style['font-weight'] == null)) {
                //
                // }
                //
                // if (columns.desktop == "") {
                //
                // }
                // if ((image.size == "") && (image['img-column'] == "") && (image['content-column'] == "") && (image.animation == null)) {
                //
                // }
            }

            // =======================================================================
            // ============================ List 2 ===================================


            if (layout.value == 'list2') {
                props.attr.setAttributes({
                    content_padding:
                        {
                            ...content_padding,
                            "top": '0px',
                            'right': "0px",
                            'bottom': '0px',
                            'left': '0px'
                        }
                })
                props.attr.setAttributes({
                    content_wrap:
                        {
                            ...content_wrap,
                            "border-width": '0px',
                            "border-color": "transparent",
                            "background-color": 'transparent'
                        }
                })
                props.attr.setAttributes({
                    title_style:
                        {
                            ...title_style,
                            "font-weight": 400
                        }
                })

                props.attr.setAttributes({
                    columns:
                        {
                            ...columns,
                            "desktop": '6'
                        }
                })
                props.attr.setAttributes({
                    image:
                        {
                            ...image,
                            "size": '150x150',
                            'img-column': '4',
                            'content-column': '8',
                            'animation': 1.0
                        }
                })
                props.attr.setAttributes({
                    image: {
                        ...image,
                        "size": '150x150',
                        'img-column': '4',
                        'content-column': '8',
                        'animation': 1.0
                    }
                })

                // if ((content_padding.top == "") && (content_padding.right == "") && (content_padding.bottom == "") && (content_padding.left == "")) {
                //
                // }
                // if ((content_wrap["border-width"] == "") && (content_wrap["border-color"] == "") && (content_wrap["background-color"] == "")) {
                //
                // }
                //
                // if ((title_style['font-weight'] == null)) {
                //
                // }
                //
                // if (columns.desktop == "") {
                //
                // }
                // if ((image.size == "") && (image['img-column'] == "") && (image['content-column'] == "") && (image.animation == null)) {
                //
                // }


            // }

        }

    }, [layout.value])
    return null
}
export default PredefaultAttr;