/**
 * Controller for Favorite post endpoints.
 */

'use strict';
//import favorite posts service.
import favoriteService from '../services/favorite-service';
/**
 * Creates a new favorite post  with the request JSON and
 * returns post JSON object
 */
exports.post = (request, response) => {
    let favPost = Object.assign({}, request.body),
        callback = function (favpost) {
        response.status(200);
        response.json(favpost);
    };
    favoriteService.save(favPost, callback);
};

/**
 * Returns the post object matching the id.
 */
exports.get = (userId, callback) => {
    let resultCallback = function (err, favpost) {
        throwError(err);
        callback(favpost);
    };
    favoriteService.findById(userId, resultCallback);
};

/**
 * Deletes a post object.
 */
exports.delete = function (request, response) {
    let callback = function (post) {
        response.status(200);
        response.json({
            message: 'Post Removed from favorites'
        });
    };
    favoriteService.delete(request.params.favId, callback);
};

/**
 * Returns a post object in JSON.
 */
exports.list = function (request, response) {
    let callback = function (posts) {
        response.status(200);
        response.json(posts);
    };
    favoriteService.search({}, callback);
};
