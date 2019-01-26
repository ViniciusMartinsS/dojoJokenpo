"use strict";

const pickRandom = require("pick-random");

class Machine {
  static playsMachine(playOptions) {
    const getRandom = pickRandom(playOptions, { count: 1 });
    return getRandom[0];
  }
}

module.exports = Machine;
