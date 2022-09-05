const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser= require('body-parser');
const path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');



const subsribers = require('./routes/subscribers-routes')
const events = require('./routes/events-routes');
const login = require('./routes/login')
const past = require('./routes/pastEventRoute')
const coming = require('./routes/comingEventsRoute')


mongoose.connect('mongodb://127.0.0.1:27017/anj').then((x) => {
    console.log(`Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`)
        }).catch((err) => {
    console.error('Error connecting to mongodb', err.reason)
})

const app = express();

app.use(cors(['http://localhost:4000']));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/subscribers',subsribers);
app.use('/events', events);
app.use('/login',login);
app.use('/past', past)
app.use('/coming',coming)

app.use(cookieParser());
 app.use(session({ 
     secret: 'secREt$#code$%3245',
     resave: false,
     saveUninitialized: true,
     cookie: { maxAge: 100000 }
 }))

app.use('/uploads', express.static('uploads'))

const port = process.env.PORT || 4000;
const server = app.listen(port,()=> console.log(`listening to port ${port}..`));