function setup() {
  console.log("Hello, World!");
  createCanvas(900, 900);
  noCursor();

  colorMode(HSB,360,100,100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  console.log("penis");
  background(mouseY / 2, 100, 100);
  fill(width/2 - mouseY / 2, 100, 100);
  rect(width/2, height/2, mouseX + 1, mouseX + 1);
}
