import { UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { ManifestEntityActionDefaultKind } from "@umbraco-cms/backoffice/extension-registry";

export class ShowMoves extends UmbEntityActionBase<ManifestEntityActionDefaultKind> {
    override async execute() {
        if (this.args.unique == null)
            throw new Error('Unique is required to delete form');

        let id = parseInt(this.args.unique);

        window.history.pushState({}, '', `section/pokedex/view/pokemon/moves/${id}`);
    }
}

export default ShowMoves;