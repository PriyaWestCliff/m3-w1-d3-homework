const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// route
app.get('/', (req, res) => {
  res.render('index');
});

// server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
