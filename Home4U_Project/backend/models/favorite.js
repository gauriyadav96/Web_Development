import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let favPost = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    extension: {
        type: String
    },
    advertiserType: {
        type: String
    },
    streetAddress1: {
        type: String
    },
    streetAddress2: {
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
    price: {
        type: String
    },
    propertyType: {
        type: String
    },
    bedrooms: {
        type: String
    },
    bathrooms: {
        type: String
    },
    forRent: {
        type: String
    },
    description: {
        type: String
    }
});

export default mongoose.model('FavPost', favPost);
