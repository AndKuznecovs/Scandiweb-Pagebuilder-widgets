<?php
/**
 * ExampleVendor_PageBuilderExampleBanner
 *
 * @category ExampleVendor
 * @package  ExampleVendor_PageBuilderExampleBanner
 * @author   John Doe <info@scandiweb.com>
 */

declare(strict_types=1);

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'ExampleVendor_PageBuilderExampleBanner',
    __DIR__
);
