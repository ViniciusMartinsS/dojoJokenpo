"use strict";

class Papel {
  static win(shot) {
    return shot === "Pedra";
  }

  static draw(shot) {
    return shot === "Papel";
  }
}

module.exports = Papel;
