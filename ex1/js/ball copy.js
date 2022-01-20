class Ball {
    constructor(dis, size){
        this.pos = createVector(dis, 60);
        this.size = size;
    }

    draw(j, i, d){
        push();
        colorMode(HSB, 400);
        strokeWeight(1);
        if(d){
            fill(0, 60, 0 );
            textSize(7);
            noStroke();
            text(time[i].slice(5), this.pos.x + 280, this.pos.y * j + 50 - (this.size/2 + 10)); 
        }
        
        fill(309, 60, d ? 400 : 0 );
        // noFill();
        stroke(0); 
        circle(this.pos.x + 280 , this.pos.y * j + 50 , this.size);
        pop();
        
    }

    update(){

    }
}