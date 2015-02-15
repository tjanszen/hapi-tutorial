'use strict';

module.exports = [
  {method: 'get', path: '/', config: require('../routes/home')},
  {method: 'get', path: '/dog', config: require('../routes/dogs')}
];
