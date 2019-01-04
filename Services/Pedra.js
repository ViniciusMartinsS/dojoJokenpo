"use strict";

class Pedra {
  /* Método que retorna sobre quem a pedra é mais forte */
  static win(shot) {
    return shot === "Tesoura";
  }
  /* Método que retorna com quem a pedra empata */
  static draw(shot) {
    return shot === "Pedra";
  }
}

module.exports = Pedra;
