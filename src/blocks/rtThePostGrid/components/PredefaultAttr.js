const {useState, useEffect} = wp.element;
const PredefaultAttr = (props) =>{
    const {layout, content_padding, content_wrap, button, title_style, image, columns, general} = props.attr.attributes
    useEffect(()=>{

        if(general.presdefault == true ) {
            
            // ===========================================================================
            // ========================= Grid 1 ==========================================

            if (layout.value == 'grid1') {
                if ((content_padding.top == "") && (content_padding.right == "") && (content_padding.bottom == "") && (content_padding.left == "")) {
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
                }

                if ((content_wrap["border-width"] == "") && (content_wrap["border-color"] == "") && (content_wrap["background-color"] == "")) {
                    props.attr.setAttributes({
                        content_wrap:
                            {
                                ...content_wrap,
                                "border-width": '1px',
                                "border-color": "#d9d9d9",
                                "background-color": '#fff'
                            }
                    })
                }

                if ((image.size == "") && (image['img-column'] == "") && (image['content-column'] == "") && (image.animation == null)) {
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
                }

                if (columns.desktop == "") {
                    props.attr.setAttributes({
                        columns:
                            {
                                ...columns,
                                "desktop": '4'
                            }
                    })
                }

                if ((button['border-radius'] == "") && (button['h-boder-radius'] == "")) {
                    props.attr.setAttributes({
                        button:
                            {
                                ...button,
                                "border-radius": '0px',
                                "h-boder-radius": "0px"
                            }
                    })
                }

                if ((title_style['font-weight'] == null)) {
                    props.attr.setAttributes({
                        title_style:
                            {
                                ...title_style,
                                "font-weight": 500
                            }
                    })
                }
            }

            // =============================================================================
            // ============================= List 1 ========================================

            if (layout.value == 'list1') {
                if ((content_padding.top == "") && (content_padding.right == "") && (content_padding.bottom == "") && (content_padding.left == "")) {
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
                }

                if ((content_wrap["border-width"] == "") && (content_wrap["border-color"] == "") && (content_wrap["background-color"] == "")) {
                    props.attr.setAttributes({
                        content_wrap:
                            {
                                ...content_wrap,
                                "border-width": '0px',
                                "border-color": "transparent",
                                "background-color": 'transparent'
                            }
                    })
                }



                if ((title_style['font-weight'] == null)) {
                    props.attr.setAttributes({
                            title_style:
                                {
                                    ...title_style,
                                    "font-weight": 400
                                }
                        }
                    )
                }
                if (columns.desktop == "") {
                    props.attr.setAttributes({
                            columns:
                                {
                                    ...columns,
                                    "desktop": '6'
                                }
                        }
                    )
                }
                if ((image.size == "") && (image['img-column'] == "") && (image['content-column'] == "") && (image.animation == null)) {
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
                }
            }

            // =======================================================================
            // ============================ List 2 ===================================


            if (layout.value == 'list2') {
                if ((content_padding.top == "") && (content_padding.right == "") && (content_padding.bottom == "") && (content_padding.left == "")) {
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
                }
                if ((content_wrap["border-width"] == "") && (content_wrap["border-color"] == "") && (content_wrap["background-color"] == "")) {
                    props.attr.setAttributes({
                        content_wrap:
                            {
                                ...content_wrap,
                                "border-width": '0px',
                                "border-color": "transparent",
                                "background-color": 'transparent'
                            }
                    })
                }

                console.log(content_wrap)
                if ((title_style['font-weight'] == null)) {
                    props.attr.setAttributes({
                            title_style:
                                {
                                    ...title_style,
                                    "font-weight": 400
                                }
                        }
                    )
                }

                if (columns.desktop == "") {
                    props.attr.setAttributes({
                            columns:
                                {
                                    ...columns,
                                    "desktop": '6'
                                }
                        }
                    )
                }
                if ((image.size == "") && (image['img-column'] == "") && (image['content-column'] == "") && (image.animation == null)) {
                    props.attr.setAttributes({
                            image:
                                {
                                    ...image,
                                    "size": '150x150',
                                    'img-column': '4',
                                    'content-column': '8',
                                    'animation': 1.0
                                }
                        }
                    )
                }

                props.attr.setAttributes({
                    image: {
                        ...image,
                        "size": '150x150',
                        'img-column': '4',
                        'content-column': '8',
                        'animation': 1.0
                    }
                })
            }

        }

    }, [layout.value])
    return null
}
export default PredefaultAttr;