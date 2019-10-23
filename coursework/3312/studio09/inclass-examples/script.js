/*jslint browser: true, indent: 3 */

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict'; // Enforce stricter JavaScript rules.

   // Declare this function's local variables.
   var outputElement;

   // Save the output box in a variable.
   outputElement = document.querySelector('#output');

   // Do JavaScript things below, sending output to outputElement like this:
   outputElement.value += 'Howdy!\n';

}, false);
