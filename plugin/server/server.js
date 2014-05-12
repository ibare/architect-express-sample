var express = require('express');

module.exports = function setup(options, imports, register) {
  console.log('server plugin start'.cyan);

  var app = express();

  app.set('port', 3000);
  app.listen(app.get('port'), function() {
    console.log('server start with express'.rainbow);

    register(null, {
      server: {
        route: function (path) {
          return app.route(path);
        }
      }
    });
  });
};