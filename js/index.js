//data
const data = [
    {a : [1,2.3,5]}

];


const Con = document.querySelector("#canvasContainer");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let ball;

function setup(){
    let cnv =createCanvas(WIDTH, HEIGHT);
    cnv.parent(Con);

    ball = new Ball();

    console.log(data[0].a);
}

function draw(){
    background(0);
    circle(WIDTH/2, HEIGHT/2, 50);
    
    ball.draw();
}

function windowResized() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    resizeCanvas(WIDTH, HEIGHT);
  }