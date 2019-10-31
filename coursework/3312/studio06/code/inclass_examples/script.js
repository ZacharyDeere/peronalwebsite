/*jslint browser: true, indent: 3 */

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict'; // Enforce stricter JavaScript rules.

   // Declare this function's local variables.
   var createPlayer, outputElement, player;

   // Save the output box in a variable.
   outputElement = document.querySelector('#output');
   
   // Create an object with properties
   player = {
      firstName: 'Josh',
      lastName: 'Donaldson',
      uniformNumber: 20,
      position: 5,
      onBaseAverage: 0.404
   };
   //same as above
   player = {};
   player.firstName = 'Josh';
   player.lastName = 'Donaldson';
   player.uniformNumber = 20;
   player.position = 5;
   player.onBaseAverage = 0.404;
   // also works
   player['onBaseAverage'] = 0.404;
   
   Object.keys(player).forEach(function (prop) {
      outputElement.value += prop + ': ' + player[prop] + '\n';
   });
   
   outputElement.value += '---' + '\n';
   
   delete player.firstName;
   delete player['lastName'];
   
   Object.keys(player).forEach(function (prop) {
      outputElement.value += prop + ': ' + player[prop] + '\n';
   });
   outputElement.value += '---' + '\n';
   outputElement.value += 'player.firstName: ' + player.firstName + '\n';
   outputElement.value += '---' + '\n';
   
   player.name = {
      first: 'Josh',
      last: 'Donaldson'
   };
   
   Object.keys(player).forEach(function (prop) {
      outputElement.value += prop + ': ' + player[prop] + '\n';
   });
   
   outputElement.value += '---' + '\n';
   
   outputElement.value += JSON.stringify(player) + '\n';
   outputElement.value += '---' + '\n';
   
   player.getFullName = function () {
      return player.name.first + ' ' + player.name.last;
   };
   
   Object.keys(player).forEach(function (prop) {
      outputElement.value += prop + ': ' + player[prop] + '\n';
   });
   
   outputElement.value += player.getFullName() + '\n';
   outputElement.value += '---' + '\n';
   
   outputElement.value += JSON.stringify(player) + '\n';
   outputElement.value += '---' + '\n';
   
   createPlayer = function (args) {
      var newPlayer;
      newPlayer = {};
      if (args.hasOwnProperty('uniformNumber')) {
         newPlayer.uniformNumber = args.uniformNumber;
      } else {
         newPlayer.uniformNumber = 20;
      }
      if (args.hasOwnProperty('position')) {
         newPlayer.position = args.position;
      } else {
         newPlayer.position = 5;
      }
      if (args.hasOwnProperty('onBaseAverage')) {
         newPlayer.onBaseAverage = args.onBaseAverage;
      } else {
         newPlayer.onBaseAverage = 0.404;
      }
      if (args.hasOwnProperty('firstName') && args.hasOwnProperty('lastName')) {
         newPlayer.name = {
            first: args.firstName,
            last: args.lastName
         };
      } else {
         newPlayer.name = {
            first: 'Josh',
            last: 'Donaldson'
         };
      }
      return newPlayer;
   }; 
   
   player = createPlayer({
      firstName: 'Jackie',
      lastName: 'Robinson',
      uniformNumber: 42,
      onBaseAverage: 0.400
   });
   
   Object.keys(player).forEach(function (prop) {
      outputElement.value += prop + ': ' + player[prop] + '\n';
   });
   outputElement.value += JSON.stringify(player) + '\n';
   outputElement.value += '---' + '\n';
   
}, false);
