var database;
var gameState = 0;
var playerCount;

// to create object of each class
var player, form, game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  
}

