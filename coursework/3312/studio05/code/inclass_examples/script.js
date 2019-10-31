/*jslint browser: true, indent: 3 */

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict'; // Enforce stricter JavaScript rules.

   // Declare this function's local variables.
   var f2, f3, f5, outputElement;

   // Save the output box in a variable.
   outputElement = document.querySelector('#output');

   // Create a function with the name f1 and save it in variable f2.  
   f2 = function f1(x) {
      if (x === undefined) {
         return '; done with' + f1.name;
      }
      return x + f1();
   };
	
   // Make f3 refer to the same function.
   f3 = f2;
   
   // Try to use f1, f2 and f3.
   //outputElement.value += f1('calling f1') + '\n';
   outputElement.value += f2('calling f2') + '\n';
   outputElement.value += f3('calling f3') + '\n';
   outputElement.value += 'f3.name' + f3.name + '\n';
   
   // Use a function to create a function.
   // The v variable becomes a private variable.
   // It can be accessed inside of f5 but not outside of it.
   f5 = (function () { // IIFE
      var v;
      v = 0;
      return function f4 () {
         v += 1;
         return v;
      };
   }());
   
   // Call f5 whenever the big textarea is clicked.
   outputElement.addEventListener('click', function () {
      outputElement.value += 'f5(): ' + f5() + '\n';
   }, false);
   
   // Use an anonymous and immediately call it to create a scope.
   (function () {
      var f6, v;
      v = 'old';
      f6 = function () {
         return v;
      };
      v = 'new';
      outputElement.value += 'v: ' + v + '\n';
      outputElement.value += 'f6: ' + f6 + '\n';
      outputElement.value += 'f6(): ' + f6() + '\n';
      v = Number.POSITIVE_INFINITY;
      outputElement.value += 'f6(): ' + f6() + '\n';
   }());
   
   // A loop without a loop!
   (function countDownFrom(n) {
      if (n >= 0) {
         countDownFrom(n - 1);
         outputElement.value += n.toString() + '\n';

      }
   }(9));

}, false);
