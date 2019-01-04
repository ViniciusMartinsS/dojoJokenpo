const { deepEqual } = require("assert");

const { jokenpo } = require("./index");

describe("Execução Função Jokenpo", () => {
  it("Verificando a decisão do juiz de vitória em Player01 X Player02", async () => {
    const expected = "Vitória: |Jogador01 - Papel|";
    const resultado = jokenpo();
    deepEqual(resultado, expected);
  }).timeout(Infinity);
});
