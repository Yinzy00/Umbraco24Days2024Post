import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { html, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbRoute } from "@umbraco-cms/backoffice/router";
import GeneralInfo from "./routes/generalInfo";
import Stats from "./routes/stats";
import Moves from "./routes/moves";

const element = "pokedex-sectionview";
@customElement(element)
export class PokedexSectionView extends UmbLitElement {

    #routes: UmbRoute[] = [
        {
            path: 'root',
            component: () => import('./routes/root'),
        },
        {
            path: 'general-info/:id',
            component: () => import('./routes/generalInfo'),
            setup: (component, info) => {
                const element = component as GeneralInfo;
                element.idProp = parseInt(info.match.params.id);
            }
        },
        {
            path: 'stats/:id',
            component: () => import('./routes/stats'),
            setup: (component, info) => {
                const element = component as Stats;
                element.idProp = info.match.params.id;
            }
        },
        {
            path: 'moves/:id',
            component: () => import('./routes/moves'),
            setup: (component, info) => {
                const element = component as Moves;
                element.idProp = parseInt(info.match.params.id);
            }
        },
        {
            path: '',
            redirectTo: 'root',
        },
        {
            path: `**`,
            component: async () => (await import('@umbraco-cms/backoffice/router')).UmbRouteNotFoundElement,
        },
    ];

    render() {
        return html`
        <umb-router-slot id="router-slot" .routes=${this.#routes}></umb-router-slot>
    `
    }
}

export default PokedexSectionView;

declare global {
    interface HTMLElementTagNameMap {
        [element]: PokedexSectionView;
    }
}
