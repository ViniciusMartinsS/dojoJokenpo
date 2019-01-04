"use strict";

/* Imports utilizados */
const readlineSync = require("readline-sync");
const machine = require("./Services/Machine");
const judge = require("./Services/Judge");
/* Opçoes de jogadas do Jokenpo */
const playOptions = ["Pedra", "Papel", "Tesoura"];
/*Opções de modo de jogo */
const gameMode = ["Player X Machine", "Player01 X Player02"];

/**
 *
 * @author Vinicius Simone Martins
 */

/* Inicio app Jokenpo */
const jokenpo = () => {
  console.log("Bem-vindo ao Jokenpo \n");
  /*Recebendo a escolha do usuário: User X PC || User X User */
  const choice = gameMode,
    ind = readlineSync.keyInSelect(choice, "Escolha o modo de jogo: ", {
      cancel: false
    });
  /*Recebendo a jogada do 1º jogador */
  const shot01 = playOptions,
    index = readlineSync.keyInSelect(shot01, "Jogador01| Faça sua jogada", {
      hideEchoBack: true,
      cancel: false
    });
  console.log("Jogada Realizada!");
  /*Caso o usuário tenha optado por jogar com outro user, entra nesse if e permite a jogada do 2º usuário */
  if (ind != 0) {
    var shot02 = playOptions,
      indx = readlineSync.keyInSelect(shot02, "Jogador02| Faça sua jogada", {
        hideEchoBack: true,
        cancel: false
      });
    shot02 = shot02[indx];
    var player = "Jogador02";
    console.log("Jogada Realizada! \n");
    /*Caso o usuário deseje jogar contra a máquina, chama um método,onde, a máquina randomicamente faz sua jogada entre 3 opções */
  } else {
    var player = "Computador";
    shot02 = machine.plays(playOptions);
  }
  /*Mostra ao usuário o que foi inserido por cada participante do game */
  console.log("Resultado Obtido: \n");
  console.log("Jogador01:", shot01[index], `X ${player}:`, shot02, "\n");
  /* Momento em que é chamado um método em que o juiz diz quem foi o vencedor ou se houve empate */
  const getToKonwWinner = judge.getWinner(shot01[index], shot02, player);

  return getToKonwWinner;
};

module.exports = { jokenpo };
