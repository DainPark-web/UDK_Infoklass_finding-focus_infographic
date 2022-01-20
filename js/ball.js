class Ball {
    constructor(dis, size){
        this.pos = createVector(50, dis);
        this.size = size;
    }

    draw(){
        strokeWeight(1);
        stroke(255);
        fill(0);
        circle(this.pos.x, this.pos.y, this.size);
    }

    update(){

    }
}