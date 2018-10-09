const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys.js");
//now keys is an object that has googleClientID and googleClientSecret properties

// app.get('/', (req, res)=>{
// 	res.send({bye: 'there'});
// });

//clientID 863689672673-sktuo370oq15638qmi1fg8del7v25vp7.apps.googleusercontent.com
//"client_secret":"3PatMzg72Wms69KN8pe819j-"

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;

app.listen(PORT);
