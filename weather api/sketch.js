let random = 0; 
let ellipseColor;
let squareColor;

let currentPage = 1,
numberOfPages = 2,
mouseIsClicked = false,
buttonText = 'next page';

function preload() {
  colorMode(RGB,100);
}

function setup() {
  createCanvas(400, 400);
  // declaring the colours
  bgColor1 = (59, 188, 228);
  bgColor2 = (228, 127, 59);
  bgColor3 = (236, 72, 72);
  bgColor4 = (235, 16, 191);
  bgColor5 = (49, 20, 129);
  bgColor6 = (57, 220, 38);
  bgColor7 = (239, 191, 58);
  bgColor8 = (134, 13, 106);
  bgColor9 = (25, 60, 155);
  bgColor10 = (153, 255, 255);
  bgColor11 = (255, 51, 51);
  bgColor12 = (102, 102, 0);
 
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  noStroke();
  fill(33);
}


function draw() {
  // background will be twelve different colours
  background(bgColor1);
  background(bgColor2);
  background(bgColor3);
  background(bgColor4);
  background(bgColor5);
  background(bgColor6);
  background(bgColor7);
  background(bgColor8);
  background(bgColor9);
  background(bgColor10);
  background(bgColor11);
  background(bgColor12);
  noStroke();
  fill(ellipseColor);
  ellipse(0.33 * width, height * 0.5, 100, 100);
  noStroke();
  fill(squareColor);
  rect(0.67 * width, height * 0.5, 100, 100);
 
  fill(ellipseColor);
  ellipse(0.33 * width, height * 0.5, 100, 100);
  noStroke();
  fill(squareColor);
  rect(0.67 * width, height * 0.5, 100, 100);
  if (mouseIsPressed) {
    bgColor1 = ((59, 188, 228));
    bgColor2 = ((228, 127, 59));
    bgColor3 = ((236, 72, 72));
    bgColor4 = ((235, 16, 191));
    bgColor5 = ((49, 20, 129));
    bgColor6 = ((57, 220, 38));
    bgColor7 = ((239, 191, 58));
    bgColor8 = ((134, 12, 106));
    bgColor9 = ((25, 60, 155));
    bgColor10 = ((153, 255, 255));
    bgColor11 = ((255, 51, 51));
    bgColor12 = ((102, 102, 0));
    ellipseColor = color(random(255), random(255), random(255));
    squareColor = color(random(255), random(255), random(255));
  }

  switch (currentPage) {
    case 1:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 2:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 3:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 4:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 5:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 6:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 7:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 8:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 9:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 10:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 11:
      drawPage(currentPage);
      buttonText = 'next page';
      break;

      case 12:
      drawPage(currentPage);
      buttonText = 'next page';
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

  if (dist(mouseX, mouseY, x, y) < r / 2 && mouseIsClicked) {
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
      ellipse(width / 2, height / 2, 100, 100);
      fill(59, 188, 228);
      text('Page 1', width / 2, height * 0.2);
      pop();
      break;

    case 2:
      push();
      ellipse(width / 2, height / 2, 100);
      fill(228, 127, 59);
      text('Page 2', width / 2, height * 0.2);
      pop();
      break;

    case 3:
      push();
      ellipse(width / 2, height / 2, 100, 100);
      fill(236, 72, 72);
      text('Page 3', width / 2, height * 0.2);
      pop();
      break;

    case 4:
      push();
      ellipse(width / 2, height / 2, 100);
      fill(235, 16, 191);
      text('Page 4', width / 2, height * 0.2);
      pop();
      break;

    case 5:
      push();
      ellipse(width / 2, height / 2, 100, 100);
      fill(49, 20, 129);
      text('Page 5', width / 2, height * 0.2);
      pop();
      break;

    case 6:
      push();
      ellipse(width / 2, height / 2, 100);
      fill(57, 220, 38);
      text('Page 6', width / 2, height * 0.2);
      pop();
      break;

    case 7:
      push();
      ellipse(width / 2, height / 2, 100, 100);
      fill(239, 191, 58);
      text('Page 7', width / 2, height * 0.2);
      pop();
      break;

    case 8:
      push();
      ellipse(width / 2, height / 2, 100);
      fill(134, 13, 106);
      text('Page 8', width / 2, height * 0.2);
      pop();
      break;

    case 9:
      push();
      ellipse(width / 2, height / 2, 100, 100);
      fill(25, 60, 155);
      text('Page 9', width / 2, height * 0.2);
      pop();
      break;

    case 10:
      push();
      ellipse(width / 2, height / 2, 100);
      fill(153, 255, 255);
      text('Page 10', width / 2, height * 0.2);
      pop();
      break;

    case 11:
      push();
      ellipse(width / 2, height / 2, 100, 100);
      fill(255, 51, 51);
      text('Page 11', width / 2, height * 0.2);
      pop();
      break;

    case 12:
      push();
      ellipse(width / 2, height / 2, 100);
      fill(102, 102, 0);
      text('Page 12', width / 2, height * 0.2);
      pop();
      break;
  }
}

function mouseClicked() {
  mouseIsClicked = true;
}


