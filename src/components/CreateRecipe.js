import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// import {LitElement, html, css, customElement, property} from 'lit-element';
// import '@polymer/iron-ajax/iron-ajax.js';
// import '@polymer/iron-form/iron-form.js';
// import '@polymer/paper-input/paper-input.js';
// const functions = require("firebase-functions");
// const cors = require('cors')({ origin: true });
// const admin = require('firebase-admin');
// import firebase from "firebase"

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
         value: "cheese"
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
      <form>
          <input type="text" name="title"
          onchange='data()'
          value="{{title::change}}"
          placeholder="Recipe Title"
          attribute= "title">
          
        <button type="submit" name="submit"  on-click="handleSubmit2">Submit</button>
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
  handleSubmit2(){
    alert('${title}')
  }
//   hello = handleSubmit =( ) => { exports.addItem = functions.https.onRequest((req, res) => {
//         return cors(req, res, () => {
//           if(req.method !== 'POST') {
//             return res.status(401).json({
//               message: 'Not allowed'
//             })
//           }
//           const title = req.body[0]
//           database.push(req.body);
//           // const item = req.body.item;
//           // database.push({ item });
//           getItemsFromDatabase(res)
//         });
// });



//  hello = exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello frs Database!");
// });
  // }
 
}





window.customElements.define('create-recipe', CreateRecipe);
CreateRecipe.export (title)