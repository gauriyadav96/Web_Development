/**
 * Home4U endpoint route definitions.
 */
'use strict';

module.exports = (app) => {
    const postController = require('../controllers/post-controller');
    // Post Routes to create post
    app.route('/posts/add')
        .post(postController.post);

    // user Routes for get, update and delete post.
    app.route('/posts/:Id')
        .post(postController.put)
        .delete(postController.delete);

    app.route('/posts')
        .get(postController.list)
};
