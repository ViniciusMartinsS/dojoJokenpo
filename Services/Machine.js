"use strict";

/* Imports utilizados */
const pickRandom = require("pick-random");

class Machine {
  static plays(playOptions) {
    const getRandom = pickRandom(playOptions, { count: 1 });
    return getRandom[0];
  }
}

module.exports = Machine;
