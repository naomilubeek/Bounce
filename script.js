/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */


// globale variabelen
var x1 = 50;
var y1 = 50;
var x2 = 50;
var y2 = 50;
var x3 = 50;
var y3 = 50;
var x4 = 50;
var y4 = 50;
var x5 = 50;
var y5 = 50;

var speedX1 = 3;
var speedY1 = 3;
var speedX2 = 5;
var speedY2 = 5;
var speedX3 = 5;
var speedY3 = 5;
var speedX4 = 5;
var speedY4 = 5;
var speedX5 = 5;
var speedY5 = 5;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
  
  
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x1, y1, 80, 80);

  //positie updaten
  x1 = x1 + speedX1;
  y1 = y1 + speedY1;

  // laat stuiteren tegen de onderkant
  if (y1 === 680) {
    speedY1 = speedY1 * -1;
  }

  if (x1 === 1240){
    speedX1 = speedX1 * -1;
  }

  if (y1 === 40) {
    speedY1 = speedY1 * -1;
  }

  if (x1 === 40) {
    speedX1 = speedX1 * -1;
  }

  fill(0,0,0);

   // teken een cirkel
   ellipse(x2, y2, 80, 80);
 
   //positie updaten
   x2 = x2 + speedX2;
   y2 = y2 + speedY2;
 
   // laat stuiteren tegen de onderkant
   if (y2 === 680) {
     speedY2 = speedY2 * -1;
   }
 
   if (x2 === 1240){
     speedX2 = speedX2 * -1;
   }
 
   if (y2 === 40) {
     speedY2 = speedY2 * -1;
   }
 
   if (x2 === 40) {
     speedX2 = speedX2 * -1;
   }
}