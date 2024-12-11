import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { css, customElement, html, property, state } from '@umbraco-cms/backoffice/external/lit';
import { PokemonDetail } from "../../../api/pokemon/models/pokemonDetail";
import { PokemonService } from "../../../api/pokemon/pokemonService";

const element = "pokedex-moves";

@customElement(element)
export class Moves extends UmbLitElement {

    @property({ type: Number })
    public idProp!: number;

    @state()
    private _detail: PokemonDetail | undefined;

    getData = async () => {
        this._detail = await PokemonService.GetPokemonById(this.idProp);
    }

    firstUpdated(): void {
        this.getData();
    }

    protected render = () => {
        return this._detail && html`<div>
        ${this._detail
                ? html`<uui-box headline=${this._detail.name}>
            <div>
                <img src=${this._detail.sprites.front_default} alt=${this._detail.name} />
            </div>
            <h2>Moves</h2>
                <ul>
                    ${this._detail.moves.map(x => html`<li>
                        <b>${x.move.name}</b>
                    </li>`)}
                </ul>
            </uui-box>`
                : null}
        </div>`;
    }

    static override styles = [
        css`
			:host {
				display: block;
                padding: 20px;
			}
		`
    ];
}

export default Moves;

declare global {
    interface HTMLElementTagNameMap {
        [element]: Moves;
    }
}
