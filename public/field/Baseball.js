class Baseball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.history = [];
  }

  mouseIsOver() {
    let x = this.pos.x - this.r;
    let xw = this.pos.x + this.r;
    let y = this.pos.y - this.r;
    let yh = this.pos.y + this.r;
    return (mouseX > x && mouseX < xw) && (mouseY > y && mouseY < yh);
  }

  update(x, y) {
    this.history.push(this.pos);
    this.pos = createVector(x, y);
  }

  intersects(ox, oy, odim) {

  }

  draw() {
    push();
    imageMode(CENTER);
    let r = this.mouseIsOver() ? 50 : 20;
    let trail = 50;
    if(this.history) {
      let last = this.history.length - 1;
      let i = 1;
      if(trail > last) {
        for(let b of this.history) {
          if(i % 5 === 0) {
            image(baseball50, b.x, b.y, i, i);
          }
          i++;
        }
      } else {
        for(let b of this.history.slice(last - trail, last)) {
          if(i % 5 === 0) {
            image(baseball50, b.x, b.y, i, i);
          }
          i++;
        }
      }
    }
    image(baseball, this.pos.x, this.pos.y, r, r);
    pop();
  }
}