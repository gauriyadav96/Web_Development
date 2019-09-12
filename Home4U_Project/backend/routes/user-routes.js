
/**
 * Home4U endpoint route definitions.
 */
'use strict';
// import { userController } from '../controllers/user-controller';
// const userController = require('../controllers/user-controller');

module.exports = (app) => {
    const userController = require('../controllers/user-controller');
    const jwtHelper = require('../config/jwtHelper');
    // Sticky Routes to create user
    app.route('/users/register')
        .post(userController.post);

    // user Routes for get, update and delete user.
    app.route('/users/login')
        .post(userController.authenticate)

    app.route('/users/userProfile')
        .get(jwtHelper.verifyJwtToken,userController.userProfile)

    // user Routes for get, update and delete user.
    app.route('/users')
        // .get(userController.get)
        .post(userController.put)
        .delete(userController.delete);
};
