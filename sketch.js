//w1 
//Chung Zheng
//21153179
let sushiImg;
let bgImg;

function preload() {
  sushiImg = loadImage("assets/images/sushi.png");
  bgImg = loadImage("assets/images/wood.png");
}

function setup() {
  createCanvas(900, 450);
  background(0);
  
  fill(255, 255, 255); 

  textAlign(CENTER);

  textSize(14);

  fill(255);
  text("Image loaded from assets/images/", width / 4, 65);
  text("Drawn using p5.js shapes", (width / 4) * 3, 65);

  image(bgImg, 0, 180, 400, 225);
  image(sushiImg, 50, 85, 300, 300);

  fill("#98540a");
  rect(540,330,60,40);
  rect(740,330,60,40);
  rect(500,210,350,120);

  fill("#e3933d");
  rect(500,210,350,110);

  stroke("#b66629");
  strokeCap(SQUARE);
  for (let i = 0; i < 5; i++) {
    strokeWeight(random(1,3));
   let y = 220 + i*20
   line(501 , y , 849, y);
  }


  let originX = 500; 
  let originY = 85; 


  noStroke();
  fill(253);
  rect(originX + 50 , originY + 120, 260, 90, 40, 40, 25, 25);

  let riceX = originX + 50;
  let riceY = originY + 120;
  let riceW = 260;
  let riceH = 90;
  
  for (let i = 0; i < 30; i++) {
  fill(random(230,252));
  let dotX = random(originX + 65, originX + 295);
  let dotY = random(originY + 135, originY + 195);
  circle(dotX, dotY, random(6, 10));
}

  fill("#ef4d01");
  rect(originX + 45, originY + 80, 270, 70, 30, 30, 20, 20);

  fill("#fe7b20");
  rect(originX + 45, originY + 50, 270, 90, 30, 30, 10, 10);

  stroke("#fdcba7");
  strokeWeight(15);
  strokeCap(ROUND);
  for (let i = 0; i < 5; i++) {
    x = originX + 80 + i*50
   line(x , originY + 142, x, originY + 58);
  }

  noStroke();
  fill(180);
  textSize(13);
  textAlign(CENTER);
  text("sushi.png", originX - 150, originY + 295);
  text("drawn with shapes", originX + 150, originY + 295);

  // --- Dividing line between the two controllers ---
  stroke(80);
  strokeWeight(1);
  line(width / 2, 70, width / 2, 400);
  
}

function draw() {

}

function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

function keyPressed() {
  // Press "k" to log the current mouse position to the Chrome console.
  // This is a handy debug tool — use it to find coordinates when
  // placing shapes or images on the canvas.
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
