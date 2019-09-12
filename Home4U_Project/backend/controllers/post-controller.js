/**
 * Controller for Post endpoints.
 */

'use strict';
//import post-apartment service.
import postService from '../services/post-service';
const _ = require('lodash');
import Post from '../models/post';
/**
 * Creates a new post with the request JSON and
 * returns post JSON object.

 */
exports.post = (request, response) => {
    let newPost = Object.assign({}, request.body),
        callback = function (post) {
        response.status(200);
        response.json(post);
    };
    postService.save(newPost, callback);
};

/**
 * Returns a post object in JSON.
 */
exports.list = function (request, response) {
    let callback = function (posts) {
       console.log("body "+request.body);
        response.status(200);
        response.json(posts);
    };
    postService.search({}[{'userId':true}], callback);
};

/**
 * Updates and returns a post object in JSON.
 */
exports.put = (request, response) => {
  var post = new Post(request.body);
  Post.updateOne({_id : post.id}, post, function(err) {
      if (err) {
        console.log("not updated!");
        response.status(400);
        response.send();
      }

      console.log("updated!");
      response.send({status: 'ok'});
    });
};


/**
 * Returns the post object matching the id.
 */
exports.get = (request, response) => {
    let resultCallback = function (post) {
      response.status(200);
      response.json(post);
      console.log("post :"+post)
    };
    postService.get(request.params.postId, resultCallback)
};

/**
 * Deletes a post object.
 */
exports.delete = function (request, response) {
    let callback = function (post) {
        response.status(200);
        response.json({
            message: 'Post Successfully deleted'
        });
    };
    postService.delete(request.params.postId, callback);
};
