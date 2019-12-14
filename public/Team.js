class Team {
  constructor(city, cityShort, name, players) {
    this.city = city;
    this.cityShort = cityShort;
    this.name = name;
    this.players = players;
    this.score = 0;
    this.curBatter = 0;
    this.curPitcher = null;
  }

  getBatter() {
    return this.players[this.curBatter];
  }

  getNextBatter() {
    if(this.curBatter === this.players.length - 1) {
      this.curBatter = 0;
    } else {
      this.curBatter++;
    }
    return this.getBatter();
  }

  setPitcher(name) {
    this.curPitcher = this.players.filter(f => f.getName() === name)[0];
  }

  getPosition(pos) {
    return this.players.filter(f => f.position === pos)[0];
  }
}