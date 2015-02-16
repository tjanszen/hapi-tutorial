'use strict';
var Joi = require('joi');

module.exports = {
  validate: {
    params: {
      x: Joi.number().integer(),
      y: Joi.number().integer()
    }
  },
  handler: function(request, reply) {
    var sum = request.params.x + request.params.y;
    reply.view('templates/math/sum', {x:request.params.x, y:request.params.y, sum:sum})
  }
};
