import { ManifestEntityAction, ManifestMenu, ManifestMenuItem, ManifestModal, ManifestSectionSidebarApp  } from '@umbraco-cms/backoffice/extension-registry';
import { SECTION_ALAIS } from '../manifest.ts';
import { STATS_MODAL_ALIAS } from './stats-modal/status-modal.token.ts';

const SIDEBARAPP_ALIAS = 'MySite.PokedexSidebarApp';
const MENU_ALIAS = 'MySite.PokedexMenu';
const MENUITEM_ALIAS = 'MySite.PokedexMenuItems';
export const POKEMON_ENTITY_TYPE = 'MySite.PokemonEntity';

const sidebarAppManifest: ManifestSectionSidebarApp =
{
    type: 'sectionSidebarApp',
    kind: 'menuWithEntityActions',
    alias: SIDEBARAPP_ALIAS,
    name: 'Pokedex Sidebar App',
    meta: {
        label: "Pokemon",
        menu: MENU_ALIAS
    },
    conditions: [
        {
            alias: "Umb.Condition.SectionAlias",
            match: SECTION_ALAIS
        }
    ]
};

const menuManifest: ManifestMenu =
{
    type: 'menu',
    alias: MENU_ALIAS,
    name: 'Pokedex Menu'
};

const menuItemManifest: ManifestMenuItem = {
    type: 'menuItem',
    kind: 'tree',
    alias: MENUITEM_ALIAS,
    name: 'Pokedex Menu Items',
    meta: {
        label: 'Pokemon',
        menus: [MENU_ALIAS]
    },
    element: () => import('./menu-items.ts')
};

const entityActionManifests: Array<ManifestEntityAction> = [
    {
        type: 'entityAction',
        alias: 'showMoves',
        name: 'Show Moves',
        kind: 'default',
        api: () => import('./entityActions/show-moves.api.ts'),
        forEntityTypes: [POKEMON_ENTITY_TYPE],
        meta: {
            icon: 'icon-bird',
            label: 'Moves'
        },
    },
    {
        type: 'entityAction',
        alias: 'showStats',
        name: 'Show Stats',
        kind: 'default',
        api: () => import('./entityActions/show-stats.api.ts'),
        forEntityTypes: [POKEMON_ENTITY_TYPE],
        meta: {
            icon: 'icon-pulse',
            label: 'Stats'
        },
    }
];

const modalManifests: Array<ManifestModal> = [
    {
        type: 'modal',
        alias: STATS_MODAL_ALIAS,
        name: 'Stats Modal',
        element: () => import('./stats-modal/stats-modal.element.ts'),
    }
];

export const menuManifests = [sidebarAppManifest, menuManifest, menuItemManifest, ...entityActionManifests, ...modalManifests];