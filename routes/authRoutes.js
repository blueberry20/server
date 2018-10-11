const passport = require('passport');
//requires original npm passport

//we are exporting the function from this file, and assume it will be called with app object
module.exports = (app) => {
    //express route handler
    //pass the user to passport to start authentication process
    //GoogleStrategy above has an internal link to passport authentication when it has a string 'google'
    //scope - we ask for user profile and email
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    //in terminal type: node index.js
    //in browser go to localhost:5000/auth/google
    //go to https://console.developers.google.com/apis/credentials?project=thermal-proton-135123
    //go to Web Client 1, update Authorized Javascript origins to http://localhost:5000
    //update Authorized redirects URIs to http://localhost:5000/auth/google/callback


    //express route handler
    //to handle when the user is sent back here from google with the code
    app.get('/auth/google/callback', passport.authenticate('google'));

    //test if user is logged in
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

}


