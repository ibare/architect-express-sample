module.exports = function setup(options, imports, register) {
  var routePath = options.path,
      server = imports.server,
      photos = imports.photos;

  server.route(routePath)
    .post(function(req, res, next) {
      photos.upload('file', function(msg) {
        res.status(201).send(msg);
      });
    });

  register(null, { });
};