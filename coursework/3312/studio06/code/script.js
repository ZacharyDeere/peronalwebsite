/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 6
// YOUR NAMES: Lucas Levesque  and Zachary Deere

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {
      var createToDoList, toDoList;

      // WRITE YOUR createToDoList FUNCTION HERE
            // Make an object factory (kind of like a constructor).
      createToDoList = function () {
         var priv, self;

         // The priv object can hold all private data and code.
         priv = {
            toDoList: {}
         };

         // The self object can hold all public data and code.
         self = {
            addItem: function (item) {
               if (typeof item === 'string') {
                  priv.toDoList[item.toLowerCase()] = item;
               }
            },
            getList: function () {
               var currentList = '';
               Object.keys(priv.toDoList).forEach(function (item) {
                  currentList += priv.toDoList[item] + '\n';
               });
               return currentList;
            },
            removeItem: function (item) {
               delete priv.toDoList[item.toLowerCase()];
            }
         };
         return Object.freeze(self);
      };

      // Create a new object that keeps track of a to-do list.
      toDoList = createToDoList();

      document.querySelector('#add-to-do-list-item').addEventListener('click', function () {
         // Add a new to-do list item and output the new to-do list.
         toDoList.addItem(document.querySelector('#to-do-list-item-to-add').value);
         document.querySelector('#to-do-list-output').value = toDoList.getList();
      }, false);

      document.querySelector('#remove-to-do-list-item').addEventListener('click', function () {
         // Remove a to-do list item and output the new to-do list.
         toDoList.removeItem(document.querySelector('#to-do-list-item-to-remove').value);
         document.querySelector('#to-do-list-output').value = toDoList.getList();
      }, false);
   }());

   (function () {
      var findUniqueLetters;

      // WRITE YOUR findUniqueLetters FUNCTION HERE
      findUniqueLetters = function (inputString) {
         var uniqueLetters = '', result = '';
         inputString = inputString.toUpperCase();
         uniqueLetters = {};
         inputString.split('').forEach(function (letter) {
            if (/^[A-Z]$/.test(letter)) {
               uniqueLetters[letter] = true;
            }
         });
         Object.keys(uniqueLetters).forEach(function (letter) {
            result += letter;
         });
         return result;
      };
      document.querySelector('#find-unique-letters').addEventListener('click', function () {
         // Filter the characters in the textbox, leaving only the first of each letter found.
         var wordElement;
         wordElement = document.querySelector('#unique-letters-word');
         wordElement.value = findUniqueLetters(wordElement.value);
      }, false);
   }());
   (function () {
      var codebook, createCodeBook;
      // WRITE YOUR createCodeBook FUNCTION HERE
      createCodeBook = function () {
         var self, priv;
         priv = {
            codebook: {}
         };
         self = {
            add: function (codeword, meaning) {
               if (typeof codeword === 'string') {
                  priv.codebook[codeword] = meaning;
               }
            },
            getCodewords: function () {
               var result = '';
               Object.keys(priv.codebook).forEach(function (codeword) {
                  result += (codeword + ': ' + priv.codebook[codeword] + '\n');
               });
               return result;
            },
            isCodeword: function (codeword) {
               if (priv.codebook.hasOwnProperty(codeword)) {
                  return true;
               }
               return false;
            },
            retrieve: function (codeword) {
               if (self.isCodeword(codeword) === true) {
                  return priv.codebook[codeword];
               }
               return '[meaningless]';
            }
         };
         return Object.freeze(self);
      };
      // Create a new object that keeps track of a codebook.
      codebook = createCodeBook();

      document.querySelector('#save-codeword').addEventListener('click', function () {
         // Add a new codeword/meaning pair to the codebook.
         codebook.add(document.querySelector('#codeword-input').value, document.querySelector('#meaning-input').value);
      }, false);

      document.querySelector('#get-meaning').addEventListener('click', function () {
         // Output a codeword's meaning.
         document.querySelector('#codebook-output').value = codebook.retrieve(document.querySelector('#codeword-input').value);
      }, false);

      document.querySelector('#print-codebook').addEventListener('click', function () {
         // Output all codeword/meaning pairs already in the codebook.
         document.querySelector('#codebook-output').value = codebook.getCodewords();
      }, false);

      document.querySelector('#clear-codebook').addEventListener('click', function () {
         // Create a new, empty codebook object.
         codebook = createCodeBook();
         // Empty the output textbox.
         document.querySelector('#codebook-output').value = '';
      }, false);
   }());

}, false);
