import { ManifestSection } from "@umbraco-cms/backoffice/extension-registry";

export const SECTION_ALAIS = 'MySite.PokedexSection';

export const SectionManifest: ManifestSection = {
    type: 'section',
    alias: SECTION_ALAIS,
    name: 'Pokedex Section',
    weight: 10,
    meta: {
        label: 'Pokedex',
        pathname: 'pokedex'
    }
};