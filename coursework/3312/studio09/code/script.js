/*jslint browser: true, indent: 3 */

// CS 3312, spring 2018
// Studio 9
// YOUR NAMES: Zachary Deere and Lucas Levesque

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Add functionality to the sketchy area.
   (function () {
      var sketchyCanvas, sketchyContext, updateSketchyCanvas;

      // Get the canvas object and its two-dimensional rendering context.
      sketchyCanvas = document.querySelector('#sketchy');
      sketchyContext = sketchyCanvas && sketchyCanvas.getContext && sketchyCanvas.getContext('2d');
      if (!sketchyContext) {
         return;
      }

      // Size the canvas.
      sketchyCanvas.width = 360;
      sketchyCanvas.height = 360;

      // WRITE YOUR updateSketchyCanvas FUNCTION HERE
      updateSketchyCanvas = function () {
         (function () {
            sketchyContext.fillStyle = 'rgb(0, 0, 0)';
            sketchyContext.fillRect(0, 0, 360, 360);
            sketchyContext.fillStyle = 'rgb(255, 255, 255)';
            sketchyContext.fillRect(1, 1, 358, 358);
         }());
         (function () {
            var controlPoints;

            // Define some control points for a Bezier curve.
            controlPoints = [
               {
                  color: 'rgb(255, 0, 0)',
                  x: 100,
                  y: 50
               }, {
                  color: 'rgb(85, 0, 255)',
                  x: 0,
                  y: 50
               }, {
                  color: 'rgb(0, 85, 255)',
                  x: 175,
                  y: 300
               }, {
                  color: 'rgb(0, 255, 0)',
                  x: 75,
                  y: 300
               }
            ];

            // Draw the Bezier curve.
            sketchyContext.lineWidth = 9;
            sketchyContext.lineCap = 'round';
            sketchyContext.beginPath();
            sketchyContext.moveTo(controlPoints[0].x, controlPoints[0].y);
            sketchyContext.bezierCurveTo(controlPoints[1].x, controlPoints[1].y, controlPoints[2].x, controlPoints[2].y, controlPoints[3].x, controlPoints[3].y);
            sketchyContext.strokeStyle = 'rgb(0, 0, 185)';
            sketchyContext.stroke();
         }());
         (function () {
            // Draw a pie chart.
            // draws the back black circle to give us a nice outline
            sketchyContext.beginPath();
            sketchyContext.moveTo(285, 70);
            sketchyContext.arc(285, 70, 63,  0, 2 * Math.PI, false);
            sketchyContext.fillStyle = 'rgb(0, 0, 0)';
            sketchyContext.fill();
            // draws the red sector
            sketchyContext.beginPath();
            sketchyContext.moveTo(285, 70);
            sketchyContext.arc(285, 70, 60, 3 * Math.PI / 2, 0, false);
            sketchyContext.fillStyle = 'rgb(255, 0, 0)';
            sketchyContext.fill();
            // draws the green sector
            sketchyContext.beginPath();
            sketchyContext.moveTo(285, 70);
            sketchyContext.arc(285, 70, 60,  0, Math.PI / 2, false);
            sketchyContext.fillStyle = 'rgb(0, 0, 255)';
            sketchyContext.fill();
            // draws the yellow sector
            sketchyContext.beginPath();
            sketchyContext.moveTo(285, 70);
            sketchyContext.arc(285, 70, 60,  Math.PI / 2, Math.PI, false);
            sketchyContext.fillStyle = 'rgb(255, 255, 0)';
            sketchyContext.fill();
            // draws the green sector
            sketchyContext.beginPath();
            sketchyContext.moveTo(285, 70);
            sketchyContext.arc(285, 70, 60,  Math.PI, 3 * Math.PI / 2, false);
            sketchyContext.fillStyle = 'rgb(0, 255, 0)';
            sketchyContext.fill();
            // draws the middle black circle
            sketchyContext.beginPath();
            sketchyContext.moveTo(285, 70);
            sketchyContext.arc(285, 70, 20,  0, 2 * Math.PI, false);
            sketchyContext.fillStyle = 'rgb(0, 0, 0)';
            sketchyContext.fill();
         }());
         // creates the 'L' number 1
         sketchyContext.beginPath();
         sketchyContext.moveTo(200, 200);
         sketchyContext.lineTo(200, 300);
         sketchyContext.lineTo(250, 300);
         sketchyContext.lineTo(250, 285);
         sketchyContext.lineTo(215, 285);
         sketchyContext.lineTo(215, 200);
         sketchyContext.closePath();
         sketchyContext.fillStyle = 'rgb(196, 0, 0)';
         sketchyContext.fill();
         sketchyContext.lineWidth = 2;
         // creates the 'L' number 1
         sketchyContext.beginPath();
         sketchyContext.moveTo(275, 200);
         sketchyContext.lineTo(275, 300);
         sketchyContext.lineTo(325, 300);
         sketchyContext.lineTo(325, 285);
         sketchyContext.lineTo(290, 285);
         sketchyContext.lineTo(290, 200);
         sketchyContext.closePath();
         sketchyContext.strokeStyle = 'rgba(25, 200, 25, 1)';
         sketchyContext.stroke();
      };

      // Draw on the canvas.
      updateSketchyCanvas();
   }());

   // Add functionality to the Voronoi area.
   (function () {
      var generatingPoints, getPointFromEvent, updateVoronoiDiagram, voronoiCanvas, voronoiContext;

      // Get the canvas object and its two-dimensional rendering context.
      voronoiCanvas = document.querySelector('#voronoi');
      voronoiContext = voronoiCanvas && voronoiCanvas.getContext && voronoiCanvas.getContext('2d');
      if (!voronoiContext) {
         document.querySelector('#voronoi-instructions').textContent = 'Your browser does not seem to support the <canvas> element correctly; please use a recent version of a standards-compliant browser such as Opera, Chrome or Firefox.';
         return;
      }

      // Size the canvas.
      voronoiCanvas.width = 360;
      voronoiCanvas.height = 360;
      // Fill the canvas with black.
      voronoiContext.fillStyle = 'rgb(0, 0, 0)';
      voronoiContext.fillRect(0, 0, voronoiCanvas.width, voronoiCanvas.height);

      // At first we have no generating points.
      generatingPoints = [];

      // WRITE YOUR getPointFromEvent FUNCTION HERE
      getPointFromEvent = function (ev) {
         var rect;
         rect = voronoiCanvas.getBoundingClientRect();
         return {
            color: 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')',
            x: ev.clientX - rect.left,
            y: ev.clientY - rect.top
         };
      };

      // A function that finds the correct color of the pixel
      function closestPoint(x, y) {
         var smallestColor, smallestNum;
         smallestNum = 400;
         generatingPoints.forEach(function (ev) {
            if (Math.sqrt((Math.pow((x + 0.5) - ev.x, 2)) + (Math.pow((y + 0.5) - ev.y, 2))) < smallestNum) {
               smallestColor = ev.color;
               smallestNum = Math.sqrt((Math.pow(x - ev.x, 2)) + (Math.pow(y - ev.y, 2)));
            }
         });
         return smallestColor;
      }
      // WRITE YOUR updateVoronoiDiagram FUNCTION HERE
      updateVoronoiDiagram = function () {
         var x, y;
         for (x = 0; x <= 360; x += 1) {
            for (y = 0; y <= 360; y += 1) {
               voronoiContext.fillStyle = closestPoint(x, y);
               voronoiContext.fillRect(x, y, 1, 1);
            }
         }
         generatingPoints.forEach(function (ev) {
            // builds the outside circle black
            voronoiContext.beginPath();
            voronoiContext.moveTo(ev.x, ev.y);
            voronoiContext.arc(ev.x, ev.y, 5, 0, 2 * Math.PI, false);
            voronoiContext.fillStyle = ('rgb(0, 0, 0)');
            voronoiContext.fill();
            // builds the outside circle white
            voronoiContext.beginPath();
            voronoiContext.moveTo(ev.x, ev.y);
            voronoiContext.arc(ev.x, ev.y, 4, 0, 2 * Math.PI, false);
            voronoiContext.fillStyle = ('rgb(255, 255, 255)');
            voronoiContext.fill();
            // builds the outside circle the color of the sector
            voronoiContext.beginPath();
            voronoiContext.moveTo(ev.x, ev.y);
            voronoiContext.arc(ev.x, ev.y, 3, 0, 2 * Math.PI, false);
            voronoiContext.fillStyle = (ev.color);
            voronoiContext.fill();
         });
      };

      // When the canvas is clicked, add a generating point and redraw the Voronoi diagram.
      voronoiCanvas.addEventListener('click', function (ev) {
         generatingPoints.push(getPointFromEvent(ev));
         updateVoronoiDiagram();
      }, false);
   }());

   // Add functionality to the ripples area.
   (function () {
      var drawRipple, ripplesCanvas, ripplesContext;

      // Get the canvas object and its two-dimensional rendering context.
      ripplesCanvas = document.querySelector('#ripples');
      ripplesContext = ripplesCanvas && ripplesCanvas.getContext && ripplesCanvas.getContext('2d');
      if (!ripplesContext) {
         document.querySelector('#ripples-instructions').textContent = 'Your browser does not seem to support the <canvas> element correctly; please use a recent version of a standards-compliant browser such as Opera, Chrome or Firefox.';
         return;
      }

      // Size the canvas.
      ripplesCanvas.width = 360;
      ripplesCanvas.height = 360;

      // Fill the canvas with a dark color.
      ripplesContext.fillStyle = 'rgb(0, 17, 51)';
      // makes and fills the background to a dark blue
      ripplesContext.fillRect(0, 0, ripplesCanvas.width, ripplesCanvas.height);

      // WRITE YOUR drawRipple FUNCTION HERE
      drawRipple = function (state) {
         ripplesContext.beginPath();
         ripplesContext.fillStyle = 'rgb(0, 17, 51)';
         ripplesContext.arc(state.x, state.y, state.radius, 0, 2 * Math.PI, false);
         ripplesContext.fill();
         state.radius = state.radius + state.radiusIncrement;
         state.opacity = state.opacity + state.opacityIncrement;
         if (state.opacity > 0) {
            // builds the rippled circle
            ripplesContext.beginPath();
            // makes the light blue circle
            ripplesContext.fillStyle = 'rgba(100, 200, 255, ' + state.opacity + ')';
            ripplesContext.arc(state.x, state.y, state.radius, 0, 2 * Math.PI, false);
            ripplesContext.fill();
            // lets the circle get bigger for certain amount of time
            setTimeout(function () {
               drawRipple(state);
            }, state.timeIncrement);
         }
      };

      // When the mouse is moved over the canvas, animate an expanding and fading ripple.
      ripplesCanvas.addEventListener('click', function (ev) {
         var rect;
         rect = ripplesCanvas.getBoundingClientRect();
         drawRipple({
            opacity: 1, // initial opacity
            opacityIncrement: -0.01, // how much to fade each timer tick
            radius: 0, // initial radius of ripple
            radiusIncrement: 1, // number of pixels to increase radius each timer tick
            timeIncrement: 10, // milliseconds for each timer tick
            x: ev.clientX - rect.left, // x coordinate of center of ripple
            y: ev.clientY - rect.top // y coordinate of center of ripple
         });
      }, false);
   }());

}, false);
