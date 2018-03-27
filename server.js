const express = require('express');
const site = express();

site.set('view engine', 'ejs');
site.get('/', (request, response) => response.render('pages/index'));
site.listen(1313);

console.log('server online...');
