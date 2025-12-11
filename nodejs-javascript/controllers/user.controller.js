const User = require("../models/User");
const {
    getAllUsersService
} = require("../services/user.services");


const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService(req, res);

        return res.status(200).json({
            success: false,
            message: "✅ Gotten all users succeed",
            users
        })

    } catch (err) {
        console.log("❌ Failed to getting all users", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}

const getSingleUser = (req, res) => {
    try {

    } catch (err) {
        console.log("❌ Failed to getting the single user", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}

const createNewUser = (req, res) => {
    try {

    } catch (err) {
        console.log("❌ Failed to creating new user", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}

const updateUser = (req, res) => {
    try {

    } catch (err) {
        console.log("❌ Failed to updating user", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}

const getAccountUser = async (req, res) => {
    return res.status(200).json({
        message: "✅ Gotten account user succeed",
        account: req.userInfo
    })
}

const deleteUser = (req, res) => {
    try {

    } catch (err) {
        console.log("❌ Failed to deleting user", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}

const banUser = (req, res) => {
    try {


    } catch (err) {
        console.log("❌ Failed to banning user", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}

const UnBanUser = (req, res) => {
    try {


    } catch (err) {
        console.log("❌ Failed to unbanning all users", err.message);
        return res.status(500).json({
            success: false,
            message: `Interval server error: ${err.message}`
        })
    }
}


module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    getAccountUser,
    deleteUser,
    banUser,
    UnBanUser
}