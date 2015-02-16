'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/about', config: require('../routes/general/about')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},

  {method: 'get', path: '/sum/{x}/{y}', config: require('../routes/math/sum')},
  {method: 'get', path: '/square/{list}', config: require('../routes/math/square')},

  {method: 'get', path: '/monsters', config: require('../routes/monsters/index')}
];
