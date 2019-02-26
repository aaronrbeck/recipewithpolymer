import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';


/**
 * @customElement
 * @polymer
 */





export class CreateRecipe extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="recipe title">
          <input type="textarea" name="name" value="indredients">
          <input type="textarea" name="name" value="directions">
          <input type="text" name="name" value="category">
        <button type="submit" name="submit" onclick="myFunction()">Submit</button>
      </form>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'recipes'
      },
      title:{
        type: String,

      }
    };
  }
  constructor(){
    super();

  }
}

window.customElements.define('create-recipe', CreateRecipe);
