<?php

namespace RT\RtTpgBlocks\Helpers;


use RT\RtTpgBlocks\Blocks\RtThePostGrid;

class Fns
{
    public static function getRegisteredBlocks() {
        $blocks = [
            RtThePostGrid::class,
        ];

        return apply_filters('RT_TPG_BLOCKS_registered_blocks', $blocks);
    }
}
