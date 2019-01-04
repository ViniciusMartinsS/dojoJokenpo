"use strict";

class Tesoura {
  /* Método que retorna sobre quem a tesoura é mais forte */
  static win(shot) {
    return shot === "Papel";
  }
  /* Método que retorna com quem a tesoura empata */
  static draw(shot) {
    return shot === "Tesoura";
  }
}

module.exports = Tesoura;
