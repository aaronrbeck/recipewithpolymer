import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
/**
 * @customElement
 * @polymer
 */


class LogoHeader extends PolymerElement {
    
  static get template() {
    return html`
        <style>
            :host {
                display: block;
        
        }
        </style>
        
        <h1>Welcome to the Recipe Box</h1>
        
    `}
  static get properties() {
    return {
     
      }
    };
  }


window.customElements.define('logo-header', LogoHeader);
