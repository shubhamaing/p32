class Shooter{
    constructor(x,y)   {
        var options = {
                restitution: 0.1,
                density: 1.2,
                friction: 0.5,
            }
            this.body = Bodies.circle(x,y,23,options);
        
            this.image = loadImage('polygon.png');
            World.add(world,this.body);
    
        }
    
            display()   {
                push();
                var pos = this.body.position;
                translate(pos.x,pos.y);
                fill("yellow")
                imageMode(CENTER);
                image(this.image,0,0,70,70);
                pop();
            }
    
    }