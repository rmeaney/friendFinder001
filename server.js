// Dependenciess
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var totalTables = 5;
var reservedTables = [];
var waitlist = [];

// Sets up the Express App
// =============================================================
// Sets up the Express app to handle data parsing

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//people Data

var Clients = [{
	"name":"Bill",
	  "photo":"https://i1.wp.com/www.shakespearealoud.com/2014site/wp-content/uploads/2011/06/BB-LH-cropped-no-name.jpg",
	   "scores":['3','3','2','2','4','4','4','5','2','4']
},{
	"name":"Jane",
	  "photo":"https://pbs.twimg.com/profile_images/603984626688733184/ZZi7OVnS.jpg",
	  "scores": ['2','2','4','5','2','2','5','3','1','2']
},{
  "name":"Alice",
	  "photo":'http://www.tiara.org/images/Alice3_sm.jpg',
	  "scores": ['4','2','1','5','3','1','3','2','4','5']
},{
	"name":"Mary",
		"photo":'http://static-25.sinclairstoryline.com/resources/media/8b2ea39f-ee9c-45c0-d05f-9c2428cb342f-rendition_0_mary_nam_web2.jpg',
		"scores":['1','3','5','5','2','2','3','4','1','5']
}];


// set up the routes

//display home page
app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
 res.sendFile(path.join(__dirname, "survey.html"));
});


//display raw json data
app.get("/api/friends", function(req, res) {
   res.json(Clients);
});

//post newClient
app.post("/api/friends", function(req, res) {
 var newClientData = req.body;
	Clients.push(newClientData);
//$('#results').modal().toggle();
// $('#resultsModal').modal('show');

});




// Starts the server to begin listening
// =============================================================
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});

