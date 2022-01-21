class Ball {
    constructor(size, j, nameA){
        this.pos = createVector(160 * j + 100, height/3);
        this.size = size;
        this.name = nameA;
    }

    draw(){
      textSize(20);
      push();

      translate(this.pos.x, this.pos.y -100);
      rotate(-45)
      text(this.name, 0, 0);
      pop();
      circle(this.pos.x, this.pos.y, this.size - 2350);
        
    }

    update(){

    }
}