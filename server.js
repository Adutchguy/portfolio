// Load Express
const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.use(express.static('./public/js/controllers'));
app.listen(PORT, () => console.log(`Served atlocalhost: ${PORT}`));
