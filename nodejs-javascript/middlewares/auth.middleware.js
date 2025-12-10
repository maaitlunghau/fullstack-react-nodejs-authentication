require("dotenv").config();


// middleware
const authMiddleware = (req, res, next) => {
    // check and verify token...

    next();
}


module.exports = authMiddleware;