/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Image from 'Component/Image';
import Link from 'Component/Link';

import './ExampleBannerWidget.style';

/** @namespace Pwa/Component/ExampleBannerWidget/Component */
export class ExampleBannerWidgetComponent extends PureComponent {
    static propTypes = {
        bannerTitle: PropTypes.string.isRequired,
        bannerImageSrc: PropTypes.string.isRequired,
        bannerImageAlt: PropTypes.string.isRequired,
        bannerImageTitle: PropTypes.string.isRequired,
        buttonUrl: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        descriptionSteps: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                icon: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                    alt: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                }),
            }).isRequired
        ).isRequired,
    };

    renderBannerImage() {
        const {
            bannerImageSrc,
            bannerImageAlt,
            bannerImageTitle,
        } = this.props;

        return (
            <div block="ExampleBanner" elem="BannerImage">
                <Image
                  src={ bannerImageSrc }
                  alt={ bannerImageAlt }
                  title={ bannerImageTitle }
                />
            </div>
        );
    }

    renderDescriptionTitle() {
        const {
            bannerTitle,
        } = this.props;

        return (
            <div block="ExampleBanner" elem="DescriptionTitle">
                <span>
                    { bannerTitle }
                </span>
            </div>
        );
    }

    renderDescriptionSteps() {
        const {
            descriptionSteps,
        } = this.props;
        console.log(this.props);

        return (
            <div block="ExampleBanner" elem="DescriptionSteps">
                { descriptionSteps.map(({ text, icon: { src: iconSrc, alt: iconAlt, title: iconTitle } }, index) => {
                    const stepNumberText = `${index + 1}.`;

                    return (
                        <div
                          block="ExampleBanner"
                          elem="DescriptionStepWrapper"
                          key={ stepNumberText }
                        >
                            <div block="ExampleBanner" elem="DescriptionStepContent">
                                <span block="ExampleBanner" elem="Icon">
                                    <Image
                                      src={ iconSrc }
                                      alt={ iconAlt }
                                      title={ iconTitle }
                                    />
                                </span>
                                <span block="ExampleBanner" elem="DescriptionStepText">
                                    <span
                                      block="ExampleBanner"
                                      elem="DescriptionStepText"
                                      mods={ { number: true } }
                                    >
                                        { stepNumberText }
                                    </span>
                                    <span>{ text }</span>
                                </span>
                            </div>
                        </div>
                    );
                }) }
            </div>
        );
    }

    renderDescriptionActions() {
        const {
            buttonUrl,
            buttonText,
        } = this.props;

        return (
            <div block="ExampleBanner" elem="DescriptionActions">
                <Link
                  to={ buttonUrl }
                  block="Button"
                >
                    <span>{ buttonText }</span>
                </Link>
            </div>
        );
    }

    renderBannerDescription() {
        return (
            <div block="ExampleBanner" elem="Description">
                { this.renderDescriptionTitle() }
                { this.renderDescriptionSteps() }
                { this.renderDescriptionActions() }
            </div>
        );
    }

    render() {
        return (
            <div block="ExampleBanner">
                { this.renderBannerImage() }
                { this.renderBannerDescription() }
            </div>
        );
    }
}

export default ExampleBannerWidgetComponent;
