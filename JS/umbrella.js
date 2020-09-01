class Umbrella
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic : true
        }

        this.body = Bodies.circle(x,y,80,options);
        this.radius = 80;

        World.add(world,this.body);
    }
    
    display()
    {
        var pos = this.body.position  

        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y,2*(this.radius),2*(this.radius)); 
    }
}