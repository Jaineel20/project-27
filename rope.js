class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option ={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain =Constraint.create(option);
        World.add(world,this.chain);

    }
  display(){
      var pointA=this.chain.bodyA.position;
      var pointB=this.chain.bodyB.position;
      strokeWeight(1);
      var anchorX = pointB.x+this.offsetX;
      var anchorY = pointB.y+this.offsetY;
      line(pointA.x,pointA.y,anchorX,anchorY);
  }
}