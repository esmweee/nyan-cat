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

// generate incoming objects
setInterval(generateObject, 1500);
}

// draw loop
function draw() {
backgroundImg(backgroundImg);

// game over condition 
if(!gameOver) {
runGame();
} else {
drawGameOver();
}
}

// run the game
function runGame() {

// add gravity
nyanCat.velocity += gravity;
nyanCat.y += nyanCat.velocity;

//keep the player on screeen
if (nyanCat.y > height) {
gameOver = true;
}
if (nyanCat.y < 0) {
nyanCat.y = 0;
nyanCat.velocity = 0;

}

// draw player
image(nyanCatImg, nyanCat.x, nyanCat.y, nyanCat.width, nyanCat.height);

// objects
updateObject();
checkCollisions()

// draw score
fill(255);
textSize(32);
text("Pop tarts: " + score, 20, 40);
}

// generate objects 
function generateObject() {
if (!gameOver)  {
treats.push({
x: width,
y: random(100, height - 100);
width: 40,
height: 40,
speed: random(2, 5)
});
}
}

function updateObject() {
for (let i = object.length - 1; i >= 0; i--) {
object[i].x -= object[i].speed;

// draw object
image(objectImg, object[i].x, object[i].y, object[i].width, object[i].height);



}






