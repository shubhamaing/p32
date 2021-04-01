class Box{
    constructor(x,y,width,height){
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,25,45,options);
        this.width = 25;
        this.height = 45;
        World.add(world, this.body);
    }

    display(){

        console.log(this.body.speed);
        if((this.body.speed)<3){

            var pos =this.body.position;
            rectMode(CENTER);
            fill("blue");
            rect(pos.x, pos.y, this.width, this.height);
            
        }else{
            World.remove(world,this.body);

        }
    }
}