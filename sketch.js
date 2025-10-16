// variables
let character;
let object = [];
let gravity = 0.6;
let lift = -12; 
let score = 0;
let gameOver = false;
let characterImg, objectImg, backgroundImg;

// preload everything
function preload() {

characterImg = loadImage("assets/nyancatcher.gif");
objectImg = loadImage("assets/poptart.png");
backgroundImg = loadImage("assets/nyanbackground.png");

}

// setup (basically create canvas etc)
function setup() {
createCanvas(800, 600);


}