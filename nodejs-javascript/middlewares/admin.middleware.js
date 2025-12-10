// middleware
const adminMiddleware = (req, res, next) => {
    // check role and redirect...

    next();
};


module.exports = adminMiddleware;