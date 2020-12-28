class Chain {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
    };
    this.chain = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.chain);
  }

  fly() {
    this.chain.bodyA = null;
  }

  attach(bodyA) {
    this.chain.bodyA = bodyA;
  }

  display() {
    if (this.chain.bodyA) {
      push();
      strokeWeight(3);
      fill(0);
      line(
        this.chain.bodyA.position.x,
        this.chain.bodyA.position.y,
        this.pointB.x,
        this.pointB.y
      );
      pop();
    }
  }
}
