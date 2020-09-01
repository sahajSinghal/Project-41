class Drop
{
    constructor(x,y)
    {
        var options = 
        {
            friction : 0.1,
            isStatic : false
        }

        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position  

        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,2*(this.radius),2*(this.radius)); 
    }

    update()
    {
        if(this.body.position.y>displayHeight)
        {
            Matter.Body.setPosition(this.body,{x:random(0,displayWidth), y:random(0,displayHeight/2)}) 
        }
    }
}