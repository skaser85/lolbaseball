class Quad {
  constructor(x, y, base, w, h, rt, strk, strkOpts, fll, fllOpts) {
    this.x = x;
    this.y = y;
    this.base = base;
    this.w = w;
    this.h = h;
    this.rt = rt;
    this.stroke = strk;
    this.strokeOpts = strkOpts;
    this.fill = fll;
    this.fillOpts = fllOpts;
  }

  draw() {
    push();
    rectMode(CENTER);
    translate(this.x, this.y);
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
    rotate(this.rt);
    rect(0, 0, this.w, this.h);
    pop();
  }
}