// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 3000;

// Define which directory we will serve files from
app.use(express.static('./public'));

// Here is one way to set up a route...
app.get('/', function(request, response) {
  console.log('Loaded index.html');
  response.sendFile('index.html', {root: '.'});
})

// Let's 404 everything except for our routes and index.html
app.get('*', function(request, response) {
  console.log('OH NOES A 404!!!');
  response.status(404).sendFile('404.html', { root: './public'});
});

// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, function() {
  console.log(`Served atlocalhost: ${PORT}`);
});
