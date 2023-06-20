var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var allPlayers;
var track;
var car1,car2,car1Img,car2Img,cars=[];
var fuelImage,fuels,powerCoinImage,powerCoins;
var obstacle1Image,obstacle2Image,obstacles;
var lifeImg;
var blastImage;
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  track = loadImage("./assets/track.jpg");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
   obstacle2Image = loadImage("./assets/obstacle2.png");
   lifeImg = loadImage("./assets/life.png");
   blastImage = loadImage("./assets/boom.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
game.getState();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) { game.update(1); }
  if (gameState === 1) { game.play(); }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
