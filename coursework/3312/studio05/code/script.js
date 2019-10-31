/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 5
// YOUR NAMES: Zachary Deere, Lucas Levesque

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Each little web app is hidden from the others using an IIFE.
   (function () {
      var isPrime;
      // WRITE YOUR isPrime FUNCTION HERE
      isPrime = function (num) {
         var factor;
         for (factor = 2; factor < num; factor += 1) {
            if (num % factor === 0) {
               return false;
            }
         }
         return true;
      };
      // The report function is hidden from the isPrime function using an IIFE.
      (function () {
         var report;

         // WRITE YOUR report FUNCTION HERE
         report = function (usr) {
            if (isPrime(usr) === true) {
               document.querySelector('#prime-or-not').textContent = 'prime';
            } else {
               document.querySelector('#prime-or-not').textContent = 'not prime';
            }
            if (typeof usr !== 'number' || !isFinite(usr) || usr <= 1) {
               document.querySelector('#prime-or-not').textContent = 'not a number';
            }
         };

         // Call the report function even before there's a value to use.
         report();
         // When the number is changed at all, immediately . . .
         document.querySelector('#primality-input').addEventListener('input', function () {
            // . . . call the report function and pass it the user's value.
            report(parseInt(document.querySelector('#primality-input').value, 10));
         }, false);
      }());
   }());

   (function () {
      var fibonacci;

      // WRITE YOUR fibonacci FUNCTION HERE      
      fibonacci = function fibonacci(n) {
         if (n > 1) {
            return fibonacci(n - 2) + fibonacci(n - 1);
         }
         if (n === 0) {
            return 0;
         }
         return 1;
      };

      // Do things when the "Calculate it" button is clicked.
      document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
         var whichFibonacciNumber;
         // Get the user's number.
         whichFibonacciNumber = parseInt(document.querySelector('#fibonacci-input').value, 10);
         // Use the fibonacci function to calculate the output.
         document.querySelector('#which-fibonacci-number').textContent = whichFibonacciNumber.toString();
         document.querySelector('#fibonacci-number').textContent = fibonacci(whichFibonacciNumber).toString();
      }, false);
   }());

   (function () {
      var rememberTotal;

      // WRITE YOUR rememberTotal FUNCTION HERE
      rememberTotal = (function () {
         var total = 0;
      // Any number's larger than this one.
         return function (num) {
            if (typeof num === 'number' && isFinite(num)) {
               total = total + num;
            }
            return total;
         };
      }());

      // Output the initial total.
      document.querySelector('#total-number').textContent = rememberTotal();
      // Update and output the total whenever the "Add it to the total" button is clicked.
      document.querySelector('#add-to-total').addEventListener('click', function () {
         rememberTotal(parseFloat(document.querySelector('#number-input').value));
         document.querySelector('#total-number').textContent = rememberTotal();
      }, false);
   }());

   (function () {
      var reverseString;

      // WRITE YOUR reverseString FUNCTION HERE
      reverseString = function reverseString(str) {
         if (typeof str !== 'string' || str.length === 0) {
            return '';
         }
         return reverseString(str.slice(1)) + String.fromCharCode(str.charCodeAt(0));
      };

      (function () {
         var reversalInputElement;
         reversalInputElement = document.querySelector('#reversal-input');
         // When the user changes the string and focuses on another part of the page, reverse the new string.
         // Notice the difference between the 'change' event and the 'input' event.
         reversalInputElement.addEventListener('change', function () {
            reversalInputElement.value = reverseString(reversalInputElement.value);
         }, false);
      }());
   }());

   (function () {
      // If you like, write code here that will change the color of the square when the mouse interacts with it.
      // You may find the updateSquare function from the examples useful.
      var crazyColorsElement, randomizeColor;

      randomizeColor = function () {
         var blue, green, red;
         // Randomize the square's background color.
         red = Math.floor(Math.random() * 256);
         green = Math.floor(Math.random() * 256);
         blue = Math.floor(Math.random() * 256);
         crazyColorsElement.style.backgroundColor = 'rgb(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ')';
      };

      crazyColorsElement = document.querySelector('#colors');

      // Randomize the initial color.
      randomizeColor();

      // When text is entered on the page, the box changes colors.
      document.addEventListener('input', randomizeColor, false);

   }());

}, false);
