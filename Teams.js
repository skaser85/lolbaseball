let connect = require("camo").connect;
let Document = require("camo").Document;

class Team extends Document {
  constructor() {
    super();

    this.name = String;
    this.city = String;
    this.shortName = String;
    this.players = [Player];
    this.primaryColor = String;
  }
}