#!/usr/bin/env node
var request = require('superagent');
var fs = require("fs");


// We could read the request from a given json, make the request, and validate its response on the .end callback
var SPEC_FILE_PATH = "spec/test.json"

var requests = JSON.parse(fs.readFileSync(SPEC_FILE_PATH, 'utf8'));

requests.forEach(function(req){
	
	request.get(req.url)
	
	.end(function(err, res){
		var ip = res.body.origin;
		validateResponse(req.expectedResponse, res.body);
	});

});


var validateResponse = function(expected, response){
	JSON.stringify(expected) === JSON.stringify(response)? console.log("all tests passed"): console.log("FAIL");
}


