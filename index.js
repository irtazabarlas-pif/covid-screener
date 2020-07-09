const express = require('express');
var cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');
const facilities = require('./Facilities');
const flows = require('./Flowcharts');
var cookieParser = require('cookie-parser');

const app = express();

// const logger = (req, res, next) => {
//     console.log('Hello');
//     next();
// }

// init middleware
// app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// homepage route
app.get('/', (req, res) => res.render('facilities', {
    title: 'Member Facilities',
    facilities: facilities,
}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sms', require('./routes/sms/twilio'));
app.use('/api/facilities', require('./routes/api/facilities'));
app.use('/api/flows', require('./routes/api/flowcharts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));