import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

let Users = new Schema({
    firstName: {
        type: String,
        required: 'First name can\'t be empty'
    },
    lastName: {
        type: String
    },
    username: {
        type: String,
        unique : true,  //sets the field as uniques throughout
        required: 'Username can\'t be empty'
    },
    emailId: {
        type: String,
        unique : true,  //sets the field as uniques throughout
        required: 'EmailId can\'t be empty'
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    phone: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    pet: {
        type: String
    },
    gender: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    incomeRange: {
        type: String
    },
    noOfChildren: {
        type: String
    },

    // hash: String
    saltSecret: String
});


// Custom validation for email
Users.path('emailId').validate((val) => {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
Users.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
Users.methods.verifyPassword =  function (password) {
    console.log("password in db:  "+ this.password)
    console.log("password in login: "+ password)
    return bcrypt.compareSync(password, this.password);
};

// Users.methods.setPassword = function(password){
//   console.log("model password: "+ password)
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//   this.password = this.hash;
// };

//simply passing it the data we want to include in the token, plus a secret that the hashing algorithm will use.
Users.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  // return jwt.sign({
  //   _id: this._id,
  //   // emailId: this.emailId,
  //   // name: this.username,
  //   exp: parseInt(expiry.getTime() / 1000),
  // }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!

  return jwt.sign({ _id: this._id},
        "MY_SECRET",
    {
        expiresIn: parseInt(expiry.getTime() / 1000)
    });
};

// module.exports = mongoose.model('User', Users);
export default mongoose.model('User', Users);
