class Paper {
    constructor(x,y,r){
    var paper_options ={
        isStatic: false,
        density: 1.2,
        restitution: 0.3,
        friction: 0.5
        }

    this.x = x;
    this.y = y;
    this.r = r;    
    this.body = Bodies.circle(this.x,this.y,this.r,paper_options);
    World.add(world,this.body);

    }

    display(){
        var paperpos = this.body.position ;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill("red");
        circle(0,0,this.r);
        pop()

    }

}