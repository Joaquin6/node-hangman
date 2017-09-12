var home = require('./home');
var game = require('./game');

module.exports = {
  route: function(app) {
    app.get('/', home);
    app.use('/game', game);

    app.use((err, req, res, next) => {
      res.json({ success: false, id: req.body.id, error: err.message });
    });
  }
};