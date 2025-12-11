const User = require("../models/User");
const { registerService, loginService } = require("../services/auth.services");


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


module.exports = {
    register,
    login,
    logout,
}
