class Ball {
    constructor(dis, size){
        this.pos = createVector(50, 55);
        this.size = size;
    }

    draw(j, i, d, max, min){
        push();
        colorMode(RGB, 255);
        // strokeWeight(1);
        // stroke(0); 
        noStroke();
        
        
        // fill(d ? 200 : 240 , 0, d ? 250 : 0 , 80);
        if(max === this.size){

            fill(250, 100, 150, 200);
        }else if(min === this.size){
            fill(0, 50, 150, 200);

        }else{
            fill(0, 0, 0,40);
        }
        // noFill();
        
        circle(this.pos.x *i + (i < 12 ? 300 : 380 ), this.pos.y * j + 120 , this.size);
        pop();
        
    }

    update(){

    }
}