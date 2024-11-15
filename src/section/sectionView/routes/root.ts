import { UmbLitElement } from "@umbraco-cms/backoffice/lit-element";
import { customElement, html } from '@umbraco-cms/backoffice/external/lit';

const element = "pokedex-section-root";

@customElement(element)
export class SectionRoot extends UmbLitElement{
    protected render = () => {
        return html`<div>Section Root... We could render some information here.</div>`;
    }
}

export default SectionRoot;

declare global {
    interface HTMLElementTagNameMap {
        [element]: SectionRoot;
    }
}
