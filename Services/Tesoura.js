"use strict";

class Tesoura {
  static ganhar(jogada) {
    return jogada === "Papel";
  }

  static empatar(jogada) {
    return jogada === "Tesoura";
  }
}

module.exports = Tesoura;
