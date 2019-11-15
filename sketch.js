let cnv;
let player;
let classMate;
let classMate2;
let classMate3;
let classMates4;
let full;
let roll;
let base;
let classroom;
let chair;
let desk;
let desk2;
let desk3
let desk4;
let desk5;
let desk6;
let desk7;
let ciel;
let con
let desks;
let playerStatus;
let furniture;
let scoreText;
let score = 1;
let hasStarted = false;
let paused = false;
let turnCount = 0;
let levelCount = 1;
let oldLevelCount = levelCount;


function setup() {
  bg = loadImage('assets/background.jpeg');
  cnv = createCanvas(1000, 600);
  cnv.parent('sketch-holder')
  scoreElem = createDiv("Cookies = " + score);
  scoreElem.position(20, 20);
  scoreElem.id = "score";
  scoreElem.style("color", "white");
  full = [];

  base = createSprite(300, 300, 77, 64);
  base.addAnimation("normal", "assets/turtle.png");

  chair = createSprite(300, 390, 49, 69)
  chair.addAnimation("normal", "assets/chair.png");

  desks = createSprite(550, 340, 468, 127)
  desks.addAnimation("normal", "assets/desks.png");

  con = createSprite(40, 400, 77, 112);
  con.addAnimation("normal", "assets/console.png");

  furniture = [base, chair, desks, con];
  ciel = createSprite(500, -5, 1000, 5);

}

function draw() {

  if (hasStarted === true) {

    background(bg);
    drawSprites();

    // BASIC INTERFACE SETUP

    textSize(16);
    textFont("courier");
    fill(255, 255, 255);
    let scoreText = text("Cookies Eaten: " + score, 820, 20);
    let levelText = text("Level " + levelCount, 20, 20);

    if (paused === true) {
      textSize(30);
      textFont("courier");
      fill(255, 255, 255);
      let pauseText = text("Paused", 450, 285);
    }
   //PLATFORM COLLISION

    platforms.forEach((plat) => {
      if (player.collide(plat)) {
        player.velocity.y = 0;
        if (playerStatus === "right") {
          player.changeAnimation("normalright");
        } else if (playerStatus === "left") {
          player.changeAnimation("normalleft");
        }
      };
    });

  }
}


