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
// import '@polymer/paper-button/paper-button.js';
// import '@polymer/iron-form/iron-form.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        video-container{
          margin: 2em auto 0;
          width: 50px;
          padding: 2em;
          background: white;
          -webkit-box-shadow: 0 1px 10px #D9D9D9;
          -moz-box-shadow: 0 1px 10px #D9D9D9;
          -ms-box-shadow: 0 1px 10px #D9D9D9;
          -o-box-shadow: 0 1px 10px #D9D9D9;
          box-shadow: 0 1px 10px #D9D9D9;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      
      <div id="video-container">
      <video id="camera-stream" width="50" src="none" autoplay></video>

      </div>
      <div>[[greeting]]</div> <!-- data bindings in shadow DOM -->

      <paper-button onclick=[[click2]]>Button3</paper-button>


      <paper-button onclick=[[click2]]>Confirm</paper-button>


      </div>
      
    `;
  }

  // Declare properties for the element's public API
  static get properties() {
    return {
      greeting: {
        type: String,
        notify: true,
        reflectToAttribute: true
      }
    };
  }
  constructor() {
    super();
    // this.greeting = 'Hello from view2!';
    // this.fire('load');
    console.log('hello');
    this.greeting = 'Hello from constructor!';

    this.addEventListener('click', this.click3());

    // Normalize the various vendor prefixed versions of getUserMedia.
    // navigator.getUserMedia = (navigator.getUserMedia ||
    //                         navigator.webkitGetUserMedia ||
    //                         navigator.mozGetUserMedia || 
    //                         navigator.msGetUserMedia);
  
  }

// connectedCallback() {
//       super.connectedCallback();
      
//       // render
//       this.textContent = 'Hello World, my user is ' + (this.user || 'nobody') + '.\n' +
//         'This user is ' + (this.manager ? '' : 'not') + ' a manager.';
//     }

  // Add methods to the element's public API
  // greetMe() {
  //   console.log("Checking media access");

  //     // Check that the browser supports getUserMedia.
  //   // If it doesn't show an alert, otherwise continue.
  //   if (navigator.getUserMedia) {
  //     // Request the camera.
  //     navigator.getUserMedia(
  //       // Constraints
  //       {
  //         video: true
  //       },

  //       // Success Callback
  //       function(localMediaStream) {

  //       },

  //       // Error Callback
  //       function(err) {
  //         // Log the error to the console.
  //         console.log('The following error occurred when trying to use getUserMedia: ' + err);
  //       }
  //     );

  //   } else {
  //     alert('Sorry, your browser does not support getUserMedia');
  //   }

  // }

  // confirmClick(e) {
  //    navigator.getUserMedia = (navigator.getUserMedia ||
  //                           navigator.webkitGetUserMedia ||
  //                           navigator.mozGetUserMedia || 
  //                           navigator.msGetUserMedia);
  //    if (navigator.getUserMedia) {
  //     // Request the camera.
  //     navigator.getUserMedia(
  //       // Constraints
  //       {
  //         video: true
  //       },

  //       // Success Callback
  //       function(localMediaStream) {
  //         // Get a reference to the video element on the page.
  //         var vid = document.getElementById('camera-stream');

  //         // Create an object URL for the video stream and use this 
  //         // to set the video source.
  //         vid.src = window.URL.createObjectURL(localMediaStream);

  //       },

  //       // Error Callback
  //       function(err) {
  //         // Log the error to the console.
  //         console.log('The following error occurred when trying to use getUserMedia: ' + err);
  //       }
  //     );

  //   } else {
  //     alert('Sorry, your browser does not support getUserMedia');
  //   }
  //   console.log('confirmClick')
  // }

  click3(){
    this.greeting = "hello3 clicked";
    console.log(this.greeting);

  }
  click2(){
    // var video = document.getElementById('camera-stream');
    //     navigator.mediaDevices.getUserMedia({
    //     video: true
    //   })
    //   .then(function(stream) {
    //     video.src = window.URL.createObjectURL(stream);
    //     video.play();

    //     // video.srcObject = stream;
    //   })
    //   .catch(function(error) {
    //     console.log('error', error);
    //   });
    // console.log('confirmClick click2');
    this.greeting = "hello clicked";
    console.log(this.greeting);
  }



  
}

window.customElements.define('my-view2', MyView2);
