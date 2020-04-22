const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    authHeader && jwt.verify(authHeader.split(" ")[1], secrets.jwtSecret, (err, user) => {
        console.log(user);
        if(err){
            res.status(401).json({message: "You shall not pass"})
        } else {
            req.user = user;
            next();
        }
    });

    // if(req.session && req.session.user && verified.subject === req.session.user.id && Date.now() > verified.exp){
    //     next();
    // } else {
    //     res.status(401).json({message: "You shall not pass!"})
    // }
}