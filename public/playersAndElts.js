let elts = {
  pitcherName: document.querySelector(".pitcher-name"),
  pitchCount: document.querySelector(".pitches"),
  batterName: document.querySelector(".batter-name"),
  battingAvg: document.querySelector(".batting-avg"),
  homeTeamName: document.querySelector(".home-team-name"),
  homeTeamScore: document.querySelector(".home-team-score"),
  awayTeamName: document.querySelector(".away-team-name"),
  awayTeamScore: document.querySelector(".away-team-score"),
  firstBase: document.querySelector(".first-base"),
  secondBase: document.querySelector(".second-base"),
  thirdBase: document.querySelector(".third-base"),
  inningArrow: document.querySelector(".inning-arrow"),
  inningNum: document.querySelector(".inning-number"),
  outsNum: document.querySelector(".number-of-outs"),
  strikeCount: document.querySelector(".strike-count")
};

let homeTeamLineUp = [
  new Player("Kyle Schwarber", "L", "LF", 1, "home"),
  new Player("Kris Bryant", "R", "3B", 2, "home"),
  new Player("Anthony Rizzo", "L", "1B", 3, "home"),
  new Player("Javy Baez", "R", "SS", 4, "home"),
  new Player("Jason Heyward", "R", "RF", 5, "home"),
  new Player("Victor Caratini", "L", "C", 6, "home"),
  new Player("Daniel Descalso", "L", "2B", 7, "home"),
  new Player("Albert Almora JR.", "R", "CF", 8, "home"),
  new Player("Yu Darvish", "R", "P", 9, "home")
];

let awayTeamLineUp = [
  new Player("Nick Senzel", "R", "CF", 1, "away"),
  new Player("Joey Votto", "L", "1B", 2, "away"),
  new Player("Eugenio Suarez", "R", "3B", 3, "away"),
  new Player("Jesse Winker", "L", "LF", 4, "away"),
  new Player("Yasiel Puig", "R", "RF", 5, "away"),
  new Player("Derek Dietrich", "L", "2B", 6, "away"),
  new Player("Jose Iglesias", "R", "SS", 7, "away"),
  new Player("Tucker Barnhart", "L", "C", 8, "away"),
  new Player("Anthony Desclafani", "R", "P", 9, "away")
];