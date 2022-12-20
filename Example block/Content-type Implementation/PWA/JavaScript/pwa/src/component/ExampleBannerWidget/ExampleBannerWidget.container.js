/* eslint-disable no-magic-numbers */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import ExampleBannerWidget from './ExampleBannerWidget.component';

/** @namespace Pwa/Component/ExampleBannerWidget/Container */
export class ExampleBannerWidgetContainer extends PureComponent {
    static propTypes = {
        'data-banner-title': PropTypes.string.isRequired,
        'data-banner-image-src': PropTypes.string.isRequired,
        'data-banner-image-alt': PropTypes.string.isRequired,
        'data-banner-image-title': PropTypes.string.isRequired,
        'data-stepone-icon-src': PropTypes.string.isRequired,
        'data-stepone-icon-alt': PropTypes.string.isRequired,
        'data-stepone-icon-title': PropTypes.string.isRequired,
        'data-stepone-text': PropTypes.string.isRequired,
        'data-steptwo-icon-src': PropTypes.string.isRequired,
        'data-steptwo-icon-alt': PropTypes.string.isRequired,
        'data-steptwo-icon-title': PropTypes.string.isRequired,
        'data-steptwo-text': PropTypes.string.isRequired,
        'data-stepthree-icon-src': PropTypes.string.isRequired,
        'data-stepthree-icon-alt': PropTypes.string.isRequired,
        'data-stepthree-icon-title': PropTypes.string.isRequired,
        'data-stepthree-text': PropTypes.string.isRequired,
        'data-stepfour-icon-src': PropTypes.string.isRequired,
        'data-stepfour-icon-alt': PropTypes.string.isRequired,
        'data-stepfour-icon-title': PropTypes.string.isRequired,
        'data-stepfour-text': PropTypes.string.isRequired,
        'data-button-url': PropTypes.string.isRequired,
        'data-button-text': PropTypes.string.isRequired,
    };

    state = {
        descriptionSteps: [],
    };

    __construct(props) {
        super.__construct(props);

        const { descriptionSteps } = this.state;
        const {
            'data-stepone-icon-src': steponeIconSrc,
            'data-stepone-icon-alt': steponeIconAtl,
            'data-stepone-icon-title': steponeIconTitle,
            'data-stepone-text': steponeText,
            'data-steptwo-icon-src': steptwoIconSrc,
            'data-steptwo-icon-alt': steptwoIconAtl,
            'data-steptwo-icon-title': steptwoIconTitle,
            'data-steptwo-text': steptwoText,
            'data-stepthree-icon-src': stepthreeIconSrc,
            'data-stepthree-icon-alt': stepthreeIconAtl,
            'data-stepthree-icon-title': stepthreeIconTitle,
            'data-stepthree-text': stepthreeText,
            'data-stepfour-icon-src': stepfourIconSrc,
            'data-stepfour-icon-alt': stepfourIconAtl,
            'data-stepfour-icon-title': stepfourIconTitle,
            'data-stepfour-text': stepfourText,
        } = this.props;

        descriptionSteps.push(...[
            {
                text: steponeText,
                icon: { src: steponeIconSrc, alt: steponeIconAtl, title: steponeIconTitle },
            },
            {
                text: steptwoText,
                icon: { src: steptwoIconSrc, alt: steptwoIconAtl, title: steptwoIconTitle },
            },
            {
                text: stepthreeText,
                icon: { src: stepthreeIconSrc, alt: stepthreeIconAtl, title: stepthreeIconTitle },
            },
            {
                text: stepfourText,
                icon: { src: stepfourIconSrc, alt: stepfourIconAtl, title: stepfourIconTitle },
            },
        ]);
    }

    containerProps() {
        const { descriptionSteps } = this.state;
        const {
            'data-banner-title': bannerTitle,
            'data-banner-image-src': bannerImageSrc,
            'data-banner-image-alt': bannerImageAlt,
            'data-banner-image-title': bannerImageTitle,
            'data-button-url': buttonUrl,
            'data-button-text': buttonText,
        } = this.props;

        return {
            bannerTitle,
            bannerImageSrc,
            bannerImageAlt,
            bannerImageTitle,
            buttonUrl,
            buttonText,
            descriptionSteps,
        };
    }

    render() {
        return (
            <ExampleBannerWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default ExampleBannerWidgetContainer;
