'use strict'

const readlineSync = require("readline-sync");

class Shots {
  static firstShot (playOptions) {
    const indexOfChoice = readlineSync.keyInSelect(playOptions, "Jogador01| Faça sua jogada", {
      hideEchoBack: true,
      cancel: false
    });

    console.log("Jogada Realizada! \n");

    return playOptions[indexOfChoice];
  }

  static secondShot (playOptions) {
    const indexOfChoice = readlineSync.keyInSelect(playOptions, "Jogador02| Faça sua jogada", {
        hideEchoBack: true,
        cancel: false
      });

    console.log("Jogada Realizada! \n");

    return playOptions[indexOfChoice];
  }
}

module.exports = Shots
