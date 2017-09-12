'use strict';

const home = require('./home');
const game = require('./game');

module.exports = {
  route: function(app) {
    app.get('/', home);
    app.use('/game', game);

    app.use((err, req, res, next) => {
      res.json({ success: false, id: req.body.id, error: err.message });
    });
  }
};
