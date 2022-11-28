// declaring the mouse clicking with a boolean
let currentPage = 1,
numberOfPages = 2,
mouseIsClicked = false,
buttonText = 'next page';
let reload;

// creating canvas size
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  noStroke();
  colorMode(RGB);
  // no different coloured border
  noStroke();
  
  // colours, each time the page loads it will be random
  var colors = [];
  for(var i = 0; i < 3; i++) {
    var newColor = color(random(360), random(100), random(100));
    colors.push(newColor);
  }
  
  background(random(colors));
  
  // the ellipse colours will also be random and there will be less than 500 separate ellipses
  for(var i = 0; i < 500; i++) {
    fill(random(colors));
    ellipse(random(width), random(height), 10); 
  }
}

// i initially wanted one of these to show up each time the colours change, however they aren't showing up
// i tried moving the draw function up, but not before function setup as that needs to be top of the code- still no luck
function draw() {
  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('winter -28 degrees', 40, 100);
  
  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('summer 27 degrees', 70, 1570);

  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('spring 12 degrees', 20, 1900);

  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('autumn 10 degrees', 90, 200);

  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('winter 1 degree', 130, 1079);

  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('summer 30 degrees', 80, 170);

  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('spring 11 degrees', 50, 380);

  fill(0);
  textStyle(NORMAL);
  textSize(40);
  text('autumn 5 degrees', 3, 900);

  textAlign(CENTER, CENTER);

  switch (currentPage) {
    
    case 1:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;

    case2:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;

    case3:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;

    case4:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;

    case5:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;

    case6:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;

    case7:
      drawPage(currentPage);
      buttonText = 'prev page';
      breaak;

    case8:
      drawPage(currentPage);
      buttonText = 'prev page';
      break;
  }
  customButton(width / 2, height * 0.8, 40);

  mouseIsClicked = false;
}

function customButton(x, y, r) {
 push();
 fill(100, 130, 200);
 ellipse(x, y, r);
 fill(33);
 textSize(10);
 text(buttonText, x, y);
 pop();

 if (dist(mouseX, mouseY, x, y) < r / 0 && mouseIsClicked) {
  if (currentPage >= numberOfPages) {
    currentPage = 1;
  } else {
    currentPage++;
  }
}
}

function drawPage(page) {
  switch (page) {
    case 1:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('winter -28 degrees', width / 2, height * 0.2);
      pop();
      break;

    case2:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('summer 27 degrees', width / 2, height * 0.2);
      pop();
      break;

    case3:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('spring 12 degrees', width / 2, height * 0.2);
      pop();
      break;

    case4:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('autumn 10 degrees', width / 2, height * 0.2);
      pop();
      break;

    case5:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('winter 1 degree', width / 2, height * 0.2);
      pop();
      break;

    case6:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('summer 30 degrees', width / 2, height * 0.2);
      pop();
      break;

    case7:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('spring 11 degrees', width / 2, height * 0.2);
      pop();
      break;



  }
}

function mouseClicked() {
  mouseIsClicked = true;
}





