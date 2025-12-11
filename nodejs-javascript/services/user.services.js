const User = require("../models/User");


const getAllUsersService = () => User.find({})

const getSingleUserService = () => { }

const createNewUserService = () => { }

const updateUserService = () => { }

const deleteUserService = () => { }

const banUserService = () => { }

const UnBanUserService = () => { }


module.exports = {
    getAllUsersService,
    getSingleUserService,
    createNewUserService,
    updateUserService,
    deleteUserService,
    banUserService,
    UnBanUserService
}