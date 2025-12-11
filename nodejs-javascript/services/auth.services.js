require("dotenv").config();

const User = require("../models/User");

const bcrypt = require("bcryptjs");
const ROUNDS = 10;
const jwt = require("jsonwebtoken");


const registerService = async (data) => {
    const { username, email, password, role } = data;

    const checkExistingUser = await User.findOne({
        $or: [{ email }, { username }]
    });
    if (checkExistingUser) {
        throw new Error("User already exists!");
    }

    const saltKey = await bcrypt.genSalt(ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltKey);

    return User.create({
        username,
        email,
        password: hashedPassword,
        role: role || "user",
        avatar: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
        avatarImageUrl: ""
    });
}

const generateAccessToken = (user) => {
    jwt.sign(
        {
            userId: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30m"
        }
    );
}

const generateRefreshToken = (user) => {
    jwt.sign(
        {
            userId: user._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "7d"
        }
    );
}

const loginService = async (data) => {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("Invalid credential!");
        error.code = 1;
        throw error;
    }

    const isMatchedPassword = await bcrypt.compare(password, user.password);
    if (!isMatchedPassword) {
        const error = new Error("Invalid credential!");
        error.code = 2;
        throw error;
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // send refresh token HttpOnly cookie
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
    });

    return {
        user: {
            username: user.username,
            email: user.email,
            role: user.role,
        },
        accessToken
    }
}


module.exports = {
    registerService,
    loginService,
    generateAccessToken
}