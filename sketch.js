// name all variables

let screen = 0;
let score = 0;
let catcher, fallingObject, fallingObject2;
let enterButton;


// preload all the files (images, custom fonts, allat)
function preload() {
nyanCat = loadImage("assets/nyancatcher.gif");
avoidImg = loadImage("assets/bomb.png");
collectImg = loadImage("assets/poptart.png");


}

// function setup
function setup() {
createCanvas(windowWidth, windowHeight);

// make the enter button for starting screen

enterButton = createButton("ENTER");
enterButton.position(width / 2 - 50, height / 2);
enterButton.size ( 100, 40);
enterButton.style("font-size", "20px");
enterButton.mousePressed()) => {
screen = 1 // switch to main screen
enterButton.hide(); 

};




// create catcher (nyan cat)
catcher = new Sprite (200, 380, 5, 5, "k"); // THE K IS SO IT DOESNT GET PUSHED STOP FORGETTINF
catcher.scale = 0.3;
catcher.vel.x = 10;
catcher.image = nyanCat;

catcher.collisionShape = "circle"
catcher.collisionRadius = 50;

// falling object (bomb (LOL) and poptart)
fallingObject = new Sprite(100, 0, 10, "k");
fallingObject.scale = 0.1;
fallingObject.vel.y = 4;
fallingObject.image = collectImg;
fallingObject.collisionShape = "circle"
fallingObject.collisionRadius = 30;

// falling object 2 
fallingObject2 = new Sprite (100, 0, 10, "k");
fallingObject2.scale = 0.25;
fallingObject2.vel.y = 4;
fallingObject2.image = avoidImg;
fallingObject2.collisionShape = "circle";
fallingObject2.collisionRadius = 30;

}

// draw function 
function draw() {
background (255, 255, 255);
if (screen === 0) {

// start screen
textAlign(CENTER, CENTER);
textSize(24);
fill(0);
text("Welcome to Nyan Cat Catcher!\n Collect pop tarts to gain points and avoid bombs. \n Press enter to begin!", width / 2, height / 3);

// make the sprites not visible until the game starts
catcher.visible = false;
fallingObject.visible = false;
fallingObject2.visible = false;

} else if (screen === 1) {

// game screen
catcher.visible = true;
fallingObject.visible = true;
fallingObject2.visible = true;

// directions
textAlign(LEFT);
textSize(12);
text("Move Nyan Cat with left/right arrows. \n Catch poptarts, avoid bombs!", 10, height - 60);

// check for the sprites colliding
if (catcher.collides(fallingObject)) {
fallingObject.y = 0;
fallingObject.x = random(width);
fallingObject.vel.y = random(1, 5);
score++;
}

if (catcher.collides(fallingObject2)) {
fallingObject2.y = 0;
fallingObject2.x = random(width);
fallingObject2.vel.y = random(1, 5);
score--;
} 

// move falling objcets to top if they hit the bottom
if (fallingObject.y >= height) {
fallingObject.y = 0;
fallingObject.x = random (width);
fallingObject.vel.y = random(1, 5);
}

if (fallingObject2.y >= height) {
fallingObject2.y = 0;
fallingObject2.x = random(width);
fallingObject2.vel.y = random(1, 5);
}

// buttons to move the catcher
if (kb.pressing("left")) {
catcher.vel.x = -3;
} else if (kb.pressing("right")) {
    catcher.vel.x = 3;
} else {
    catcher.vel.x = 0;
}

// make sure the catcher stops at the edge of the screen
if (catcher.x < catcher.w / 2) {
catcher.x = catcher.w / 2;

} else if (catcher.x > width - catcher.w / 2) {
catcher.x = width - catcher.w / 2;
}


// score 
fill(0);
textSize(20);
text("Pop tarts = " + score, 10, 30);

}
}


