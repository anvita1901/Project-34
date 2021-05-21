class Umbrella{
    constructor(x,y){
      var options ={
          'isStatic': true
      }
      this.body=Bodies.circle(x,y,50, options);
      this.radius = 50;
      this.image = loadImage("images/walkingframe/walking 1.png","images/walkingframe/walking 2.png","images/walkingframe/walking 3.png","images/walkingframe/walking 4.png","images/walkingframe/walking 5.png","images/walkingframe/walking 6.png","images/walkingframe/walking 7.png","images/walkingframe/walking 8.png")
      World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70, 300, 300);
    }
}