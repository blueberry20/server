const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//we dont need to assign it to a var since we just need to add file here
require('./models/User');
require('./services/passport.js');
//const authRotes attaches 2 functions inside authRoutes
const authRoutes = require('./routes/authRoutes');


//go to mLab.com, go inside database emaily-dev and copy url
mongoose.connect(keys.mongoURI);


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //this cookie will last 30 days (in ms)
        keys: [keys.cookieKey]
    })
);

//finishes user sign in
app.use(passport.initialize());
app.use(passport.session());

//call function from authRoutes right away
authRoutes(app);

//express
// app.get('/', (req, res)=>{
// 	res.send({bye: 'there'});
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT);



//How authentication works
//a browser sends a request to the server asking to log me in
//the server responds with a header that includes a cookie, set-cookie
//when the browser makes a request again (what keeps us logged in another day, Can I see my posts)
//the browser sends that cookie to the server 
//the server responds with posts