/**
 * Service for user operations.
 */

'use strict';
import mongoose from 'mongoose';
import User from '../models/users';

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
 * Saves and returns the new user object.
 */
exports.save =  (user, callback) => {
    let newUser = new User(user),
        resultCallback = (err, user) => {
            console.log("server user: "+ user)
            throwError(err);
            callback(user);
    };
    newUser.save(resultCallback);
};

/**
 * Returns the user object matching the id.
 */
exports.get = (userId, callback) =>  {
    let resultCallback = function (err, user) {
        throwError(err);
        callback(user);
    };
    User.findById(userId, resultCallback);
};

/**
 * Updates and returns the user object.
 */
exports.update = (user, callback) => {
    let resultCallback = function (err, user) {
        throwError(err);
        callback(user);
    };
    user.modified_date = new Date();
    User.findOneAndUpdate({
        _id: user._id
    }, user, {
        new: true
    }, resultCallback);
};

/**
 * Deletes the user object matching the id.
 */
exports.delete = (userId, callback) => {
    let resultCallback = function (err, user) {
        throwError(err);
        callback();
    };
    User.remove({
        _id: userId
    }, resultCallback);
};
