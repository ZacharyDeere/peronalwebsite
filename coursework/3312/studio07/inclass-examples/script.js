/*jslint browser: true, indent: 3 */

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict'; // Enforce stricter JavaScript rules.

   // Declare this function's local variables.
   var a, inputString, o, outputElement;

   // Save the output box in a variable.
   outputElement = document.querySelector('#output');

   // Do JavaScript things below, sending output to outputElement like this:
   a = ['ASU', 9, true, {prop: 'value'}, {}, 3.14];
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   outputElement.value += '-----------------------' + '\n';
   
   a = [];
   a[0] = 'ASU';
   a[1] = 9;
   a[2] = true;
   a[3] = {prop: 'value'};
   a[4] = {};
   a[5] = 3.14;
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a[0] = 43;
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a.push(73);
   
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   outputElement.value += 'Value popped off: ' +a.pop() + '\n';
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   outputElement.value += 'Value shifted off: ' +a.shift() + '\n';
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a[3] = undefined;
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   delete a[3];
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a.splice(1, 2);
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   inputString = 'This is a sentence of words';
   a = inputString.split(' ');
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   outputElement.value += a.join(' / ') + '\n';
   outputElement.value += a.join() + '\n';
   outputElement.value += a.join('') + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a = a.slice(1, 5);
   
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';

   a = [4,13,31,94,54,456];
   outputElement.value += 'Before sorting:' + '\n';
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a.sort( function (x,y) {
      return x - y;
   });
   
   outputElement.value += 'After sorting:' + '\n';
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a.reverse();
   
   outputElement.value += 'After sorting:' + '\n';
   a.forEach(function (value, index){
      outputElement.value += index + ': ' + value + '\n';
   });
   
   outputElement.value += 'length= ' +a.length + '\n';
   
   outputElement.value += '-----------------------' + '\n';
   
   a = [
      {name: 'Jose', number: 19},
      {name: 'Josh', number: 20},
      {name: 'Edwin', number: 10}
   ];
   
   a.forEach(function (value, index) {
      //outputElement.value += index + ': ' + value + '\n';
      Object.keys(value).forEach(function (prop){
         outputElement.value += index + ': ' + value[prop] + '\n';
      });
   });
   
   outputElement.value += '-----------------------' + '\n';
   
   o = {
      name: ['Jose','Josh','Edwin'],
      number: [19,20,10]
   };
   
   Object.keys(o).forEach(function (prop){
      o[prop].forEach(function (value, index){
         outputElement.value += index + ': ' + value + '\n';
      });
   });
   
}, false);