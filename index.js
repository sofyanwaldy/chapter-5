const express = require('express'); // third-party module
const logger = require('morgan'); // third-party module
const path = require('path'); // core module

const app = express();
const PORT = process.env.PORT || 3000;

// Router
const indexRoute = require('./routes'); // local module

app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})