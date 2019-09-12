/**
 * Service for sticky operations.
 */

'use strict';
import mongoose from 'mongoose';
import FavPost from '../models/favorite';

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = (error) => {
    if (error) {
        throw Error(error);
    }
};

/**
 * Saves and returns the new favorite object.
 */
exports.save =  (favorite, callback) => {
    let newfavorite = new FavPost(favorite),
        resultCallback = function (err, favorite) {
            throwError(err);
            callback(favorite);
    };
    newfavorite.save(resultCallback);
};

/**
 * Returns the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.get = (favId, callback) =>  {
    let resultCallback = (err, favorite) => {
        throwError(err);
        callback(favorite);
    };
    FavPost.findById(favId, resultCallback);
};

/**
 * Deletes the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = (favId, callback) => {
    let resultCallback = function (err, favId) {
        throwError(err);
        callback();
    };
    FavPost.remove({
        _id: favId
    }, resultCallback);
};

/**
 * Returns an array of favorite post object matching the search parameters.
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, posts) {
        throwError(err);
        callback(posts);
    };
    FavPost.find(params, resultCallback);
};
