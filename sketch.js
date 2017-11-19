function setup() {
  createCanvas(500,400);
}
var num1 =(random(0,255))
var num2 = (random(0,255))
function draw() {
  var x = 5;

  background('gray');
  fill(250);


for (var row = 0; row < 10; row+=1) {
    for (var count = 0; count < 10; count+=1) {
        if (row%2 == count%2) {
            fill('white');
        } else {
            fill('black');
        }
        rect(x + (50 * count), 50 * row, 50, 50)
    }
   
}

fill('white');
 rect(x + (50 *count), 50, 48, 48);
 fill('black')
 rect(x + (50 *count), 100, 48, 48)
 fill('white')
 rect(x + (50 *count), 150, 48, 48)
  fill('black')
 rect(x + (50 *count), 200, 48, 48)
}


