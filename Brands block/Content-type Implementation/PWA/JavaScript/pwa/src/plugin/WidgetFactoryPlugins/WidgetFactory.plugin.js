/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import { BRANDS_WIDGET } from 'Component/BrandsBlockWidget/BrandsBlockWidget.config';
import BrandsBlockWidget from 'Component/BrandsBlockWidget/BrandsBlockWidget.container';
import RenderWhenVisible from 'Component/RenderWhenVisible';

const renderMap = (member) => ({
    ...member,
    [BRANDS_WIDGET]: {
        component: BrandsBlockWidget,
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
