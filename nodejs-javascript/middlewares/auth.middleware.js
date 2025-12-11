require("dotenv").config();
const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
    // check token
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied! No token provided. Please login to continue..."
        })
    }

    // verify token
    try {
        const decodeTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (decodeTokenInfo) {
            req.userInfo = decodeTokenInfo;

            // req.userInfo = {
            //     username: decodeTokenInfo.username,
            //     role: decodeTokenInfo.role,
            //     createdBy: "maaitlunghau"
            // }
        }

        next();

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Access denied! No token provided. Please login to continue..."
        })
    }
}


module.exports = authMiddleware;