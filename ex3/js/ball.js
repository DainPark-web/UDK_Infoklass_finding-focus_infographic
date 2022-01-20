class Ball {
    constructor(dis, size){
        this.pos = createVector(50, 55);
        this.size = size;
    }

    draw(j, i, d){
        push();
        colorMode(HSB, 400);
        // strokeWeight(1);
        // stroke(0); 
        noStroke();
        if(d){
            fill(0);
            textSize(7);
            
            // text(time[i].slice(5), this.pos.x *i + (i < 12 ? 260 : 350 ) , this.pos.y * j +110 - (this.size/2 + 10)); 
        }
        
        // fill(d ? 200 : 240 , 0, d ? 250 : 0 , 80);
        fill(0, 60);
        // noFill();
        
        circle(this.pos.x *i + (i < 12 ? 300 : 380 ), this.pos.y * j + 110 , this.size);
        pop();
        
    }

    update(){

    }
}