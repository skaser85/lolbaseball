class Player {
  constructor(name, battingSide, position, battingOrder, side) {
    this.name = name;
    this.battingSide = battingSide;
    this.position = position;
    this.battingOrder = battingOrder;
    this.pitches = "0";
    this.battingAvg = ".300";
    this.PA = [];
    this.side = side;
  }

  getName() {
    return this.name;
  }

  initPA(inning, inningHalf, pitcher) {
    this.PA.push(new PA(inning, inningHalf, this, pitcher));
  }
}