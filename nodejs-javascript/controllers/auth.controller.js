require("dotenv").config();

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { registerService, loginService, generateAccessToken } = require("../services/auth.services");


const register = async (req, res) => {
    try {
        const newUser = await registerService(req.body);

        return res.status(201).json({
            success: true,
            message: "✅ Registered user successfully",
            user: newUser
        })

    } catch (err) {
        console.log("❌ Failed to register user.", err.message);
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const login = async (req, res) => {
    try {
        const data = await loginService(req.body);

        return res.status(200).json({
            success: true,
            message: "✅ Logged user succeed",
            user: data.user,
            accessToken: data.accessToken,
            code: 0
        })

    } catch (err) {
        console.log("❌ Failed to login user.", err.message);

        if (err.message === "Invalid credential!") {
            return res.status(400).json({
                success: false,
                message: err.message,
                code: err.code
            })
        }

        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const logout = async (req, res) => {
    try {

    } catch (err) {
        console.log("❌ Failed to logout user.");
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const refreshToken = async (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        return res.status(401).json({
            message: "No refresh token!"
        })
    }

    try {
        const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(payload.userId);
        if (!user) return res.status(401).json({
            message: "User not found!"
        })

        const newAccessToken = generateAccessToken(user);

        return res.status(200).json({
            success: true,
            message: "✅ Refreshed token succeed",
            accessToken: newAccessToken
        });

    } catch (err) {
        return res.status(403).json({
            message: "Invalid refresh token"
        })
    }
}


module.exports = {
    register,
    login,
    logout,
    refreshToken
}
