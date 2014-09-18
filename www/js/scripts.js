
// INTERACTION
// ////////////////////////////////////////////////////


var arc_radius = 300;
var hour_radian;
var minute_radian;
var second_radian;

function setup() {
    createCanvas(windowWidth, windowHeight);

    ellipseMode(CENTER);
    strokeWeight(arc_radius/10);
    strokeCap(ROUND);
    noFill();
}

function draw() {
    hour_radian     = radians( (360 / 24) * hour() );
    minute_radian   = radians( (360 / 60) * minute() );
    second_radian   = radians( (360 / 60) * second() );

    background(255);

    // Outter arc
    stroke(255, 0, 0);
    arc(width/2, height/2, arc_radius, arc_radius, -HALF_PI, second_radian -HALF_PI);

    // Middle arc
    stroke(0, 255, 0);
    arc(width/2, height/2, arc_radius * .78, arc_radius * .78, -HALF_PI, minute_radian -HALF_PI);

    // Inner arc
    stroke(0, 0, 255);
    arc(width/2, height/2, arc_radius * .56, arc_radius * .56, -HALF_PI, hour_radian -HALF_PI);
}

function reset_clock() {
    redraw();
}

// var delay = (function(){
//   var timer = 0;
//   return function(callback, ms){
//     clearTimeout (timer);
//     timer = setTimeout(callback, ms);
//   };
// })();
//
//
//
// $(window).resize(function () {
// 	delay(function(){
// 		console.log('Resize...');
// 	      initContainer(true);
// 	}, 100);
// });
