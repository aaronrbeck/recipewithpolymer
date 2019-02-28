import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// import {LitElement, html, css, customElement, property} from 'lit-element';
// import '@polymer/iron-ajax/iron-ajax.js';
// import '@polymer/iron-form/iron-form.js';
// import '@polymer/paper-input/paper-input.js';

/**
 * @customElement
 * @polymer
 */

// on-input='title'


export class CreateRecipe extends PolymerElement {

  static get properties() {
    return {
      prop1: 
      {
        type: String,
        value: 'recipe'
      },
      title: {
         type: String,
         notify: true,
         reflectToAttribute: true,
         
       }
     
    };
  }
 
    
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value="{{title::change}}" 
          
          attribute = "title" placeholder="Recipe Title">
          
        <button type="submit" name="submit" on-click="handleClick()">Submit</button>
      </form>
      <div>
      [[title]]
      </div>

    `;
  }
  handleClick() { 
  title = title.value

}}

  



window.customElements.define('create-recipe', CreateRecipe);
