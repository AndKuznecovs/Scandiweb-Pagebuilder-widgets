/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import NewsletterBlockWidget from './NewsletterBlockWidget.component';

/** @namespace Pwa/Component/NewsletterBlockWidget/Container */
export class NewsletterBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-block-subtitle': PropTypes.string.isRequired,
        'data-email-icon-src': PropTypes.string.isRequired,
        'data-email-icon-alt': PropTypes.string.isRequired,
        'data-email-icon-title': PropTypes.string.isRequired,
        'data-input-text': PropTypes.string.isRequired,
        'data-submit-button-text': PropTypes.string.isRequired,
        'data-rules-general-text': PropTypes.string.isRequired,
        'data-rules-first-url': PropTypes.string.isRequired,
        'data-rules-first-text': PropTypes.string.isRequired,
        'data-rules-separator-text': PropTypes.string.isRequired,
        'data-rules-second-url': PropTypes.string.isRequired,
        'data-rules-second-text': PropTypes.string.isRequired,
    };

    containerFunctions = {
        subscribeEmail: this.subscribeEmail.bind(this),
        onEmailChange: this.onEmailChange.bind(this),
        onCheckboxChange: this.onCheckboxChange.bind(this),
        formSubmit: this.onFormSubmit.bind(this),
    };

    state = {
        // 0: Form is visible
        // 1: Success message is visible
        // 2: Error message is visible
        subscriptionStatus: 0,
        email: '',
        isTacChecked: false,
        isFormSubmitted: false,
    };

    containerProps() {
        const {
            subscriptionStatus,
            email,
            isTacChecked,
            isFormSubmitted,
        } = this.state;
        const {
            'data-block-title': blockTitle,
            'data-block-subtitle': blockSubtitle,
            'data-email-icon-src': emailIconSrc,
            'data-email-icon-alt': emailIconAlt,
            'data-email-icon-title': emailIconTitle,
            'data-input-text': inputText,
            'data-submit-button-text': buttonText,
            'data-rules-general-text': rulesGeneralText,
            'data-rules-first-url': rulesFirstUrl,
            'data-rules-first-text': rulesFirstText,
            'data-rules-separator-text': rulesSeparatorText,
            'data-rules-second-url': rulesSecondUrl,
            'data-rules-second-text': rulesSecondText,
        } = this.props;

        return {
            blockTitle,
            blockSubtitle,
            emailIconSrc,
            emailIconAlt,
            emailIconTitle,
            inputText,
            buttonText,
            rulesGeneralText,
            rulesFirstUrl,
            rulesFirstText,
            rulesSeparatorText,
            rulesSecondUrl,
            rulesSecondText,
            subscriptionStatus,
            email,
            isTacChecked,
            isFormSubmitted,
        };
    }

    /**
     * Creates a specific request with given email to subscribe it to the
     * appropriate list on Klaviyo. Then calls a fetch function and waits
     * for a response. Appropriately updates 'subscriptionStatus' state.
     * @param {String} email email which will be subscribed to the newsletter
     */
    subscribeEmail(email) {
        /**
         * Here you can implement the query you need for your project specifically
         * */

        const request = new XMLHttpRequest();
        request.open('POST', 'https://scandiweb.com/');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({
            query: `${email}`,
        }));
    }

    onEmailChange(email) {
        this.setState({ email });
    }

    onCheckboxChange() {
        this.setState(({ isTacChecked }) => (
            { isTacChecked: !isTacChecked }
        ));
    }

    onFormSubmit() {
        const { email, isTacChecked } = this.state;

        if (!isTacChecked) {
            return;
        }

        this.setState({ isFormSubmitted: true });
        this.subscribeEmail(email);
    }

    render() {
        return (
            <NewsletterBlockWidget
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default NewsletterBlockWidgetContainer;
