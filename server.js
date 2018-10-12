var path = require('path');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/hello', (req, res) => {
  res.send('Hello Geeks on Tour!');
});

// Route for everything else.
app.get('*', function(req, res){
  res.send('Route not found!!');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');