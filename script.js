/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */


// globale variabelen
var kleur1a = 0;
var kleur2a = 0;
var kleur3a = 0;
var kleur1b = 0;
var kleur2b = 0;
var kleur3b = 0;
var kleur1c = 0;
var kleur2c = 0;
var kleur3c = 0;
var kleur1d = 0;
var kleur2d = 0;
var kleur3d = 0;
var kleur1e = 0;
var kleur2e = 0;
var kleur3e = 0;

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

var speedX1 = 5;
var speedY1 = 5;
var speedX2 = 7;
var speedY2 = 7;
var speedX3 = 6;
var speedY3 = 6;
var speedX4 = 8;
var speedY4 = 8;
var speedX5 = 9;
var speedY5 = 9;

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
  fill(kleur1a, kleur2a, kleur3a);

  // teken een cirkel
  ellipse(x1, y1, 80, 80);

  //positie updaten
  x1 = x1 + speedX1;
  y1 = y1 + speedY1;

  // laat stuiteren tegen de onderkant
  if (y1 >= 680) {
    speedY1 = speedY1 * -1;
    kleur1a = random(0,255);
    kleur2a = random(0,255);
    kleur3a = random(0,255);
  }

  if (x1 >= 1240){
    speedX1 = speedX1 * -1;
    kleur1a = random(0,255);
    kleur2a = random(0,255);
    kleur3a = random(0,255);
  }

  if (y1 <= 40) {
    speedY1 = speedY1 * -1;

    kleur1a = random(0,255);
    kleur2a = random(0,255);
    kleur3a = random(0,255);
  }

  if (x1 <= 40) {
    speedX1 = speedX1 * -1;
    kleur1a = random(0,255);
    kleur2a = random(0,255);
    kleur3a = random(0,255);
  }

  fill(kleur1b,kleur2b,kleur3b);

   // teken een cirkel
   ellipse(x2, y2, 80, 80);
 
   //positie updaten
   x2 = x2 + speedX2;
   y2 = y2 + speedY2;
 
   // laat stuiteren tegen de onderkant
   if (y2 >= 680) {
     speedY2 = speedY2 * -1;
     kleur1b = random(0,255);
     kleur2b = random(0,255);
     kleur3b = random(0,255);
   }
 
   if (x2 >= 1240){
     speedX2 = speedX2 * -1;
     kleur1b = random(0,255);
     kleur2b = random(0,255);
     kleur3b = random(0,255);
   }
 
   if (y2 <= 40) {
     speedY2 = speedY2 * -1;
     kleur1b = random(0,255);
     kleur2b = random(0,255);
     kleur3b = random(0,255);
   }
 
   if (x2 <= 40) {
     speedX2 = speedX2 * -1;
     kleur1b = random(0,255);
     kleur2b = random(0,255);
     kleur3b = random(0,255);
   }

   fill(kleur1c,kleur2c,kleur3c);

   // teken een cirkel
   ellipse(x3, y3, 80, 80);
 
   //positie updaten
   x3 = x3 + speedX3;
   y3 = y3 + speedY3;
 
   // laat stuiteren tegen de onderkant
   if (y3 >= 680) {
     speedY3 = speedY3 * -1;
     kleur1c = random(0,255);
     kleur2c = random(0,255);
     kleur3c = random(0,255);
   }
 
   if (x3 >= 1240){
     speedX3 = speedX3 * -1;
     kleur1c = random(0,255);
     kleur2c = random(0,255);
     kleur3c = random(0,255);
   }
 
   if (y3 <= 40) {
     speedY3 = speedY3 * -1;
     kleur1c = random(0,255);
     kleur2c = random(0,255);
     kleur3c = random(0,255);
   }
 
   if (x3 <= 40) {
     speedX3 = speedX3 * -1;
     kleur1c = random(0,255);
     kleur2c = random(0,255);
     kleur3c = random(0,255);
   }

   fill(kleur1d,kleur2d,kleur3d);

   // teken een cirkel
   ellipse(x4, y4, 80, 80);
 
   //positie updaten
   x4 = x4 + speedX4;
   y4 = y4 + speedY4;
 
   // laat stuiteren tegen de onderkant
   
   if (y4 >= 680) {
     speedY4 = speedY4 * -1;
     kleur1d = random(0,255);
     kleur2d = random(0,255);
     kleur3d = random(0,255);
   }
 
   if (x4 >= 1240){
     speedX4 = speedX4 * -1;
     kleur1d = random(0,255);
     kleur2d = random(0,255);
     kleur3d = random(0,255);
   }
 
   if (y4 <= 40) {
     speedY4 = speedY4 * -1;
     kleur1d = random(0,255);
     kleur2d = random(0,255);
     kleur3d = random(0,255);
    
   }
 
   if (x4 <= 40) {
     speedX4 = speedX4 * -1;
     kleur1d = random(0,255);
     kleur2d = random(0,255);
     kleur3d = random(0,255);
    }

   fill(kleur1e,kleur2e,kleur3e);

   // teken een cirkel
   ellipse(x5, y5, 80, 80);
 
   //positie updaten
   x5 = x5 + speedX5;
   y5 = y5 + speedY5;
 
   // laat stuiteren tegen de onderkant
   if (y5 >= 680) {
     speedY5 = speedY5 * -1;
     kleur1e = random(0,255);
     kleur2e = random(0,255);
     kleur3e = random(0,255);
   }
 
   if (x5 >= 1240){
     speedX5 = speedX5 * -1;
     kleur1e = random(0,255);
     kleur2e = random(0,255);
     kleur3e = random(0,255);
   }
 
   if (y5 <= 40) {
     speedY5 = speedY5 * -1;
     kleur1e = random(0,255);
     kleur2e = random(0,255);
     kleur3e = random(0,255);
   }
 
   if (x5 <= 40) {
     speedX5 = speedX5 * -1;
     kleur1e = random(0,255);
     kleur2e = random(0,255);
     kleur3e = random(0,255);
   }
}