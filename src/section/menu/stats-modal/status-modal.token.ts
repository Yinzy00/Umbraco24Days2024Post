import { UmbModalToken } from '@umbraco-cms/backoffice/modal';
import { StatsModalType } from './stats-modal.type';

export const STATS_MODAL_ALIAS = 'POKEDEX.STATS.MODAL';

export const STATS_MODAL = new UmbModalToken<StatsModalType, boolean>(STATS_MODAL_ALIAS, {
        modal: {
            type: 'dialog',
            size: 'medium',
        },
    });
    