/**
 * Home4U endpoint route definitions.
 */
'use strict';

module.exports = (app) => {
    const favoriteController = require('../controllers/favorite-controller');

    app.route('/favorites')
        .get(favoriteController.list);

    // Favorite posts Routes to create favorites
    app.route('/favorites/add')
        .post(favoriteController.post);

    // user Routes for get, update and delete favorites.
    app.route('/favorites/:Id')
        .get(favoriteController.get)
        .delete(favoriteController.delete);
};
