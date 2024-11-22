import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { css, customElement, html, property, state } from '@umbraco-cms/backoffice/external/lit';
import { PokemonService } from "../../../api/pokemon/pokemonService";
import { PokemonDetail } from "../../../api/pokemon/models/pokemonDetail";

const element = "pokedex-general-info";

@customElement(element)
export class GeneralInfo extends UmbLitElement {

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
        return html`<div>
            ${this._detail
                ? html`<uui-box headline=${this._detail.name}>
                <div>
                    <img src=${this._detail.sprites.front_default} alt=${this._detail.name} />
                </div>
                <h2>Info</h2>
                    <ul>
                        <li>
                            <b>Weight: </b> ${this._detail.weight}
                        </li>
                        <li>
                            <b>Height: </b> ${this._detail.height}
                        </li>
                        <li>
                            <b>Types: </b> ${this._detail.types.map(x => x.type.name).join(", ")}
                        </li>
                    </ul>
                <!-- <h2>Stats</h2>
                <ul>
                    ${this._detail.stats.map(x => html`<li>
                        <b>${x.stat.name}: </b> ${x.base_stat}
                    </li>`)}
                </ul> -->
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

export default GeneralInfo;

declare global {
    interface HTMLElementTagNameMap {
        [element]: GeneralInfo;
    }
}
