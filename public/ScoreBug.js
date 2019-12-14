class ScoreBug {
  constructor(elts, game) {
    this.elts = elts;
    this.game = game;
    this.gs = null;
  }

  update(gs) {
    this.gs = gs;
  }

  setInningArrow() {
    let arrow = this.gs.inningHalf === "top" ? "up" : "down";
    if(this.elts.inningArrow.classList.contains("up")) {
      this.elts.inningArrow.classList.remove("up");
    }
    if(this.elts.inningArrow.classList.contains("down")) {
      this.elts.inningArrow.classList.remove("down");
    }
    this.elts.inningArrow.classList.add(arrow);
  }

  setBases() {
    this.setBase(this.gs.bases.first.isPlayerOnBase, this.elts.firstBase);
    this.setBase(this.gs.bases.second.isPlayerOnBase, this.elts.secondBase);
    this.setBase(this.gs.bases.third.isPlayerOnBase, this.elts.thirdBase);
  }

  setBase(onBase, elt) {
    let playerOnClassExists = elt.classList.contains("player-on");
    if(onBase) {
      if(!playerOnClassExists) {
        elt.classList.add("player-on");
      }
    } else {
      if(playerOnClassExists) {
        elt.classList.remove("player-on");
      }
    }
  }

  setOuts() {
    if(this.gs.outs === 1) {
      this.elts.outsNum.innerText = "1 Out";
    } else {
      this.elts.outsNum.innerText = this.gs.outs + " Outs";
    }
  }

  setStrikeCount() {
    this.elts.strikeCount.innerText = this.gs.balls + "-" + this.gs.strikes;
  }

  getLastName(name) {
    return name.split(" ")[1];
  }

  render() {
    this.elts.batterName.innerText = this.getLastName(this.gs.batter.name);
    this.elts.battingAvg.innerText = this.gs.batter.battingAvg;
    this.elts.pitcherName.innerText = this.getLastName(this.gs.P.name);
    this.elts.pitchCount.innerText = "P: " + this.gs.P.pitches;
    this.elts.homeTeamName.innerText = this.game.homeTeam.cityShort;
    this.elts.homeTeamScore.innerText = this.game.homeTeam.score;
    this.elts.awayTeamName.innerText = this.game.awayTeam.cityShort;
    this.elts.awayTeamScore.innerText = this.game.awayTeam.score;
    this.setBases();
    this.elts.inningNum.innerText = this.gs.inning;
    this.setInningArrow();
    this.setOuts();
    this.setStrikeCount() 
  }
}