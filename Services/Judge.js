"use strict";

class Judge {
  static getWinner(shot01, shot02, player) {
    const shot = require(`./${shot01}`);

    console.log("Resultado Obtido: \n");
    console.log("Jogador01:", shot01, `X ${player}:`, shot02, "\n");

    if (shot.draw(shot02)) return "Empate! ";

    return shot.win(shot02)
      ? `Vitória: |Jogador01 - ${shot01}|`
      : `Vitória: |${player} - ${shot02}|`;
  }
}

module.exports = Judge;
