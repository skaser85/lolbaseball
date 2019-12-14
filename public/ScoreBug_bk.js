class ScoreBug {
  constructor(elts, homeTeam, awayTeam) {
    this.elts = elts;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.inning = 1;
    this.inningHalf = "top";
    this.curPitcher = null;
    this.curBatter = null;
    this.balls = 0;
    this.strikes = 0;
    this.bases = {
      first: false,
      second: false,
      third: false
    };
    this.outs = 0;
  }

  setPitcher(pitcher) {
    this.curPitcher = pitcher;
  }

  setBatter(batter) {
    this.curBatter = batter;
    this.curBatter.initPA(this.inning, this.inningHalf, this.curPitcher);
  }

  setInningArrow() {
    let arrow = this.inningHalf === "top" ? "up" : "down";
    if(this.elts.inningArrow.classList.contains("up")) {
      this.elts.inningArrow.classList.remove("up");
    }
    if(this.elts.inningArrow.classList.contains("down")) {
      this.elts.inningArrow.classList.remove("down");
    }
    this.elts.inningArrow.classList.add(arrow);
  }

  toggleBase(base) {
    this.bases[base] = !this.bases[base];
  }

  setBases() {
    this.setBase(this.bases.first, this.elts.firstBase);
    this.setBase(this.bases.second, this.elts.secondBase);
    this.setBase(this.bases.third, this.elts.thirdBase);
  }

  setBase(onBase, elt) {
    let manOnClassExists = elt.classList.contains("man-on");
    if(onBase) {
      if(!manOnClassExists) {
        elt.classList.add("man-on");
      }
    } else {
      if(manOnClassExists) {
        elt.classList.remove("man-on");
      }
    }
  }

  setOuts() {
    if(this.outs === 1) {
      this.elts.outsNum.innerText = "1 Out";
    } else {
      this.elts.outsNum.innerText = this.outs + " Outs";
    }
  }

  setStrikeCount() {
    this.elts.strikeCount.innerText = this.balls + "-" + this.strikes;
  }

  render() {
    this.elts.batterName.innerText = this.curBatter.name;
    this.elts.battingAvg.innerText = this.curBatter.battingAvg;
    this.elts.pitcherName.innerText = this.curPitcher.name;
    this.elts.pitchCount.innerText = this.curPitcher.pitches;
    this.elts.homeTeamName.innerText = this.homeTeam.cityShort;
    this.elts.homeTeamScore.innerText = this.homeTeam.score;
    this.elts.awayTeamName.innerText = this.awayTeam.cityShort;
    this.elts.awayTeamScore.innerText = this.awayTeam.score;
    this.setBases();
    this.elts.inningNum.innerText = this.inning;
    this.setInningArrow();
    this.setOuts();
    this.setStrikeCount() 
  }
}