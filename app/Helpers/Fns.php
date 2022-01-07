<?php

namespace RT\ThePostGrid\Helpers;


use RT\ThePostGrid\Blocks\RtThePostGrid;

class Fns
{
    public static function getRegisteredBlocks() {
        $blocks = [
            RtThePostGrid::class,
        ];

        return apply_filters('RT_TPG_BLOCKS_registered_blocks', $blocks);
    }
}
