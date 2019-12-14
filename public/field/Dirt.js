class Dirt {
  constructor(x, y, d, strk, strkOpts, fll, fllOpts) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.stroke = strk;
    this.strokeOpts = strkOpts;
    this.fill = fll;
    this.fillOpts = fllOpts;
  }

  draw() {
    push();
    if(this.stroke) {
      stroke(this.strokeOpts.color);
      strokeWeight(this.strokeOpts.weight);
    } else {
      noStroke();
    }
    if(this.fill) {
      fill(this.fillOpts.color);
    } else {
      noFill();
    }
    circle(this.x, this.y, this.d);
    pop();
  }
}