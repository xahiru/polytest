/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
// import '@polymer/paper-checkbox/paper-checkbox.js';
// import '@polymer/iron-icons/iron-icons.js';
// import './icon-toggle.js';


class RegisterUser extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Register</h1>
        
        <p>Ut labsddores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
         
        <iron-form id="iron-form">
          <form method="get" action="/view2">
            <input type="text" name="name" value="Batman">
            <input type="checkbox" name="donuts" checked> I like donuts<br>
            <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
            <input type="submit" name="name" value="Batman">
            <button onclick="_submitForm()">Accept</button>
            <paper-button type="submit" raised onclick="submitForm(event)"><iron-icon icon="save"></iron-icon>Submit</paper-button>
          </form>
        </iron-form>

         <paper-button raised onclick="_submitForm()">Confirm</paper-button>
      </div>
    `;
  }

ready() {
  super.ready();
  this.addEventListener('click', e => this.submitForm(event));
}

submitForm(event) {
    // console.log("register called");
      document.getElementById('iron-form').submit();
    }



}

window.customElements.define('register-user', RegisterUser);
