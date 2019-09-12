/**
 * Controller for sticky endpoints.
 */

'use strict';
//import sticky service.
import userService from '../services/user-service';
const _ = require('lodash');
import User from '../models/users';

const passport = require('passport');
/**
 * Returns the user object matching the id.
 */
exports.get = (request, response) => {
    let resultCallback = (user) => {
      response.status(200);
      response.json(user);
    };
    userService.get(request.params.username, resultCallback)
};


exports.authenticate = (request,response,next) => {
  passport.authenticate('local', (err, user, info) => {
       // error from passport middleware
       console.log("user in Controller:" + user)
       if (err) {
         console.log("error :"+ err)
         return response.status(400).json(err);
       }

       // registered user
       else if (user) {
         console.log("valid user: "+user);
         return response.status(200).json({ "token": user.generateJwt(), "user":user });
       }
       // unknown user or wrong password
       else return response.status(404).json(info);
   })(request, response);
}

exports.userProfile = (request, response, next) => {
    User.findOne({ _id: request._id },
        (err, user) => {
            console.log("userProfile: " + request.body)
            if (!user)
                return response.status(404).json({ status: false, message: 'User record not found.' });
            else
                return response.status(200).json({ status: true, user : _.pick(user,['firstName','emailId','username']) });
        }
    );
}
/**
 * Creates a new user with the request JSON and
 * returns user JSON object.
 */
exports.post = function (request, response, next) {
  var user = new User();
  user.firstName = request.body.firstName;
  user.lastName = request.body.lastName;
  user.emailId = request.body.emailId;
  user.username = request.body.username;
  user.password = request.body.password;
  // user.setPassword(request.body.password);
  user.save((err, doc) => {
      if (!err)
          response.send(doc);
      else {
          if (err.code == 11000)
              response.status(422).send(['Duplicate email adrress found.']);
          else
              return next(err);
      }

  });
};

/**
 * Updates and returns a user object in JSON.
 */
exports.put = function (request, response, next) {
  var user = new User(request.body);
  User.update({_id : user.id}, user, function(err) {
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
 * Deletes a user object.
 */
exports.delete = function (request, response) {
    let callback = function (user) {
        response.status(200);
        response.json({
            message: 'User Successfully deleted'
        });
    };
    userService.delete(request.params.userId, callback);
};
