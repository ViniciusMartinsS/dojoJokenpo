"use strict";

/* Imports utilizados */
const readlineSync = require("readline-sync");
const computador = require("./Services/Computador");
const juiz = require("./Services/Juiz");
const opcoesDeJogadas = ["Pedra", "Papel", "Tesoura"];
const modoDeJogo = ["Player X Machine", "Player01 X Player02"];

/**
 *
 * @author Vinicius Simone Martins
 */

/* Inicio app Jokenpo */
const jokenpo = () => {
  console.log("Bem-vindo ao Jokenpo \n");
  const escolha = modoDeJogo,
    indice = readlineSync.keyInSelect(escolha, "Escolha o modo de jogo: ", {
      cancel: false
    });
  const jogada01 = opcoesDeJogadas,
    index = readlineSync.keyInSelect(jogada01, "Jogador01| Faça sua jogada", {
      hideEchoBack: true,
      cancel: false
    });
  console.log("Jogada Realizada!");
  if (indice != 0) {
    var jogada02 = opcoesDeJogadas,
      indx = readlineSync.keyInSelect(jogada02, "Jogador02| Faça sua jogada", {
        hideEchoBack: true,
        cancel: false
      });
    jogada02 = jogada02[indx];
    var player = "Jogador02";
    console.log("Jogada Realizada! \n");
  } else {
    var player = "Computador";
    jogada02 = computador.play(opcoesDeJogadas);
  }

  console.log("Resultado Obtido: \n");
  console.log("Jogador01:", jogada01[index], `X ${player}:`, jogada02, "\n");

  const getToKonwWinner = juiz.getWinner(jogada01[index], jogada02, player);

  return getToKonwWinner;
};

console.log(jokenpo());

module.exports = { jokenpo };
