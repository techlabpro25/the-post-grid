<?php

namespace RT\RadiusBlocks\Helpers;


use RT\RadiusBlocks\Blocks\RtThePostGrid;

class Fns
{
    public static function getRegisteredBlocks() {
        $blocks = [
            RtThePostGrid::class,
        ];

        return apply_filters('rt_radius_blocks_registered_blocks', $blocks);
    }
}
