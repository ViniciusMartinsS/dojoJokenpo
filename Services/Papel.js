"use strict";

class Papel {
  static ganhar(jogada) {
    return jogada === "Pedra";
  }

  static empatar(jogada) {
    return jogada === "Papel";
  }
}

module.exports = Papel;
