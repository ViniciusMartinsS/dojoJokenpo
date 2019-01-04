const { deepEqual } = require("assert");

const judge = require("./Services/Judge");

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória para computador ou jogador02: Papel X Tesoura", async () => {
    const expected = "Vitória: |Computador - Tesoura|";
    const resultado = judge.getWinner("Papel", "Tesoura", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória para computador ou jogador02: Tesoura X Pedra", async () => {
    const expected = "Vitória: |Computador - Pedra|";
    const resultado = judge.getWinner("Tesoura", "Pedra", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória para computador ou jogador02: Pedra X Papel", async () => {
    const expected = "Vitória: |Computador - Papel|";
    const resultado = judge.getWinner("Pedra", "Papel", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});
//
describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória para jogador01: Tesoura X Papel", async () => {
    const expected = "Vitória: |Jogador01 - Tesoura|";
    const resultado = judge.getWinner("Tesoura", "Papel", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória para jogador01: Pedra X Tesoura", async () => {
    const expected = "Vitória: |Jogador01 - Pedra|";
    const resultado = judge.getWinner("Pedra", "Tesoura", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória para jogador01: Papel X Pedra", async () => {
    const expected = "Vitória: |Jogador01 - Papel|";
    const resultado = judge.getWinner("Papel", "Pedra", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de empate para: Tesoura X Tesoura", async () => {
    const expected = "Empate! ";
    const resultado = judge.getWinner("Tesoura", "Tesoura", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de empate para: Pedra X Pedra", async () => {
    const expected = "Empate! ";
    const resultado = judge.getWinner("Pedra", "Pedra", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de empate para: Papel X Papel", async () => {
    const expected = "Empate! ";
    const resultado = judge.getWinner("Papel", "Papel", "Computador");
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});
