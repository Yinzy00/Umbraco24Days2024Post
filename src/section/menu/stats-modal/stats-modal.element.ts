import { html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbModalBaseElement } from '@umbraco-cms/backoffice/modal';
import { PokemonDetail } from '../../../api/pokemon/models/pokemonDetail';
import { PokemonService } from '../../../api/pokemon/pokemonService';
import { StatsModalType } from './stats-modal.type';

const elementName = 'pokedex-stats-modal';

@customElement(elementName)
export class StatsModalElement extends UmbModalBaseElement<StatsModalType, boolean> {

    @state()
    private _pokemonData: PokemonDetail | undefined;

    constructor() {
        super();
        debugger;
    }

    firstUpdated(): void {
        if (!this.data)
            throw new Error('Id is required to delete a form');

        PokemonService.GetPokemonById(this.data.id).then(x => {
            this._pokemonData = x;
        });
    }

    render() {
        return this._pokemonData && html`
        <uui-dialog-layout>
            <h3>
                ${this._pokemonData?.name ?? "Not found"}
            </h3>
            <hr />
            <div>
                    <img src=${this._pokemonData.sprites.front_default} alt=${this._pokemonData?.name} />
            </div>
            <h2>Stats</h2>
                <ul>
                    ${this._pokemonData.stats.map(x => html`<li>
                        <b>${x.stat.name}</b>
                        <span>${x.base_stat}</span>
                    </li>`)}
                </ul>
        </uui-dialog-layout>
    `;
    }
}

export default StatsModalElement;

declare global {
    interface HTMLElementTagNameMap {
        [elementName]: StatsModalElement;
    }
}
