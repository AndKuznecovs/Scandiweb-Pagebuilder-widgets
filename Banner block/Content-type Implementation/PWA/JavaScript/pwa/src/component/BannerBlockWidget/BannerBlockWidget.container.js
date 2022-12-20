/* eslint-disable no-magic-numbers */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import {PureComponent} from 'react';

import BannerBlockWidget from './BannerBlockWidget.component';

/** @namespace Pwa/Component/BannerBlockWidget/Container */
export class BannerBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-banner-title': PropTypes.string.isRequired,
        'data-banner-subtitle': PropTypes.string.isRequired,
        'data-banner-image-src': PropTypes.string.isRequired,
        'data-banner-image-alt': PropTypes.string.isRequired,
        'data-banner-image-title': PropTypes.string.isRequired,
        'data-button-url': PropTypes.string.isRequired,
        'data-button-text': PropTypes.string.isRequired,
        'data-button-color': PropTypes.string.isRequired,
    };

    containerProps() {
        const {
            'data-banner-title': bannerTitle,
            'data-banner-subtitle': bannerSubtitle,
            'data-banner-image-src': bannerImageSrc,
            'data-banner-image-alt': bannerImageAlt,
            'data-banner-image-title': bannerImageTitle,
            'data-button-url': buttonUrl,
            'data-button-text': buttonText,
            'data-button-color': buttonColor,
        } = this.props;

        return {
            bannerTitle,
            bannerSubtitle,
            bannerImageSrc,
            bannerImageAlt,
            bannerImageTitle,
            buttonUrl,
            buttonText,
            buttonColor,
        };
    }

    render() {
        return (
            <BannerBlockWidget
                {...this.containerProps()}
            />
        );
    }
}

export default BannerBlockWidgetContainer;
