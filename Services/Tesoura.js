"use strict";

class Tesoura {

  static win(shot) {
    return shot === "Papel";
  }

  static draw(shot) {
    return shot === "Tesoura";
  }
}

module.exports = Tesoura;
