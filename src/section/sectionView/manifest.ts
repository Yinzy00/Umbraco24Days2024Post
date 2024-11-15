import { ManifestSectionView } from '@umbraco-cms/backoffice/extension-registry';
import { SECTION_ALAIS } from '../manifest.ts';

const SECTIONVIEW_ALIAS = "Pokedex.SectionView";

export const sectionViewManifest: ManifestSectionView =
{
    type: "sectionView",
    alias: SECTIONVIEW_ALIAS,
    name: "Pokedex Section View",
    element: () => import('./sectionview.ts'),
    meta: {
        label: "",
        pathname: "pokemon",
        icon: ""
    },
    conditions: [
        {
            alias: 'Umb.Condition.SectionAlias',
            match: SECTION_ALAIS,
        }
    ]
};