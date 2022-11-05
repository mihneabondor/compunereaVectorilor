let v1x, v1y, v2x, v2y;
let v0, v1, v2, v3;
let checkBox;

function setup() {
    let cnv = createCanvas(windowWidth/2, windowHeight/1.5);
    
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    
    v1x = createSlider(0, 500, 10);
    v1x.position(x+width-100, y+13);
    v1x.style('width', '80px');
    
    v1y = createSlider(0, 300, 250);
    v1y.position(x+width-100, y+50);
    v1y.style('width', '80px');
    
    
    v2x = createSlider(0, 500, 150);
    v2x.position(x+width-100, y+100);
    v2x.style('width', '80px');
    
    v2y = createSlider(0, 300, 45);
    v2y.position(x+width-100, y+137);
    v2y.style('width', '80px');
    
    
    let origin = createVector(100, 350);
    translate(origin.x, origin.y);

    v0 = createVector(0, 0);
    v1 = createVector(0, 0);
    v2 = createVector(0, 0);
    
//    checkBox = createCheckbox('show help lines', true);
//    checkBox.changed(checkedBox)
//    checkBox.position(x+width-150, y+180);
}

function checkedBox() {
    if(checkBox.checked() == false) {
        erase();
        line(v1.x, v1.y, v3.x, v3.y);
        line(v2.x, v2.y, v3.x, v3.y);
    } else {
        line(v1.x, v1.y, v3.x, v3.y);
        line(v2.x, v2.y, v3.x, v3.y);
    }
}

function windowResized() {
    resizeCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
    createAxis(); // WIP
    
    let origin = createVector(100, 350);
    translate(origin.x, origin.y);
    
    drawArrow(v0, v1, 'black');
    v1.set(v1x.value(), -v1y.value());
    
    drawArrow(v0, v2, 'black');
    v2.set(v2x.value(), -v2y.value());
    
    v3 = getRez(v0, v1, v2);
    drawArrow(v0, v3, 'red');
    
    noStroke();
    text('v1 = (x: ' + round(v1.x) + '; y: ' + round(v1.y) + ')', -70, 70);
    text('v2 = (x: ' + round(v2.x) + '; y: ' + round(v2.y) + ')', 75, 70);
    text('v3 = (x: ' + round(v3.x) + '; y: ' + round(v3.y) + ')', 215, 70);
    
    
    strokeWeight(1);
    let offset = 10;
    text('O(0,0)', -40, 20);
    text('v1', v1.x+offset, v1.y+offset);
    text('v2', v2.x+offset, v2.y+offset);
    
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    text('v1: x', 530 , -325);
    text('v1: y', 530 , -290);
    
    text('v2: x', 530 , -240);
    text('v2: y', 530 , -205);

    
    stroke('red');
    strokeWeight(2);
    text('R', v3.x+offset, v3.y+offset);
    
    stroke('gray');
    strokeWeight(0);
    
    push();
    line(v1.x, v1.y, v3.x, v3.y);
    line(v2.x, v2.y, v3.x, v3.y);
    pop();
}


function createAxis() {
    strokeWeight(3);
    line(100, 1500, 0, 0);
    line(-100, 350, 750, 350);
    background(201, 201, 201);
}

function getRez(base0, base1, base2) {
  let rezX = base1.x+base2.x;
  let rezY = base1.y+base2.y;
  let rezultanta = createVector(rezX, rezY);
  return rezultanta;
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
