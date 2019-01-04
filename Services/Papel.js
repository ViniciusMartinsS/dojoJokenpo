"use strict";

class Papel {
  /* Método que retorna sobre quem o papel é mais forte */
  static win(shot) {
    return shot === "Pedra";
  }
  /* Método que retorna com quem o papel empata */
  static draw(shot) {
    return shot === "Papel";
  }
}

module.exports = Papel;
