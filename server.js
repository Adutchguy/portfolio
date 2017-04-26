// Load Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.get('/', function(request, response) {
  console.log('Loaded index.html');
  response.sendFile('index.html', {root: '.'});
})
app.get('*', function(request, response) {
  console.log('OH NOES A 404!!!');
  response.status(404).sendFile('404.html', { root: './public'});
});
app.listen(PORT, function() {
  console.log(`Served atlocalhost: ${PORT}`);
});
