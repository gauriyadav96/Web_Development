// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js"); //taking the exported module
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let mainItems = ["Buy Food","Cook Food","Eat Food"];
let WorkItems = [];

// sending the html page on the home route from server side
app.get("/", function(req, res) {

    let day = date.getDate(); //calling the getDate function in date.js file
    res.render("list", { listTitle: day, newListItems : mainItems }); //looks for "views" directory with ejs file and passes the value
});

// taking up the user input and sending to server
app.post("/", function(req, res) {

    if (req.body.listBtn === "Work"){
          let item = req.body.next_item;
          WorkItems.push(item);
          res.redirect("/work");
    }else {
          let item = req.body.next_item;
          mainItems.push(item);
          res.redirect("/");
    }
});

// route for different list
 app.get("/work", function(req,res){
     res.render("list", { listTitle: "Work List", newListItems : WorkItems });
 });

 app.get("/aboutus", function(req,res){
   res.render("aboutus");
 });


// post on which our application is running
app.listen(3000, function() {
  console.log("Listening on port 3000");
});
