"use strict";

class Pedra {
  static ganhar(jogada) {
    return jogada === "Tesoura";
  }

  static empatar(jogada) {
    return jogada === "Pedra";
  }
}

module.exports = Pedra;
