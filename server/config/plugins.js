var plugins = [
  {
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        args: [{log: '*', response: '*', error: '*'}]
      }]
    }
  }
];

module.exports = plugins
