/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import { NEWSLETTER_BLOCK_WIDGET } from 'Component/NewsletterBlockWidget/NewsletterBlockWidget.config';
import NewsletterBlockWidget from 'Component/NewsletterBlockWidget/NewsletterBlockWidget.container';
import RenderWhenVisible from 'Component/RenderWhenVisible';

const renderMap = (member) => ({
    ...member,
    [NEWSLETTER_BLOCK_WIDGET]: {
        component: NewsletterBlockWidget,
    },
});

const renderContent = (args, callback, instance) => {
    const { type } = instance.props;

    const {
        component: Widget,
        fallback,
    } = instance.renderMap[type] || {};

    if (Widget !== undefined) {
        return (
            <RenderWhenVisible fallback={ fallback }>
                <Widget { ...instance.props } />
            </RenderWhenVisible>
        );
    }

    return null;
};

export default {
    'Component/WidgetFactory/Component': {
        'member-function': {
            renderContent,
        },
        'member-property': {
            renderMap,
        },
    },
};
