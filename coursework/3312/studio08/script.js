/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 8
// YOUR NAMES: Zachary Deere and Lucas L

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {
      var createTextKeeper;

      // WRITE YOUR createTextKeeper FUNCTION HERE
      createTextKeeper = function (oldState) {
         var self, state;

         // The state is an object (maybe an array) that keeps track of all the data.
         state = {
            numChangesMade: 0, // sets numChangesMade  to 0
            savedText: '' // sets the default text to nothing
         };
         if (typeof oldState === 'string') { // sees if the oldState is a string
            try {
               state = JSON.parse(oldState);
            } catch (ignore) {
            }
         }
         // The self object contains public methods.
         self = {
            getNumChangesMade: function () {
               return state.numChangesMade; // returns number of changes
            },
            getSavedText: function () {
               return state.savedText; // returns the saved text
            },
            getState: function () {
               return JSON.stringify(state); // JSON stringifys state
            },
            saveNewText: function (newText) {
               state.savedText = newText; // saves new text
               state.numChangesMade += 1; // adds 1 to numChangesMade
            }
         };
         return Object.freeze(self);
      };

      (function () {
         var textKeeper, updateTextKeeper;

         // WRITE YOUR updateTextKeeper FUNCTION HERE
         updateTextKeeper = function () {
            // Save the new state in web storage (if available).
            if (localStorage && localStorage.setItem) {
               localStorage.setItem('CS 3312 Studio 8 sticky text', textKeeper.getState());
            }
            // Update the view.
            document.querySelector('#text-changes-made').textContent = textKeeper.getNumChangesMade();
            // Update the view.
            document.querySelector('#text-input').value = textKeeper.getSavedText();
         };

         // WRITE CODE FOR THE CONTROLLER HERE
         document.querySelector('#text-input').addEventListener('input', function () {
            // Update the model.
            textKeeper.saveNewText(document.querySelector('#text-input').value);
            // Update everything else based on the new model state.
            updateTextKeeper();
         }, false);

         // WRITE CODE TO GET THINGS STARTED HERE
         // Update the model.
         textKeeper = createTextKeeper(localStorage && localStorage.getItem && localStorage.getItem('CS 3312 Studio 8 sticky text'));
         // Update everything else based on the new model state.
         updateTextKeeper();

      }());
   }());

   (function () {
      var createCounter;

      // WRITE YOUR createCounter FUNCTION HERE
      createCounter = function (oldState) {
         var self, state;

         // The state is an object (maybe an array) that keeps track of all the data.
         state = {
            count: 1
         };
         if (typeof oldState === 'string') {
            try {
               state = JSON.parse(oldState);
            } catch (ignore) {
            }
         }
         // The self object contains public methods.
         self = {
            getCount: function () {
               return state.count;
            },
            increment: function (num) {
               state.count += num;
            },
            getState: function () {
               return JSON.stringify(state);
            }
         };
         return Object.freeze(self);
      };

      (function () {
         var cardCounter, updateCards;

         // WRITE YOUR updateCards FUNCTION HERE
         updateCards = function () {
            var cardCounterOutputElement, x, newElement;
            // Save the new state in web storage (if available).
            if (localStorage && localStorage.setItem) {
               localStorage.setItem('CS 3312 Studio 8 card clicker', cardCounter.getState());
            }
            // Update the view.
            cardCounterOutputElement = document.querySelector('#cards');
            // Empty the #to-do-list-output element of all child elements.
            while (cardCounterOutputElement.hasChildNodes()) {
               cardCounterOutputElement.removeChild(cardCounterOutputElement.lastChild);
            }
            for (x = 1; x < cardCounter.getCount() + 1; x += 1) {
               // Create a new div element in HTML and insert it just inside the end of the list.
               newElement = document.createElement('div');
               newElement.textContent = x;
               cardCounterOutputElement.appendChild(newElement);
            }
            // Update the controller:  Add a click handler to each new div element.
            Array.prototype.slice.call(cardCounterOutputElement.querySelectorAll('div')).forEach(function (element, whichItem) {
               element.addEventListener('click', function () {
                  // Update the model.
                  cardCounter.increment(whichItem + 1);
                  // Update everything else based on the new model state.
                  updateCards();
               }, false);
            });
         };

         // WRITE CODE FOR THE CONTROLLER HERE
         // Set up the controller:  Handle adding a new to-do list item.
         document.querySelector('#reset-cards').addEventListener('click', function () {
            cardCounter = createCounter();
            // Update everything else based on the new model state.
            updateCards();
         }, false);

         // WRITE CODE TO GET THINGS STARTED HERE
         // When the page is loaded, get any saved state from web storage and use it.
         cardCounter = createCounter(localStorage && localStorage.getItem && localStorage.getItem('CS 3312 Studio 8 card clicker'));
         // Update everything else based on the new model state.
         updateCards();

      }());
   }());

}, false);
