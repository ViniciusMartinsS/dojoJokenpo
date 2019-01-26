'use strict'

const { keyInSelect } = require("readline-sync");

class Shots {
  static firstShot (playOptions) {
    const indexOfChoice = keyInSelect(playOptions, "Jogador01| Faça sua jogada", {
      hideEchoBack: true,
      cancel: false
    });

    console.log("Jogada Realizada! \n");

    return playOptions[indexOfChoice];
  }

  static secondShot (playOptions) {
    const indexOfChoice = keyInSelect(playOptions, "Jogador02| Faça sua jogada", {
        hideEchoBack: true,
        cancel: false
      });

    console.log("Jogada Realizada! \n");

    return playOptions[indexOfChoice];
  }
}

module.exports = Shots
