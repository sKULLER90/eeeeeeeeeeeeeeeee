class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.r);
    }
  };