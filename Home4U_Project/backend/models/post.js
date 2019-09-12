import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Posts = new Schema({
    userId: {
        type: String,
        required:'UserID cannot be empty'
    },
    imagepath:{
      type:String
    },
    firstname: {
        type: String,
        required: 'First name can\'t be empty'
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'Email can\'t be empty'
    },
    phone: {
        type: String,
        unique: true,
        required: 'Phone Number can\'t be empty'
    },
    extension: {
        type: String,
        unique: true,
        required: 'Extension can\'t be empty'
    },
    advertiserType: {
        type: String,
        required: 'AdvertiserType can\'t be empty'
    },
    streetAddress1: {
        type: String,
        required: 'streetAddress1 can\'t be empty'
    },
    streetAddress2: {
        type: String,
        required: 'streetAddress2 can\'t be empty'
    },
    city: {
        type: String,
        required: 'city can\'t be empty'
    },
    state: {
        type: String,
        required: 'state can\'t be empty'
    },
    zip: {
        type: String,
        required: 'zip can\'t be empty'
    },
    price: {
        type: String,
        required: 'price can\'t be empty'
    },
    propertyType: {
        type: String,
        required: 'propertyType can\'t be empty'
    },
    bedrooms: {
        type: String,
        required: 'bedrooms can\'t be empty'

    },
    bathrooms: {
        type: String,
        required: 'bathrooms can\'t be empty'
    },
    forRent: {
        type: String,
        required:'Rent can\'t be empty'
    },
    description: {
        type: String,
        required: 'description can\'t be empty'
    }
});

// Custom validation for email
// Users.path('emailId').validate((val) => {
//     let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

export default mongoose.model('Post', Posts);
