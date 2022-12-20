<?php
/**
 * Scandiweb_PageBuilderBannerBlock
 *
 * @category Scandiweb
 * @package  Scandiweb_PageBuilderExampleBanner
 * @author   Scandiweb <info@scandiweb.com>
 */

declare(strict_types=1);

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'Scandiweb_PageBuilderBannerBlock',
    __DIR__
);
