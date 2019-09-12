'use strict';
module.exports = function (app) {
    // Initialize models
    let usermodel = require('./models/users');
    let postmodel = require('./models/post');
    let favoritemodel = require('./models/favorite');

    //Initialize routes
    let userRoutes = require('./routes/user-routes');
    userRoutes(app);
    let postRoutes = require('./routes/post-routes');
    postRoutes(app);
    let favoriteRoutes = require('./routes/favorite-routes');
    favoriteRoutes(app);
};
