class Ball {
    constructor(){
        this.pos = createVector(10, 10);
    }

    draw(){
        circle(this.pos.x, this.pos.y, 10);
    }

    update(){

    }
}