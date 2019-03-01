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
      <form'>
          <input type="text" name="title"
          onchange='data()'
          value="{{title::change}}"
          attribute = "title" placeholder="Recipe Title">
          
        <button type="submit" name="submit" on-click="handleSubmit">Submit</button>
      </form>
      <div>
      [[title]]
      </div>
      <script>
      const data = () => 
      return console.log("hello")
      </script>
    `;
  }
  handleSubmit(){
    alert("Hello")
  }
 
}

  



window.customElements.define('create-recipe', CreateRecipe);
