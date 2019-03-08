/* Globel Varibles */
var w = 700;
var h = 700;

/* Box Object */
var Box;

/* Size of the Box */
var BoxSize = 50;

/* how var the box moves per frame */
var sqrDist = w/20;

/**
 * This function is the first thing that is called when setting up the program.
 * I put a super simple program to help you get started.
 */
function setup() {
  /* Creating the canvas to W by H */
  createCanvas(w, h);

  /* Setting the background to black (0) */
  background(0);

  /* Creating the Object */
  Box = new Box();

  /* Take this away to make it fluid */
  frameRate(10);
}

/**
 * This is called at 60 FPS, u can change the framerate with frameRate(int) in setup()
 * You want to "repaint" the canvas every time it updates with the new values.
 */
function draw() {
  /* Repaints the background to black as seen in setup() */
  background(0);
  /* Updates everything about the box */
  Box.update();
}


/**
 * This is the tank object, keeps track of where it is and which way it
 * moving.
 */
function Box() {
  /* Position Vector */
  this.loc = createVector(0,0)

  /* Direction Vector */
  this.direction = createVector(1,0)

  /* this.update() gets called every frame to update the Location/Direction of the box */
  this.update = function() {
    /* adding the next space for the Rect to go */
    this.loc.x += sqrDist*this.direction.x;
    this.loc.y += sqrDist*this.direction.y;

    /* Calls CheckBound with location of the rect */
    checkBound(this.loc.x, this.loc.y)

    /* Fills the rect with RGBA 255,20,40,255 */
    fill(255, 20, 40, 255);

    /* rect(x.cord, y.cord, size.x, size.y) */
    rect(this.loc.x, this.loc.y, BoxSize, BoxSize);
  }
  this.dir = function(x, y) {
    /* Changing the direction of the Rect if a button is pressed */
    this.direction.x = x;
    this.direction.y = y;
  }
}

/**
 * Checks the X and Y params to make sure they are not off the screen!
 */
function checkBound(x, y){
  /* -BoxSize for everything because the box size is BoxSize! */
  if(x > w-BoxSize)
    Box.loc.x = w-BoxSize;
  if(x < 0)
    Box.loc.x = 0;
  if(y < 0)
    Box.loc.y = 0;
  if(y > h-BoxSize)
    Box.loc.y = h-BoxSize;
}


/**
 * Checks to see if a key is pressed. Function name is important in p5.
 * If it a key is pressed it can change the direction of the rect moving
 */
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      Box.dir(-1, 0);
      break;
    case RIGHT_ARROW:
      Box.dir(1, 0);
      break;
    case UP_ARROW:
      Box.dir(0, -1);
      break;
    case DOWN_ARROW:
      Box.dir(0, 1);
      break;
  }
}
