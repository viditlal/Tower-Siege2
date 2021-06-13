class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push()
    
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER);
    this.visibility=this.visibility-50
    tint(255,this.visibility)
    rect(0, 0, this.width, this.height);
    pop();
  }
  score(){
    if(this.visibility<0 && this.visibility >-1005){
      score++;
    }
  }
};
