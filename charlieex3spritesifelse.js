function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("khaki");

  if (mouseIsPressed) {
    pepperSprite(115, 230, 1.4);
  } else {
    blueberrySprite(-100, -75, 3);
  }
}

function blueberrySprite(bluebX, bluebY, bluebSize) {
  push();
  translate(bluebX, bluebY);
  scale(bluebSize);
  noStroke();
  fill("darkslateblue");
  ellipse(100, 100, 100);
  fill("hsl(230,40%,30%)");
  triangle(90, 70, 90, 85, 50, 60);
  triangle(80, 75, 100, 70, 95, 30);
  triangle(80, 70, 85, 90, 150, 70);
  triangle(100, 70, 90, 80, 120, 100);
  pop();
}

function pepperSprite(pepX, pepY, pepperSize) {
  translate(pepX, pepY);
  scale(pepperSize);
  noStroke();
  fill("hsl(5,80%,40%)");
  shearX(5);
  ellipse(0, 0, 100, 220);
  shearX(-7);
  ellipse(60, 0, 150, 220);
  shearX(-4);
  ellipse(120, 5, 100, 220);
  shearX(4);
  fill("yellowgreen");
  quad(50, -160, 60, -155, 70, -85, 40, -80);
}
