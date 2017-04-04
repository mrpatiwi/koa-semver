"use strict";

const handlers = require("./handlers");
const KoaSemver = require("./KoaSemver");

exports = (module.exports = function builder(modes) {
  return new KoaSemver(modes);
});

exports.handlers = handlers;
