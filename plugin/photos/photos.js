module.exports = function setup(options, imports, register) {
  console.log('photos plugin start'.cyan);

  register(null, {
    photos: {
      upload: function (file, callback) {
        callback('upload complete!!');
      }
    }
  });
};