/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 1
// YOUR NAMES: Lucas Levesque, Zach Deere

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {

   // Enforce stricter JavaScript rules.
   'use strict';

   // Declare this function's local variables.
   var howdyElement, nameInputElement, nameOutputElement, submitNameButton, webAppIdeaElement;

   // Find all needed elements and save them in variables.
   nameInputElement = document.querySelector('#name-input');
   submitNameButton = document.querySelector('#submit-name');
   howdyElement = document.querySelector('#howdy');
   nameOutputElement = document.querySelector('#name-output');
   // add element for new paragraph
   webAppIdeaElement = document.querySelector('#web-app-idea');


      //when paragraph is clicked it populates text box
   webAppIdeaElement.addEventListener('click', function () {
      nameInputElement.value = webAppIdeaElement.textContent;
      //toggle clicked status
      webAppIdeaElement.classList.toggle('clicked');
   }, false);
   
   // Make things happen when a user clicks on the button element.
   submitNameButton.addEventListener('click', function () {
      var name;

      // Get the string value out of the input textbox.
      name = nameInputElement.value;

      if (name.length === 0) {
         // The user didn't input a name, so use a default.
         nameOutputElement.textContent = 'student';
         howdyElement.classList.remove('enthusiastic');
      } else {
         // The user did input a name, so use it.
         nameOutputElement.textContent = name;
         // Make the paragraph stand out more.
         howdyElement.classList.add('enthusiastic');
      }
   }, false);

}, false);


