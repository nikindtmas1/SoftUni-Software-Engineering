const { development } = require('../config/config');
const secretStr = development.secret;
const jwt = require('jsonwebtoken');


function auth(req, res, next){
    let token = req.cookies.cookieToken;

    if(!token){
        return next();
    }

    jwt.verify(token, secretStr, function(err, decodedToken){
        if(err) {
            return res.status(401).redirect('/user/login');
        }

        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    });
}