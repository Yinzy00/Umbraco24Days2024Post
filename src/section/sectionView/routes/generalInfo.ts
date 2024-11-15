import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { customElement, html, property } from '@umbraco-cms/backoffice/external/lit';

const element = "pokedex-general-info";

@customElement(element)
export class GeneralInfo extends UmbLitElement{

    @property({ type: String })
    public idProp!: string;

    protected render = () => {
        return html`<div>Section Root... We could render some information here.</div>`;
    }
}

export default GeneralInfo;

declare global {
    interface HTMLElementTagNameMap {
        [element]: GeneralInfo;
    }
}
