//data
const data = [
    {AlkoholfreiesBier : [104.8,105.3,104.1,105.4,105.1,105,102.4,102.8,104.6,103.6,103.9,103.7,103.9,105.4,105.9,106.7,106.7,106.3,107.2,107.4,106.8,106.7,107.5]}

];


const Con = document.querySelector("#canvasContainer");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let balls = [];

function setup(){
    let cnv =createCanvas(HEIGHT, HEIGHT);
    cnv.parent(Con);

    for(let i = 0; i< data[0].AlkoholfreiesBier.length; i++){
        let size = (data[0].AlkoholfreiesBier[i] - 100) * 2;
        balls.push(new Ball(i, size));
    }
    

    
}

function draw(){
    background(0);
    
    
    for(let i =0; i < balls.length; i++){
        balls[i].draw();
    }
    
}

function windowResized() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    resizeCanvas(HEIGHT, HEIGHT);
  }