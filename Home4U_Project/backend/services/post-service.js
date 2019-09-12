/**
 * Service for Apartment post operations.
 */

'use strict';
import mongoose from 'mongoose';
import Post from '../models/post';

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
 * Saves and returns the new post object.
 *
 */
exports.save =  (post, callback) => {
    let newPost = new Post(post),
        resultCallback = function (err, post) {
            throwError(err);
            callback(post);
    };
    newPost.save(resultCallback);
};

/**
 * Returns the post object matching the id.
 */
exports.get = (postId, callback) =>  {
    let resultCallback = function (err, post) {
        throwError(err);
        callback(post);
    };
    Post.findById(postId, resultCallback);
};

/**
 * Updates and returns the post object.
 */
exports.update = (post, callback) => {
    let resultCallback = function (err, post) {
        throwError(err);
        callback(post);
    };
    post.modified_date = new Date();
    Post.findOneAndUpdate({
        _id: post._id
    }, post, {
        new: true
    }, resultCallback);
};

/**
 * Deletes the post object matching the id.
 */
exports.delete = (postId, callback) => {
    let resultCallback = function (err, post) {
        throwError(err);
        callback();
    };
    Post.remove({
        _id: postId
    }, resultCallback);
};

/**
 * Returns an array of post object matching the search parameters.
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, posts) {
        throwError(err);
        callback(posts);
    };
    Post.find(params, resultCallback);
};
