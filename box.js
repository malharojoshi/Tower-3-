class Box {
  constructor(x, y, width, height, color) {
    var score;
    this.abc = "a";
    var options = {
      isStatic: false,
      restitution: 0.0,
      friction: 0.5,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibility = 255;
    this.width = width;
    this.height = height;
    this.color = color;
    World.add(world, this.body);
  }

  display() {
    if (this.abc === "a") {
      if (this.body.speed > 3) {
        push();
        World.remove(world, this.body);
        this.visibility = 0;
        this.abc = "b";
        score = score + 3;
        pop();
      } else if (this.body.speed > 2) {
        push();
        this.visibility = 85;
        this.abc = "b";
        score = score + 2;
        pop();
      } else if (this.body.speed > 1) {
        push();
        this.visibility = 170;
        this.abc = "b";
        score = score + 1;
        pop();
      } else {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
  }
  score() {
    text("SCORE: " + score, 500, 170);
  }
}
