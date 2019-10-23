/*jslint browser: true, indent: 3 */

// Authors: Lucas Levesque and Zachary Deere

// Here's a Peggy Sue app that uses model/view/controller code organization and web storage.

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   // MODEL
   var createBoard;
   // Create a factory that makes an object to keep track of a peg board.
   createBoard = function (oldState) {
      var self, state, emptyPegRow, emptyPegCol;

      // Create a default starting state.
      state = {
         startingPegRow: undefined,
         startingPegCol: undefined,
         board: [],
         yourScore: 44,
         highScore: 44
      };
      // This segment of code builds our array that is filled with either trues = has a peg, or 0's = the empty parts of the plus sign
      while (state.board.length < 9) {
         state.board.push([]);
      }
      state.board.forEach(function (row, whichRow) {
         while (row.length < 9) {
            if ((row.length <= 2 && (whichRow <= 2 || whichRow >= 6)) || (row.length >= 6 && (whichRow <= 2 || whichRow >= 6))) {
               row.push(0);
            } else {
               row.push(true);
            }
         }
      });
      // This segment makes sure that the beginning empty peg is inside of the plus sign
      emptyPegRow = Math.floor(Math.random() * 9);
      emptyPegCol = Math.floor(Math.random() * 9);
      while (state.board[emptyPegRow][emptyPegCol] === 0) {
         emptyPegRow = Math.floor(Math.random() * 9);
         emptyPegCol = Math.floor(Math.random() * 9);
      }
      state.board[emptyPegRow][emptyPegCol] =  false;
      // If there's a valid previous state, use it instead.
      if (typeof oldState === 'string') {
         try {
            state = JSON.parse(oldState);
         } catch (ignore) {
         }
      }

      // The self object contains public methods.
      self = {
         isThere: function (row, column) {
            // Return a copy of the board array.
            return state.board[row][column];
         },
         getState: function () {
            // Return a string representation of the state object, to be used for web storage.
            return JSON.stringify(state);
         },
         changePeg: function (row, column) {
            // Changes the peg that the function receives to the opposite boolean value
            if (state.board[row][column] === true) {
               state.board[row][column] = false;
            } else {
               state.board[row][column] = true;
            }
            return;
         },
         resetPeg: function (row, column) {
            // Resets the starting peg with the correct corresponding row and column
            state.startingPegRow = row;
            state.startingPegCol = column;
            return;
         },
         isValid: function (secondPegRow, secondPegColumn) {
            // Checks to see if the move you are trying to make is indeed valid, if so call changePeg to invert the correct corresponding pegs
            if ((state.startingPegRow === secondPegRow) && (state.startingPegCol - secondPegColumn === 2) && (self.isThere(state.startingPegRow, state.startingPegCol - 1) === true)) {
               self.changePeg(state.startingPegRow, state.startingPegCol - 1);
               self.changePeg(state.startingPegRow, state.startingPegCol);
               self.changePeg(secondPegRow, secondPegColumn);
               self.addToYourScore();
            } else if ((state.startingPegRow === secondPegRow) && (secondPegColumn - state.startingPegCol === 2) && (self.isThere(state.startingPegRow, state.startingPegCol + 1))) {
               self.changePeg(state.startingPegRow, state.startingPegCol + 1);
               self.changePeg(state.startingPegRow, state.startingPegCol);
               self.changePeg(secondPegRow, secondPegColumn);
               self.addToYourScore();
            } else if ((state.startingPegCol === secondPegColumn) && (state.startingPegRow - secondPegRow === 2) && (self.isThere(state.startingPegRow - 1, state.startingPegCol))) {
               self.changePeg(state.startingPegRow - 1, state.startingPegCol);
               self.changePeg(state.startingPegRow, state.startingPegCol);
               self.changePeg(secondPegRow, secondPegColumn);
               self.addToYourScore();
            } else if ((state.startingPegCol === secondPegColumn) && (secondPegRow - state.startingPegRow === 2) && (self.isThere(state.startingPegRow + 1, state.startingPegCol))) {
               self.changePeg(state.startingPegRow + 1, state.startingPegCol);
               self.changePeg(state.startingPegRow, state.startingPegCol);
               self.changePeg(secondPegRow, secondPegColumn);
               self.addToYourScore();
            }
            return;
         },
         glowRow: function (row) {
            // Returns true or false depending on if the current starting point is equal to the current peg and is used to activated the glow around the peg
            if (state.startingPegRow === row) {
               return true;
            }
            return false;
         },
         glowCol: function (col) {
            // Returns true or false depending on if the current starting point is equal to the current peg and is used to activated the glow around the peg
            if (state.startingPegCol === col) {
               return true;
            }
            return false;
         },
         isSpot: function (row, column) {
            // Returns true is the value of the received peg has the value of 0, used to turn the divs the same color as the board 
            if (state.board[row][column] === 0) {
               return true;
            }
         },
         addToYourScore: function () {
            // subtracts 1 from the current high score every time a valid move is made
            state.yourScore = state.yourScore - 1;
            return;
         },
         getHighScore: function () {
            // Returns the current high score
            return state.highScore;
         },
         getYourScore: function () {
            // Returns the current high score
            return state.yourScore;
         },
         setHighScore: function (score) {
            state.highScore = score;
         }
      };
      // Normally it's best to freeze the self object to keep it from being modified later.
      return Object.freeze(self);
   };
   // VIEW
   // Create a new closure to hide the view and controller from the model code above.
   (function () {
      var gameBoard, updateGameBoard;

      // Create a function that updates everything that needs updating whenever the model changes.
      updateGameBoard = function () {
         var boardElements;

         // Save the new state in web storage (if available).
         if (localStorage && localStorage.setItem) {
            localStorage.setItem('CS 3312 Peggy Sue', gameBoard.getState());
         }
         // Corrects the current high score every time the updateBoard function is called
         document.querySelector('#yourscore-output').textContent = gameBoard.getYourScore();
         document.querySelector('#highscore-output').textContent = gameBoard.getHighScore();
         boardElements = []; //create two empty arrays
         Array.prototype.slice.call(document.querySelectorAll('#board tr')).forEach(function (row) {
            var rowElements;
            // Get an array of all the td elements in the current row.
            rowElements = Array.prototype.slice.call(row.querySelectorAll('td'));
            // Build the arrays of elements and values row by row.
            boardElements.push(rowElements);
         });
         // A loop to step through all of the board elements and give them visual characteristics accordingly
         boardElements.forEach(function (row, whichRow) {
            row.forEach(function (element, whichColumn) {
               // if the value is true give peg the peg a red color
               if (gameBoard.isThere(whichRow, whichColumn)) {
                  element.classList.add('on');
               } else {
                  // if the value is false give peg the peg a white color
                  element.classList.remove('on');
               }
               // adding the glow class to the peg it is the starting peg
               if (gameBoard.glowRow(whichRow) ===  true && gameBoard.glowCol(whichColumn) === true && gameBoard.isThere(whichRow, whichColumn)) {
                  element.classList.add('glow');
               } else {
                  // removing the glow class to the peg if it is the starting peg
                  element.classList.remove('glow');
               }
               if (gameBoard.isThere(whichRow, whichColumn) === 0) {
                  // adding the brown class to the peg if it is equal to zero
                  element.classList.add('brown');
               }
               if (gameBoard.getYourScore() === 1) {
                  document.querySelector('#yourscore-output').textContent = "You Win! You winner you!";
               }
            });
         });
      };
      // CONTROLLER
      (function () {
         var boardElements, score;
         boardElements = []; //create two empty arrays
         Array.prototype.slice.call(document.querySelectorAll('#board tr')).forEach(function (row) {
            var rowElements;
            // Get an array of all the td elements in the current row.
            rowElements = Array.prototype.slice.call(row.querySelectorAll('td'));
            // Build the arrays of elements and values row by row.
            boardElements.push(rowElements);
         });
         // A loop to step through all of the board elements and calls the correct functions according to if there is or isnt a peg
         boardElements.forEach(function (row, whichRow) {
            row.forEach(function (element, whichColumn) {
               element.addEventListener('click', function () {
                  if (gameBoard.isThere(whichRow, whichColumn) === true) {
                     // If a peg is selected call the resetPeg function
                     gameBoard.resetPeg(whichRow, whichColumn);
                  } else if (gameBoard.isThere(whichRow, whichColumn) === false) {
                     // If there isnt a peg it calls the isValid function to determine if a move can be made
                     gameBoard.isValid(whichRow, whichColumn);
                  }
                  updateGameBoard();
               }, false);
            });
         });

         document.querySelector('#reset-board').addEventListener('click', function () {
            if (gameBoard.getYourScore() <= gameBoard.getHighScore()) {
               score = gameBoard.getYourScore();
            }
            gameBoard = createBoard();
            // Update everything else based on the new model state.
            gameBoard.setHighScore(score);
            updateGameBoard();
         }, false);
         document.querySelector('#reset-highscore').addEventListener('click', function () {
            gameBoard = createBoard();
            // Update everything else based on the new model state.
            updateGameBoard();
         }, false);
      }());
      // When the page is loaded, get any saved state from web storage and use it.
      gameBoard = createBoard(localStorage && localStorage.getItem && localStorage.getItem('CS 3312 Peggy Sue'));
      // Update everything else based on the new model state.
      updateGameBoard();
   }());
}, false);