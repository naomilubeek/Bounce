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
var speedX3 = 4;
var speedY3 = 4;
var speedX4 = 6;
var speedY4 = 6;
var speedX5 = 7;
var speedY5 = 7;

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
  background('black');

  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x1, y1, 80, 80);

  //positie updaten
  x1 = x1 + speedX1;
  y1 = y1 + speedY1;

  // laat stuiteren tegen de onderkant
  if (y1 >= 680) {
    speedY1 = speedY1 * -1;
  }

  if (x1 >= 1240){
    speedX1 = speedX1 * -1;
  }

  if (y1 <= 40) {
    speedY1 = speedY1 * -1;
  }

  if (x1 <= 40) {
    speedX1 = speedX1 * -1;
  }

  fill(255,255,0);

   // teken een cirkel
   ellipse(x2, y2, 80, 80);
 
   //positie updaten
   x2 = x2 + speedX2;
   y2 = y2 + speedY2;
 
   // laat stuiteren tegen de onderkant
   if (y2 >= 680) {
     speedY2 = speedY2 * -1;
   }
 
   if (x2 >= 1240){
     speedX2 = speedX2 * -1;
   }
 
   if (y2 <= 40) {
     speedY2 = speedY2 * -1;
   }
 
   if (x2 <= 40) {
     speedX2 = speedX2 * -1;
   }

   fill(255,40,60);

   // teken een cirkel
   ellipse(x3, y3, 80, 80);
 
   //positie updaten
   x3 = x3 + speedX3;
   y3 = y3 + speedY3;
 
   // laat stuiteren tegen de onderkant
   if (y3 >= 680) {
     speedY3 = speedY3 * -1;
   }
 
   if (x3 >= 1240){
     speedX3 = speedX3 * -1;
   }
 
   if (y3 <= 40) {
     speedY3 = speedY3 * -1;
   }
 
   if (x3 <= 40) {
     speedX3 = speedX3 * -1;
   }

   fill(50,60,255);

   // teken een cirkel
   ellipse(x4, y4, 80, 80);
 
   //positie updaten
   x4 = x4 + speedX4;
   y4 = y4 + speedY4;
 
   // laat stuiteren tegen de onderkant
   
   if (y4 >= 680) {
     speedY4 = speedY4 * -1;
   }
 
   if (x4 >= 1240){
     speedX4 = speedX4 * -1;
   }
 
   if (y4 <= 40) {
     speedY4 = speedY4 * -1;
   }
 
   if (x4 <= 40) {
     speedX4 = speedX4 * -1;
   }

   fill(0,200,0);

   // teken een cirkel
   ellipse(x5, y5, 80, 80);
 
   //positie updaten
   x5 = x5 + speedX5;
   y5 = y5 + speedY5;
 
   // laat stuiteren tegen de onderkant
   if (y5 >= 680) {
     speedY5 = speedY5 * -1;
   }
 
   if (x5 >= 1240){
     speedX5 = speedX5 * -1;
   }
 
   if (y5 <= 40) {
     speedY5 = speedY5 * -1;
   }
 
   if (x5 <= 40) {
     speedX5 = speedX5 * -1;
   }
}