function isAdmin(req, ers, next){
    console.log(req.headers);
    next();
}

module.exports = isAdmin;