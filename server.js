// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get("/api/timestamp/:date_string?", function (req, res){
  //test if it is a unix timestamp or date or what
 /* If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
If the date string is valid the api returns a JSON having the structure
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"} */
  var submission = req.params.date_string;
  
  if(submission == undefined) {
    console.log("the param was undefined!  It was " + submission);
  var tin = Date.now();
    console.log(tin);
    
    tin = parseInt(tin);
    tin = new Date(tin);
var utc = tin.toUTCString();
var unix = Date.parse(utc);
res.json({"unix": unix, "utc":utc});
  }
  //natural language date check
  var numCheck = parseInt(submission);
  submission = new Date(submission);
  //console.log("Line 41 Submission is : "+ submission);
 // console.log("line 48 " + parseInt(submission));
  console.log("line 49 " + submission);
  
  console.log("numCheck is " + numCheck);
  if (submission == 'Invalid Date' && numCheck == NaN){
    
    console.log("line50!");
    res.json({"unix": null, "utc":null});
  }else{
    submission = numCheck;
    submission = new Date(submission);
    console.log("line53");
  var utc = submission.toUTCString();
  var unix = Date.parse(utc);
    res.json({"unix": unix, "utc":utc});
  
  }
// console.log(submission); 
    
    var now = new Date();
    
    

  

});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});