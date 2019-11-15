let cnv;
let player;
let enemy;
let enemy2;
let enemy3;
let enemys4;
let full;
let roll;
let base;
let base2;
let classroom;
let chair;
let desk;
let desk2;
let desk3
let desk4;
let desk5;
let desk6;
let desk7;
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let ciel;
let sub;
let desks;
let playerStatus;
let oceanScape;
let scoreText;
let score = 1;
let hasStarted = false;
let paused = false;
let turnCount = 0;
let levelCount = 1;
let oldLevelCount = levelCount;


function setup() {
  // bg = loadImage('assets/background.jpeg');
  bg = background(300)
  cnv = createCanvas(1000, 600);
  scoreElem = createDiv("Bubbles = " + score);
  scoreElem.position(20, 20);
  scoreElem.id = "score";
  scoreElem.style("color", "white");
  full = [];
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();

  base = createSprite(400, 525, 799, 151);
  base.addAnimation("normal", "assets/base.png");

  base2 = createSprite(1199, 525, 799, 151);
  base2.addAnimation("normal", "assets/base.png");

  chair = createSprite(250, 390, 77, 64)
  chair.addAnimation("normal", "assets/turtle.png");

  desks = createSprite(550, 340, 468, 127)
  desks.addAnimation("normal", "assets/sub.png");

  fish = createSprite(890, 350, 26, 18);
  fish.addAnimation("normal", "assets/fish.png");

  oceanScape = [base, chair, desks, sub];
  ciel = createSprite(500, -5, 1000, 5);

}

function draw() {


    background(10, 40, 70);
    drawSprites();

    // BASIC INTERFACE SETUP

    textSize(16);
    textFont("courier");
    fill(255, 255, 255);
    let scoreText = text("Bubbles Collected: " + score, 800, 20);
    let levelText = text("Level " + levelCount, 20, 20);

    if (paused === true) {
      textSize(30)
      textFont("courier");
      fill(255, 255, 255);
      let pauseText = text("Paused", 450, 285);
    }
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
   //PLATFORM COLLISION

    // furniture.forEach((block) => {
    //   if (player.collide(block)) {
    //     player.velocity.y = 0;
    //     if (playerStatus === "right") {
    //       player.changeAnimation("normalright");
    //     } else if (playerStatus === "left") {
    //       player.changeAnimation("normalleft");
    //     }
    //   };
    // });

}

class Bubble {
  constructor() {
    this.x = 300;
    this.y = 400;
  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }
  move() {
    this.x = this.x + random(1, 1);
    this.y = this.y + random(1, 1);
  }
  show() {

  }
}
