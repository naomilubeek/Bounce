/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

var eenX = 50;
var eenY = 50;

var tweeX = 100;
var tweeY = 100;

var speedEenX = 10;
var speedEenY = 10;

var speedTweeX = 5;
var speedTweeY = 5; 

function setup() {          // tekent een canvas
  createCanvas(1280, 720);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
  background(153, 153, 255);
  // stel vulkleur in
  fill(0, 0, 0);

  // teken een cirkel
  ellipse(eenX,eenY,80,80);

  eenX = eenX + speedEenX; // zorgt dat bal beweegt
  eenY = eenY + speedEenY;
  
if (eenY===680){
  speedEenY = speedEenY * -1
}

if (eenX===1240){
  speeEenX = speedEenX * -1
}

if(eenY===40){
  speedEenY= speedEenY * -1
}

if(eenX===40){
  speedEenX = speedEenX * -1
}

background(153, 153, 255);
// stel vulkleur in
fill(255, 255, 255);

  // teken een cirkel
  ellipse(tweeX,tweeY,80,80);

  tweeX = tweeX + speedTweeX; // zorgt dat bal beweegt
  tweeY = tweeY + speedTweeY;
  
if (tweeY===680){
  speedTweeY = speedTweeY * -1
}

if (tweeX===1240){
  speedTweeX = speedTweeX * -1
}

if(tweeY===40){
  speedTweeY= speedTweeY * -1
}

if(tweeX===40){
  speedTweeX = speedTweeX * -1
}

}



  

 