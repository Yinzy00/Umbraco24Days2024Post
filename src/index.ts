import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';
import { DashboardManifest } from './dashboard/manifest';
import { SectionManifest } from './section/manifest';
import { menuManifests } from './section/menu/manifest';
import { sectionViewManifest } from './section/sectionView/manifest';

const manifests: Array<ManifestTypes> = [
    DashboardManifest,
    SectionManifest,
    ...menuManifests,
    sectionViewManifest
];

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
    extensionRegistry.registerMany(manifests);
};
