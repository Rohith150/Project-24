class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic : false,
        restitution : 0.3,
        density : 1.2,
        friction : 0.5
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill(255,0,0)
      ellipse(pos.x, pos.y, this.radius);
    }
  }