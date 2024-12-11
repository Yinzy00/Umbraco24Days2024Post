import { UmbMenuItemElement } from '@umbraco-cms/backoffice/extension-registry';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Pokemon } from '../../api/pokemon/models/pokemon';
import { PokemonService } from '../../api/pokemon/pokemonService';
import { POKEMON_ENTITY_TYPE } from './manifest';

const elementName = 'pokedex-menu-items';

@customElement(elementName)
class PokedexMenuItems extends UmbLitElement implements UmbMenuItemElement {
    @state()
    private _items: Pokemon[] = []; // Store fetched items
    @state()
    private _loading: boolean = true; // Track loading state
    @state()
    private _error: string | null = null; // Track any errors
    @state()
    private _active: number = -1; // Track active item

    constructor() {
        super();
        this.fetchPokemon(); // Start fetching on component load
    }

    // Fetch tree items
    async fetchPokemon() {
        try {
            this._loading = true;
            this._items = (await PokemonService.GetPokemon()); // Fetch root-level items
        } catch (e) {
            this._error = 'Error fetching items';
        } finally {
            this._loading = false;
        }
    }

    // Render items
    renderItems(items: Pokemon[]): TemplateResult {
        return html`
            ${items.map(element => html`
                <uui-menu-item ?active=${this._active === element.id} 
                href="/section/pokedex/view/pokemon/general-info/${element.id}" 
                label="${element.name}" @click=${() => this._active = element.id}>
                <umb-entity-actions-bundle
						slot="actions"
						.entityType=${POKEMON_ENTITY_TYPE}
						.unique=${element.id}
						.label=${"label"}>
					</umb-entity-actions-bundle>
                </uui-menu-item>
            `)}
        `;
    }

    // Main render function
    render() {

        //Showing loading state
        if (this._loading) {
            return html`<uui-loader></uui-loader>`;
        }

        //Showing error state
        if (this._error) {
            return html`<uui-menu-item active disabled label="Could not load pokemon!">
        </uui-menu-item>`;
        }

        // Render items if loading is done and no error occurred
        return html`${this.renderItems(this._items)}`;
    }
}



export { PokedexMenuItems as element };

declare global {
    interface HTMLElementTagNameMap {
        [elementName]: PokedexMenuItems;
    }
}
