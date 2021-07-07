var a=prompt("enter the first variable: ")
var b=prompt("enter the second variable: ")
function setup() {
  createCanvas(400, 400);
  var button=createButton("click here to swap the number")
  //button.position(200,300)
button.mousePressed(swap)
  
}

function draw() {
  background(220);
}
function swap(){
  [a,b]=[b,a]
  text("the value of a after swaping: ",+a,200,100)
  console.log("the value of b after swaping: ",+b)
}