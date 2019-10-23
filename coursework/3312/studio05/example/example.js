/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Examples for Studio 5

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Create an anonymous function and call it immediately.
   // This is called an immediately invoked function expression (IIFE).
   // It's a handy way to create a scope that hides variables from the rest of the code.
   // Each little web app can be hidden from the others using an IIFE.
   (function () {
      var rollDie;

      // In JavaScript, a function is just a value and can be assigned to a variable.
      rollDie = function (numSides) {
         // Use a default number if numSides is not a valid number of sides.
         if (typeof numSides !== 'number' || !isFinite(numSides) || numSides < 2) {
            numSides = 6;
         }
         // Make sure numSides is a whole number.
         numSides = Math.round(numSides);
         // Return a random integer between 1 and numSides.
         return Math.floor(Math.random() * numSides) + 1;
      };

      // Do things when the user clicks the "Roll the die" button.
      document.querySelector('#roll-die').addEventListener('click', function () {
         var numberOfSides;

         numberOfSides = parseInt(document.querySelector('#number-of-sides').value, 10);
         // Call the rollDie function to get the result.
         document.querySelector('#die-output').textContent = rollDie(numberOfSides).toString();
      }, false);
   }());

   document.querySelector('#calculate-factorial').addEventListener('click', function () {
      var factorial, inputNumber, outputNumber;

      inputNumber = parseInt(document.querySelector('#factorial-input').value, 10);
      if (!isFinite(inputNumber) || inputNumber < 0) {
         document.querySelector('#factorial-output').value += 'I need a nonnegative integer.\n';
         // Return immediately from this event handler function.
         return;
      }

      // Calculate a factorial using iteration.
      factorial = function (num) {
         var factor, result;
         if (typeof num !== 'number' || !isFinite(num) || num <= 1) {
            return 1;
         }
         result = 1;
         for (factor = 1; factor <= num; factor += 1) {
            result *= factor;
         }
         return result;
      };
      outputNumber = factorial(inputNumber);

      // Calculate a factorial using recursion.
      factorial = function factorial(num) {
         if (typeof num !== 'number' || !isFinite(num) || num <= 1) {
            return 1;
         }
         return num * factorial(num - 1);
      };
      // Make sure both results agree.
      if (factorial(inputNumber) === outputNumber) {
         document.querySelector('#factorial-output').value += inputNumber.toString() + '! = ' + outputNumber.toString() + '\n';
      } else {
         document.querySelector('#factorial-output').value += 'The functions disagree!\n';
      }
   }, false);

   (function () {
      var rot13;

      // Recursively construct the ROT13ed version of a plaintext string.
      rot13 = function rot13(plaintext) {
         var charCode;
         // If it's not a string or has no characters, just return the empty string.
         if (typeof plaintext !== 'string' || plaintext.length === 0) {
            return '';
         }
         // Get the character code for the first character.
         charCode = plaintext.charCodeAt(0);
         // If it's a letter . . .
         if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
            // . . . add 13 to it . . .
            charCode += 13;
            // . . . and then fix it if it goes beyond the end of the alphabet.
            if (charCode > 'Z'.charCodeAt(0)) {
               charCode -= 26;
            }
         }
         // Return the ROT13ed first character concatenated to the ROT13ed rest of the string.
         return String.fromCharCode(charCode) + rot13(plaintext.slice(1));
      };

      // Do things when the user clicks the "Encipher it with ROT13!" button.
      document.querySelector('#encipher').addEventListener('click', function () {
         var newMessage, oldMessage;

         // Get the input message changed to all uppercase.
         oldMessage = document.querySelector('#cipher-message').value.toUpperCase();
         // Encipher it with ROT13.
         newMessage = rot13(oldMessage);
         // Output the enciphered message.
         document.querySelector('#cipher-message').value = newMessage;
      }, false);
   }());

   (function () {
      var blue, green, red, somberColorsElement, updateSquare;

      updateSquare = function (r, g, b) {
         // Use RGB levels to update the square's background color.
         somberColorsElement.style.backgroundColor = 'rgb(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ')';
      };

      somberColorsElement = document.querySelector('#somber-colors');

      // Make the initial color completely random.
      red = Math.floor(Math.random() * 256);
      green = Math.floor(Math.random() * 256);
      blue = Math.floor(Math.random() * 256);
      updateSquare(red, green, blue);

      // Do things when the user moves the mouse inside the "somber colors" square.
      somberColorsElement.addEventListener('mousemove', function () {
         // Randomly and slightly adjust red, green and blue.
         // The higher the current value, the more likely it will go down.
         if (Math.random() * 255 < red) {
            red -= 10;
         } else {
            red += 10;
         }
         if (Math.random() * 255 < green) {
            green -= 10;
         } else {
            green += 10;
         }
         if (Math.random() * 255 < blue) {
            blue -= 10;
         } else {
            blue += 10;
         }
         // Use the updated RGB levels to update the square's background color.
         updateSquare(red, green, blue);
      }, false);
   }());

   (function () {
      var crazyColorsElement, randomizeColor;

      randomizeColor = function () {
         var blue, green, red;
         // Randomize the square's background color.
         red = Math.floor(Math.random() * 256);
         green = Math.floor(Math.random() * 256);
         blue = Math.floor(Math.random() * 256);
         crazyColorsElement.style.backgroundColor = 'rgb(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ')';
      };

      crazyColorsElement = document.querySelector('#crazy-colors');

      // Randomize the initial color.
      randomizeColor();

      // When the square is clicked down, make it so that moving the mouse anywhere changes the color.
      crazyColorsElement.addEventListener('mousedown', function () {
         document.addEventListener('mousemove', randomizeColor, false);
      }, false);

      // When the mouse is released, make it so that moving the mouse does nothing again.
      document.addEventListener('mouseup', function () {
         document.removeEventListener('mousemove', randomizeColor, false);
      }, false);
   }());

   (function () {
      var rememberMessage;

      // Use an IIFE to create a function.
      // The savedMessage variable becomes a private variable.
      // It can be accessed inside of rememberMessage but not outside of it.
      rememberMessage = (function () {
         var savedMessage;
         savedMessage = 'No message saved yet.';
         // The following function gets returned and saved in the rememberMessage variable.
         return function (message) {
            if (typeof message === 'string') {
               savedMessage = message;
            }
            return savedMessage;
         };
      }());

      // Remember the user's message when the "Save message" button is clicked.
      document.querySelector('#set-message').addEventListener('click', function () {
         rememberMessage(document.querySelector('#message-to-remember').value);
         document.querySelector('#message-to-remember').value = '';
      }, false);

      // Recall the user's message when the "Get remembered message" button is clicked.
      document.querySelector('#get-message').addEventListener('click', function () {
         document.querySelector('#message-to-remember').value = rememberMessage();
      }, false);
   }());

   (function () {
      var rememberLargestNumber;

      // Use an IIFE to create a function with a private variable.
      rememberLargestNumber = (function () {
         var largestNum;
         largestNum = Number.NEGATIVE_INFINITY; // Any number's larger than this one.
         return function (num) {
            if (typeof num === 'number' && num > largestNum) {
               largestNum = num;
            }
            return largestNum;
         };
      }());

      // Do things when the number-input element changes value at all.
      document.querySelector('#number-input').addEventListener('input', function () {
         var largestNumber, newestNumber;
         newestNumber = parseFloat(document.querySelector('#number-input').value);
         largestNumber = rememberLargestNumber(newestNumber);
         document.querySelector('#largest-number').textContent = largestNumber.toString();
      }, false);
   }());
   
   function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

}, false);
