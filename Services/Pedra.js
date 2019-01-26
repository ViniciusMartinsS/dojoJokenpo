"use strict";

class Pedra {
  static win(shot) {
    return shot === "Tesoura";
  }

  static draw(shot) {
    return shot === "Pedra";
  }
}

module.exports = Pedra;
