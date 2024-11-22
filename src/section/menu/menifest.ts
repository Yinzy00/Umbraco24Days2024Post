import { ManifestEntityAction, ManifestMenu, ManifestMenuItem, ManifestSectionSidebarApp } from '@umbraco-cms/backoffice/extension-registry';
import { SECTION_ALAIS } from '../manifest.ts';

const SIDEBARAPP_ALIAS = 'MySite.PokedexSidebarApp';
const MENU_ALIAS = 'MySite.PokedexMenu';
const MENUITEM_ALIAS = 'MySite.PokedexMenuItems';
const POKEMON_ENTITY_TYPE = 'MySite.PokemonEntity';

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

const entityActionManifests : Array<ManifestEntityAction> = [
    {
        type: 'entityAction',
        alias: 'showStats',
        name: 'Show Stats',
        kind: 'default',
        api: () => import('./menu-actions/folder/delete-folder-action.api.ts'),
        forEntityTypes: [POKEMON_ENTITY_TYPE],
        meta: {
            icon: 'icon-trash',
            label: 'Delete'
        },
    },
]


export const menuManifests = [sidebarAppManifest, menuManifest, menuItemManifest];