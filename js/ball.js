class Ball {
    constructor(i, size){
        this.pos = createVector(50, (20 * i) + size);
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