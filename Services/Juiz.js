"use strict";

class Juiz {
  static getWinner(jogada01, jogada02, player) {
    const jogada = require(`./${jogada01}`);

    if (jogada.empatar(jogada02)) return "Empate! ";

    return jogada.ganhar(jogada02)
      ? `Vitória: |Jogador01 - ${jogada01}|`
      : `Vitória: |${player} - ${jogada02}|`;
  }
}

module.exports = Juiz;
