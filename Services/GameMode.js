'use strict'

const { keyInSelect } = require("readline-sync");
const { playsMachine } = require("./Machine");
const { secondShot } = require("./Shots");

class GameMode {
  static chooseWayToPlay() {
    const gameMode = ["Player X Machine", "Player01 X Player02"];

  return keyInSelect(gameMode, "Escolha o modo de jogo: ", {
      cancel: false
    });
  }

  static whoPlays(chosenWay, playOptions) {
    if (chosenWay != 0) {
      return {
        shot: secondShot(playOptions),
        player:'Jogador02'
      }
    }

    return {
      shot: playsMachine(playOptions),
      player: 'Computador'
    }
  }
}
module.exports = GameMode
