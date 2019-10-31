/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 4
// YOUR NAMES: Zachary Deere and Lucas Levesque

// All the code below will be run once the page content finishes loading.
// Fahrenheit to Celsius conversion app
document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   var fahr, celc;
   document.querySelector('#convert-f-to-c').addEventListener('click', function () {
      fahr = document.querySelector('#fahrenheit').value;
      celc = (fahr - 32) * (5 / 9);
      if (typeof fahr !== 'number' && isFinite(fahr)) {
         document.querySelector('#celsius').value = celc.toFixed(3);
      } else {
         document.querySelector('#celsius').value = 'Bad input.';
      }
   }, false);
   document.querySelector('#convert-c-to-f').addEventListener('click', function () {
      celc = document.querySelector('#celsius').value;
      fahr = (celc / (5 / 9)) + 32;
      if (typeof celc !== 'number' && isFinite(celc)) {
         document.querySelector('#fahrenheit').value = fahr.toFixed(3);
      } else {
         document.querySelector('#fahrenheit').value = 'Bad input.';
      }
   }, false);
// App that displays a box to your desired height and width
   document.querySelector('#draw-star-box').addEventListener('click', function () {
      var size, outside, inside, boxString = '';
      size = document.querySelector('#size-of-box').value;
      if (size >= 0) {
         for (outside = 0; outside < size; outside += 1) {
            for (inside = 0; inside < size; inside += 1) {
               if (inside === 0 || inside === (size - 1) || outside === (size - 1) || outside === 0) {
                  boxString = boxString + '*';
               } else {
                  boxString = boxString + ' ';
               }
            }
            boxString = boxString + '\n';
            document.querySelector('#star-box-output').value = boxString;
         }
      } else {
         document.querySelector('#star-box-output').value = 'I need a number to draw a box.';
      }
   }, false);
// App that calculates the hailstone of a number that the user inputs
   document.querySelector('#print-hailstone').addEventListener('click', function () {
      var num, outString, total = 1;
      num = document.querySelector('#starting-number').value;
      if (num > 0 && isFinite(num)) {
         outString = num + '\n';
         while (num > 1) {
            total = total + 1;
            if (num % 2 === 0) {
               num = num / 2;
            } else {
               num = (num * 3) + 1;
            }
            outString = outString + (num + '\n');
         }
         outString = outString + ('Length = ' + total);
         document.querySelector('#hailstone-output').value = outString;
      } else {
         document.querySelector('#hailstone-output').value = 'I need a number to start with.';
      }
   }, false);
// App that displays nested stars boxes much like draw-star-box but more complicated
   document.querySelector('#draw-star-boxes').addEventListener('click', function () {
      var size, row, col, boxString = '', a, b, c, d, min;
      size = document.querySelector('#size-of-outer-box').value;
      if (size >= 0) {
         for (row = 0; row <= size - 1; row += 1) {
            for (col = 0; col <= size - 1; col += 1) {
               a = row;
               b = (size - 1) - row;
               c = col;
               d = (size - 1) - col;
               min = a;
               if (b < min) {
                  min = b;
               }
               if (c < min) {
                  min = c;
               }
               if (d < min) {
                  min = d;
               }
               if (min % 2 === 0) {
                  boxString = boxString + '*';
               } else {
                  boxString = boxString + ' ';
               }
            }
            boxString = boxString + '\n';
            document.querySelector('#star-boxes-output').value = boxString;
         }
      } else {
         document.querySelector('#star-boxes-output').value = 'I need a number to draw a box.';
      }
   }, false);
}, false);