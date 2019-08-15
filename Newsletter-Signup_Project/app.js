const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public")); //specifies the static folder where we kept external local files

app.listen(process.env.PORT || 3000, function(){ //can be run locally or on heroku
  console.log("Server is running on 3000");
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var fname = req.body.firstName;
  var lname = req.body.lastName;
  var email = req.body.email;

// javascript object for mailchimp parameters
var data = {
  members:[{
    email_address: email,
    status: "subscribed",
    merge_fields:{
      FNAME:fname,
      LNAME:lname
    }
  }]
};

var jsonData = JSON.stringify(data); //converted to json format as per mailchimps template

 var options = {
  url:"https://us3.api.mailchimp.com/3.0/lists/c4b3fc7008",
  method:"POST", //since we have to post the data to mailchimp
  headers: {
         "Authorization": "gauri df1bf7c06c73d2c5af54e79bc428b2bf-us3"   //autheticate ourselves to mailchimp server
},
  body: jsonData  //gives the content
};

 request(options,function(error,response, body){
   if(error) {
    // console.log(error);
     res.send("Sorry, something went wrong. Please try agian. ${error}");
   } else if(response.statusCode === 200) {
  //   console.log(response.statusCode);
       res.sendFile(__dirname + "/success.html");
     } else {
       res.sendFile(__dirname + "/failure.html");
     //console.log(error);
     }
   });
});


 app.post("/failure", function(req,res){
   res.redirect("/");
 });

// heroku page
 // https://quiet-anchorage-87014.herokuapp.com/
