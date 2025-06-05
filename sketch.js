let x;
let y;

function setup() {
  createCanvas(600, 600);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(176,224,230)
  fill (240,128,128)
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX,mouseY,x,y);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);
  //console.log(distancia);
textSize(60);
  if (distancia < 3) {
    text("ACHEI!", 200,300);
    noLoop();
  }
}
