"use strict";

class Judge {
  /* Método, onde, o juiz irá verificar quem foi o vencedor do game */
  static getWinner(shot01, shot02, player) {
    const shot = require(`./${shot01}`);

    if (shot.draw(shot02)) return "Empate! ";

    return shot.win(shot02)
      ? `Vitória: |Jogador01 - ${shot01}|`
      : `Vitória: |${player} - ${shot02}|`;
  }
}

module.exports = Judge;
