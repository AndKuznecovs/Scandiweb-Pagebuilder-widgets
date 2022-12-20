/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import {PureComponent} from 'react';

import Image from 'Component/Image';
import Link from 'Component/Link';

import './BannerBlockWidget.style';

/** @namespace Pwa/Component/BannerBlockWidget/Component */
export class BannerBlockWidgetComponent extends PureComponent {
    static propTypes = {
        bannerTitle: PropTypes.string.isRequired,
        bannerSubtitle: PropTypes.string.isRequired,
        bannerImageSrc: PropTypes.string.isRequired,
        bannerImageAlt: PropTypes.string.isRequired,
        bannerImageTitle: PropTypes.string.isRequired,
        buttonUrl: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        buttonColor: PropTypes.string.isRequired,
    };

    renderBannerImage() {
        const {
            bannerImageSrc,
            bannerImageAlt,
            bannerImageTitle,
        } = this.props;

        return (
            <div block="BannerBlock" elem="BannerImage">
                <Image
                    src={bannerImageSrc}
                    alt={bannerImageAlt}
                    title={bannerImageTitle}
                />
            </div>
        );
    }

    renderDescriptionTitle() {
        const {
            bannerTitle,
        } = this.props;

        return (
            <div block="DescriptionContent" elem="Title">
                <span>
                    {bannerTitle}
                </span>
            </div>
        );
    }

    renderDescriptionSubtitle() {
        const {
            bannerSubtitle,
        } = this.props;

        return (
            <div block="DescriptionContent" elem="Subtitle">
                <span>
                    {bannerSubtitle}
                </span>
            </div>
        );
    }

    renderDescriptionActions() {
        const {
            buttonUrl,
            buttonText,
            buttonColor,
        } = this.props;

        // TODO: implement update for "0" int values passed from BE when not set
        if (buttonUrl === 0 && buttonText === 0 && buttonColor === 0) {
            return null;
        }

        return (
            <div block="BannerBlock" elem="DescriptionActions">
                <Link
                    to={buttonUrl}
                    block="Button"
                    style={{'background-color': buttonColor}}
                >
                    <span>{buttonText}</span>
                </Link>
            </div>
        );
    }

    renderBannerDescription() {
        return (
            <div block="BannerBlock" elem="Description">
                <div block="BannerBlock" elem="DescriptionContent">
                    {this.renderDescriptionTitle()}
                    {this.renderDescriptionSubtitle()}
                </div>
                {this.renderDescriptionActions()}
            </div>
        );
    }

    render() {
        return (
            <div block="BannerBlock">
                {this.renderBannerImage()}
                {this.renderBannerDescription()}
            </div>
        );
    }
}

export default BannerBlockWidgetComponent;
