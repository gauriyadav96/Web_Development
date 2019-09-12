 import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/users';
require('./config/passportConfig');

const express = require("express");
const path = require('path');
const fs = require('fs');
const multer = require('multer');
let port = 4000;
const passport = require('passport');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/SearchApartment', { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//Adding body parser for handling request and response objects.
const app = express();
const router = express.Router();
//const express = require('express');


app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

//Initialize app
let initApp = require('./app');
initApp(app);
app.listen(port);
console.log('Home4U RESTful API server started on: ' + port);

const DIR = './uploads';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({storage: storage});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/post', function (req, res) {
    res.end('file catcher example');
});

app.post('/post/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received: ');
        return res.send({
            success: true
        })
    }
});

///nodeMailer
var nodeMailer = require('nodemailer');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// var port = 3000;
app.get('/', function (req, res) {
    res.render('index');
});
app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'Gmail',
        auth: {
            user: 'arzoouzma01@gmail.com',
            pass: 'webdesign'
        }
    });
    let mailOptions = {
        from: '"Arzoo Uzma" <arzoouzma01@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});
// app.listen(port, function(){
//     console.log('Server is running at port: ',port);
// });
