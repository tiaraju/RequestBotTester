#!/usr/bin/env node
var request = require('superagent');


// We could read the request from a given json, make the request, and validate its response on the .end callback
request.get("http://httpbin.org/ip")
.end(function(err, res){
	var ip = res.body.origin;
	console.log("testing works with ip response: "+ ip);
	//validateResponse();
});