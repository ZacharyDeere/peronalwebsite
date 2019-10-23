/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 7
// YOUR NAMES: Zachary Deere, Lucas Levesque

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Do things when the "Calculate it" button is clicked.
   document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
      var fibonacci, whichFibonacciNumber;

      // WRITE YOUR fibonacci FUNCTION HERE
      fibonacci = (function () {
         var fibonacciResults;
         fibonacciResults = [];     //initialize an empty array
         fibonacciResults[0] = 0;   //set first two elements of array to first fibinacci numbers
         fibonacciResults[1] = 1;
         return function f(n) {
            n = Math.round(n);
            if (typeof n === 'number' && isFinite(n) && n >= 0) {
               if (!fibonacciResults.hasOwnProperty(n)) {
                  // . . . calculate the new result recursively and save it in the array.
                  fibonacciResults[n] = f(n - 2) + f(n - 1);
               }
               // Either way, return the saved result.
               return fibonacciResults[n];
            }
            return 0;
         };
      }());

      // Get the user's number.
      whichFibonacciNumber = parseInt(document.querySelector('#fibonacci-input').value, 10);
      // Use the fibonacci function to calculate the output.
      document.querySelector('#which-fibonacci-number').textContent = whichFibonacciNumber.toString();
      document.querySelector('#fibonacci-number').textContent = fibonacci(whichFibonacciNumber).toString();
   }, false);

   (function () {
      var dieElements;

      // WRITE CODE HERE TO MAKE THE #dice ELEMENT WORK
      // Get an array of all div elements inside the #dice element.
      dieElements = Array.prototype.slice.call(document.querySelectorAll('#dice div'));

      // Go through each of those div elements one by one.
      dieElements.forEach(function (dieElement, whichDie) {
         // Inside this function, dieElement is the current element and whichDie is its index.

         // Set the value of the current die when the page loads.
         dieElement.textContent = whichDie + 1;

         // Create an event handler that rerolls the die randomly whenever it is clicked.
         dieElement.addEventListener('click', function () {
            dieElements.forEach(function (dieElement2, whichDie2) {
               if (whichDie2 <= whichDie) {
                  dieElement2.textContent = Math.floor(Math.random() * 6) + 1;
               }
            });
         }, false);
      });

   }());

   (function () {
      var cardElements, cardValues;

      // WRITE CODE HERE TO MAKE THE #cards ELEMENT WORK
      cardElements = Array.prototype.slice.call(document.querySelectorAll('#cards div'));
      cardValues = [];
      cardElements.forEach(function (cardElement, whichCard) {
         cardValues.push((Math.floor(Math.random() * 100) + 1)); //fill the array with random numbers from 1-99
         cardElement.textContent = cardValues[whichCard];
         cardElement.addEventListener('click', function () {
            cardValues.push(cardValues[whichCard]);
            cardValues.splice(whichCard, 1);
            cardElement.textContent = cardValues[whichCard];
            cardElements.forEach(function (cardElement, whichCard) { //move through each card element
               cardElement.textContent = cardValues[whichCard]; // print cardValues to page
            });
         }, false);
      });
      document.querySelector('#sort-cards').addEventListener('click', function () {
         cardValues.sort(function (a, b) {
            return a - b; //causes the function to sort numerically 
         });
         cardElements.forEach(function (cardElement, whichCard) {
            cardElement.textContent = cardValues[whichCard];
         });
      }, false);
      document.querySelector('#reverse-cards').addEventListener('click', function () {
         cardValues.reverse(); //pre-existing reverse function
         cardElements.forEach(function (cardElement, whichCard) {
            cardElement.textContent = cardValues[whichCard];
         });
      }, false);
   }());

   (function () {
      var ticTacToeElements, ticTacToeValues, turn;
      ticTacToeElements = []; //create two empty arrays
      ticTacToeValues = [];
      turn = true;
      document.querySelector('#tic-tac-toe-status').textContent += 'X moves next.';
      // WRITE CODE HERE TO MAKE THE #tic-tac-toe ELEMENT WORK
      Array.prototype.slice.call(document.querySelectorAll('#tic-tac-toe tr')).forEach(function (row) {
         var rowElements, rowValues;
         // Get an array of all the td elements in the current row.
         rowElements = Array.prototype.slice.call(row.querySelectorAll('td'));
         // Build an array of 0 values the same size as the current row.
         rowValues = [];
         rowElements.forEach(function () {
            rowValues.push('');
         });
         // Build the arrays of elements and values row by row.
         ticTacToeElements.push(rowElements);
         ticTacToeValues.push(rowValues);
      });
      ticTacToeElements.forEach(function (row, whichRow) {
         row.forEach(function (element, whichColumn) {
            element.textContent = ticTacToeValues[whichRow][whichColumn];
            element.addEventListener('click', function () {
               if (turn === true && ticTacToeValues[whichRow][whichColumn] === '') {
                  ticTacToeValues[whichRow][whichColumn] += 'X';
                  turn = false; //O's turn
                  document.querySelector('#tic-tac-toe-status').textContent = 'O moves next.';
               } else if (turn === false && ticTacToeValues[whichRow][whichColumn] === '') {
                  ticTacToeValues[whichRow][whichColumn] += 'O';
                  turn = true; // X's turn
                  document.querySelector('#tic-tac-toe-status').textContent = 'X moves next.';
               }
               element.textContent = ticTacToeValues[whichRow][whichColumn];
            }, false);
         });
      });
   }());
}, false);
