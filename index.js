"use strict";

const { getWinner } = require("./Services/Judge");
const { firstShot } = require("./Services/Shots")
const { chooseWayToPlay, whoPlays } = require('./Services/GameMode')
const playOptions = ["Pedra", "Papel", "Tesoura"];

const jokenpo = () => {
  console.log("Bem-vindo ao Jokenpo \n");
  const chosenWay = chooseWayToPlay();
  const shot01 = firstShot(playOptions);
  const shot02 = whoPlays(chosenWay, playOptions);

  return getWinner(shot01, shot02.shot, shot02.player);
};

module.exports = { jokenpo };
