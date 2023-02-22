function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('hsl(200,100%,90%)');
  translate(50,100)
  justATriangle('rgb(180,20,300)');
  justACircle('rgb(140,200,20)');
  justAQuadrilateral('rgb(300,160,0)');
  
}

function justATriangle(paint){
  fill(paint);
  triangle(0,0,100,0,50,50);
}

function justACircle(paint2){
  fill(paint2);
  ellipse(120,80,100);
}

function justAQuadrilateral(paint3){
  fill(paint3);
  quad(210,50,250,40,250,80,180,90)
}
