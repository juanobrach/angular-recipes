'use strict'
var angularRecipes = (function(){

	var _express = require('express');
	var _bodyParser = require('body-parser');
	var _cons = require('consolidate');
	var _angularRecipes = null;
	var _app = _express();
	var _routes = require('./routes');

	_app.engine("html",_cons.jade);
	_app.set("view engine","jade");
	_app.set("views","./app/templates");
	_app.use(_bodyParser.urlencoded({limit:'50mb',extended:true}));
	_app.use(_bodyParser.json());
	_app.use(_express.static("./app"));

	_app.get('/',_routes.index)

	_app.listen(8080, function(){console.log("Ready, listen port 8080 ")});
})()