import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-paper`
 * Generates a Paper Wallet from a key pair
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxPaper extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'blox-paper',
      },
    };
  }
}

window.customElements.define('blox-paper', BloxPaper);
