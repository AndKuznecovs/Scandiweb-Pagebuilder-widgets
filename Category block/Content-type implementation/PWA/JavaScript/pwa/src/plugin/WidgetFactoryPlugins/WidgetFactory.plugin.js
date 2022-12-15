/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Buff
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import { CATEGORY_BLOCK_WIDGET } from 'Component/CategoryBlockWidget/CategoryBlockWidget.config';
import CategoryBlockWidget from 'Component/CategoryBlockWidget/CategoryBlockWidget.container';
import RenderWhenVisible from 'Component/RenderWhenVisible';

const renderMap = (member) => ({
    ...member,
    [CATEGORY_BLOCK_WIDGET]: {
        component: CategoryBlockWidget,
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
