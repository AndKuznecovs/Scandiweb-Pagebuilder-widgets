/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @vendor      Scandiweb
 * @theme       Scandipwa_pwa
 * @author      Scandiweb <info@scandiweb.com>
 * @copyright   Copyright (c) 2022 Scandiweb, Ltd (https://scandiweb.com)
 */

import { BANNER_BLOCK_WIDGET } from 'Component/BannerBlockWidget/BannerBlockWidget.config';
import BannerBlockWidget from 'Component/BannerBlockWidget/BannerBlockWidget.container';
import RenderWhenVisible from 'Component/RenderWhenVisible';

const renderMap = (member) => ({
    ...member,
    [BANNER_BLOCK_WIDGET]: {
        component: BannerBlockWidget,
    },
});

const renderContent = (args, callback, instance) => {
    const { type } = instance.props;
    console.log(instance.props);

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
