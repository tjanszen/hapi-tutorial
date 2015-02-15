'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
var plugins = require('./config/plugins');
var routes = require('./config/routes')



server.views(require('./config/views'));

server.connection({port:process.env.PORT});
server.register(plugins, function() {
  server.route(routes);
  server.start(function() {
    console.log('info', server.info.uri);
  });
});
