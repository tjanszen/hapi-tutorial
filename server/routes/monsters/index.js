'use strict';
var Monster = require('../../models/monster')

module.exports = {
  handler: function(request, reply) {
    Monster.find(function(err, monsters) {
      reply.view('templates/monsters/index', {monsters:monsters});
    });
  }
};
