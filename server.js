var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');


router.get("/", function(req, res) {
    res.render("index");
});


module.exports = router;
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

//require(".config/routes")(router);
//app.use('/', routes);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
	defaultLayout:"main"
}));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadLines";

mongoose.connect(db, function(error){
	if (error) {
		console.log(error);
	}

	else {
		console.log("mongoose connection is succesful")
	}
});

app.listen(PORT, function(){
	console.log("listening on port:" + PORT);
});