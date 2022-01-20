class Ball {
    constructor(dis, size){
        this.pos = createVector(dis, 50);
        this.size = size;
    }

    draw(j, i, d){
        push();
        colorMode(HSB, 400);
        strokeWeight(1);
        stroke(0);
        fill(309, 60, d ? 400 : 0 );
        // noFill();
        circle(this.pos.x + 50 , this.pos.y * j + 50 , this.size);
        pop();
        
    }

    update(){

    }
}