module.exports = function setup(options, imports, register) {
  console.log('users plugin start'.cyan);
  var routePath = options.path,
      server = imports.server;

  server.route(routePath)
    .get(function(req, res, next) {
      res.send('okay get -- from world');
    });

  register(null, { });
};