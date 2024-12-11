import { UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { ManifestEntityActionDefaultKind } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_MANAGER_CONTEXT } from "@umbraco-cms/backoffice/modal";
import { STATS_MODAL } from "../stats-modal/status-modal.token";

export class ShowStats extends UmbEntityActionBase<ManifestEntityActionDefaultKind> {
    override async execute() {
        const modalManager = await this.getContext(UMB_MODAL_MANAGER_CONTEXT);

        if (this.args.unique == null)
            throw new Error('Unique is required to delete form');

        let id = parseInt(this.args.unique);

         modalManager.open(this._host, STATS_MODAL, {
            data: {
                id: id
            },
        });
    }
}

export default ShowStats;