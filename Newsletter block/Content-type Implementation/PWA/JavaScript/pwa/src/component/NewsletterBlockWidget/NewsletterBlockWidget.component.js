/* eslint-disable react/no-unused-state */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Field from 'Component/Field';
import Form from 'Component/Form';
import Image from 'Component/Image';
import Link from 'Component/Link';

import './NewsletterBlockWidget.style';

/** @namespace Pwa/Component/NewsletterBlockWidget/Component */
export class NewsletterBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSubtitle: PropTypes.string.isRequired,
        emailIconSrc: PropTypes.string.isRequired,
        emailIconAlt: PropTypes.string.isRequired,
        emailIconTitle: PropTypes.string.isRequired,
        inputText: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        rulesGeneralText: PropTypes.string.isRequired,
        rulesFirstUrl: PropTypes.string.isRequired,
        rulesSecondUrl: PropTypes.string.isRequired,
        rulesFirstText: PropTypes.string.isRequired,
        rulesSeparatorText: PropTypes.string.isRequired,
        rulesSecondText: PropTypes.string.isRequired,
        onEmailChange: PropTypes.func.isRequired,
        isTacChecked: PropTypes.bool.isRequired,
        email: PropTypes.string.isRequired,
        onCheckboxChange: PropTypes.func.isRequired,
        formSubmit: PropTypes.func.isRequired,
    };

    renderTitle() {
        const {
            blockTitle,
        } = this.props;

        return (
            <div block="Newsletter" elem="TitleWrapper">
                <span block="Newsletter" elem="Title">
                    { blockTitle }
                </span>
            </div>
        );
    }

    renderSubtitle() {
        const {
            blockSubtitle,
        } = this.props;

        return (
            <div block="Newsletter" elem="SubtitleWrapper">
                <div block="Newsletter" elem="SubtitlePlaceholder">
                    <p block="Newsletter" elem="SubtitleText">
                        { blockSubtitle }
                    </p>
                </div>
            </div>
        );
    }

    renderTACWrapper() {
        const {
            rulesGeneralText,
            rulesFirstText,
            rulesSeparatorText,
            rulesSecondText,
            rulesFirstUrl,
            rulesSecondUrl,
            onCheckboxChange,
            isTacChecked,
        } = this.props;

        return (
            <div block="Newsletter" elem="TACWrapper">
                <div block="Newsletter" elem="CheckboxField">
                    <Field
                      id="termsAndConditions"
                      block="Newsletter"
                      elem="Checkbox"
                      name="termsAndConditions"
                      type="checkbox"
                      checked={ isTacChecked }
                      onChange={ onCheckboxChange }
                    />
                </div>
                <label
                  htmlFor="email"
                  block="Newsletter"
                  elem="TACLabel"
                >
                    <span block="Newsletter" elem="TACText">
                        { rulesGeneralText }
                        <Link
                          to={ rulesFirstUrl }
                          block="Newsletter"
                          elem="TACLink"
                        >
                            { rulesFirstText }
                        </Link>
                        { rulesSeparatorText }
                        <Link
                          to={ rulesSecondUrl }
                          block="Newsletter"
                          elem="TACLink"
                        >
                           { rulesSecondText }
                        </Link>
                    </span>
                </label>
            </div>
        );
    }

    renderForm() {
        const {
            inputText,
            buttonText,
            emailIconSrc,
            emailIconAlt,
            emailIconTitle,
            onEmailChange,
            onCheckboxChange,
            email,
            isTacChecked,
            formSubmit,
        } = this.props;

        return (
            <Form block="Newsletter" elem="Form">
                <div block="Newsletter" elem="FormIcon">
                    <Image
                      src={ emailIconSrc }
                      alt={ emailIconAlt }
                      title={ emailIconTitle }
                    />
                </div>
                <div block="Newsletter" elem="FormFieldEmail">
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      isRequired
                      validation={ ['notEmpty', 'email'] }
                      value={ email }
                      placeholder={ inputText }
                      onChange={ onEmailChange(email) }
                      mix={ { block: 'Newsletter', elem: 'FormFieldInput' } }
                    />
                </div>
                <div block="Newsletter" elem="FormSubmit">
                    <button
                      block="Newsletter"
                      elem="FormSubmitButton"
                      type="submit"
                      id="submitButton"
                      disabled={ !isTacChecked }
                      onChange={ onCheckboxChange }
                      onClick={ formSubmit }
                    >
                        { buttonText }
                    </button>
                </div>
            </Form>
        );
    }

    renderNewsletterActions() {
        return (
            <div block="Newsletter" elem="ActionsWrapper">
                <div block="Newsletter" elem="Actions">
                    { this.renderForm() }
                    { this.renderTACWrapper() }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="Newsletter">
                <div block="Newsletter" elem="Wrapper">
                    { this.renderTitle() }
                    { this.renderSubtitle() }
                    { this.renderNewsletterActions() }
                </div>
            </div>
        );
    }
}

export default NewsletterBlockWidgetComponent;
