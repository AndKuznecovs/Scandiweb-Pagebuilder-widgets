/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Buff
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import { EXAMPLE_BANNER_WIDGET } from 'Component/ExampleBannerWidget/ExampleBannerWidget.config';
import ExampleBannerWidget from 'Component/ExampleBannerWidget/ExampleBannerWidget.container';
import RenderWhenVisible from 'Component/RenderWhenVisible';


const renderMap = (member) => ({
    ...member,
    [EXAMPLE_BANNER_WIDGET]: {
        component: ExampleBannerWidget,
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
