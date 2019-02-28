import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-button';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';



/** 
  *`iron-form-group`
  *
  *
  * @customElement
  * @polymer
  * @demo demo/index.html
 */
class IronFormGroup extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      
<label>
<input type="checkbox" checked onchange="form1.allowRedirect = !this.checked;">Prevent automatic form redirection
</label>
<br><br>

<iron-form id="form1">
<form action="/foo" method="get">
  <paper-input type="text" name="name" required label="Name" value="Batman"></paper-input>
  <input name="foo" required>
  <input type="checkbox" name="donuts" checked>I like donuts<br>
  <paper-checkbox name="food" value="pizza" checked>pizza</paper-checkbox><br>
  <paper-checkbox name="food" value="cheese" required>cheese</paper-checkbox>
  <br>
  <paper-dropdown-menu label="Cars" name="cars" required>
    <paper-listbox class="dropdown-content" slot="dropdown-content">
      <paper-item value="volvo">Volvo</paper-item>
      <paper-item value="saab">Saab</paper-item>
      <paper-item value="fiat">Fiat</paper-item>
      <paper-item value="audi">Audi</paper-item>
    </paper-listbox>
  </paper-dropdown-menu>
  <br><br>
  <paper-button raised onclick="form1.submit()">Submit</paper-button>
  <paper-button raised onclick="form1.reset()">Reset</paper-button>
  <paper-button raised onclick="form1.validate()">Validate</paper-button>
</form>
<br>
<div class="output"></div>
</iron-form>
<script>
form1.addEventListener('iron-form-submit', function(event) {
  this.querySelector('.output').innerHTML = JSON.stringify(event.detail);
});
</script>


    `;
  }
  // static get properties() {
  //   return {
  //     prop1: {
  //       type: String,
  //       value: 'iron-form-group',
  //     },
  //   };
  // }
}

window.customElements.define('iron-form-group', IronFormGroup);
