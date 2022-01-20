//data
const data = [
    {AlkoholfreiesBier : [104.8,105.3,104.1,105.4,105.1,105,102.4,102.8,104.6,103.6,103.9,103.7,103.9,105.4,105.9,106.7,106.7,106.3,107.2,107.4,106.8,106.7,107.5]},
    {AlkoholfreiesBier : [104.8,105.3,104.1,105.4,105.1,105,102.4,102.8,104.6,103.6,103.9,103.7,103.9,105.4,105.9,106.7,106.7,106.3,107.2,107.4,106.8,106.7,107.5]}

];


const Con = document.querySelector("#canvasContainer");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let balls = [];
let dis = 0;
let ballSizeN = 4;

let testList = [];
function setup(){
    let cnv =createCanvas(HEIGHT, HEIGHT);
    cnv.parent(Con);
    
    
    for(let j = 0; j< data.length; j++){
    for(let i = 0; i< data[0].AlkoholfreiesBier.length; i++){
        let size = floor((data[0].AlkoholfreiesBier[i] - 100) * ballSizeN);
        const prevDis = floor((data[0].AlkoholfreiesBier[i - 1] - 100) * ballSizeN)/2;
        const newPrevDis = data[0].AlkoholfreiesBier[i-1] === undefined ? 0 : prevDis;
        const currDis = floor((data[0].AlkoholfreiesBier[i] - 100) * ballSizeN)/2;
        

        console.log(`${currDis} / ${newPrevDis}`)
        let newDis =  newPrevDis + currDis + 5;
        dis += newDis;
        balls.push(new Ball(dis, size));
    }
    testList[j] = balls;
    balls = [];
    }
    console.log(testList)
    
    
}

function draw(){
    background(0);
    
    
    for(let i =0; i < testList[0].length; i++){
        testList[0][i].draw();
    }
    
}

function windowResized() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    resizeCanvas(HEIGHT, HEIGHT);
  }