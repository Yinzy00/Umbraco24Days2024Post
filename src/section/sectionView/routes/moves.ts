import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { customElement, html, property } from '@umbraco-cms/backoffice/external/lit';

const element = "pokedex-moves";

@customElement(element)
export class Moves extends UmbLitElement{
    @property({ type: String })
    public idProp!: string;

    protected render = () => {
        return html`<div>Section Root... We could render some information here.</div>`;
    }
}

export default Moves;

declare global {
    interface HTMLElementTagNameMap {
        [element]: Moves;
    }
}
