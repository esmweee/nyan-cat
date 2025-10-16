// variables
let nyanCat;
let object = [];
let gravity = 0.6;
let lift = -12; 
let score = 0;
let gameOver = false;
let nyanCatImg, objectImg, backgroundImg;

// preload everything
function preload() {

nyanCatImg = loadImage("assets/nyancatcher.gif");
objectImg = loadImage("assets/poptart.png");
backgroundImg = loadImage("assets/nyanbackground.png");

}

// setup (basically create canvas etc)
function setup() {
createCanvas(800, 600);

// character (nyan cat)

nyanCat = {
x: 100,
y: height / 2,
velocity: 0;
width: 80,
height: 60,
jump: function() {
this.velocity = lift;
}
};



}



