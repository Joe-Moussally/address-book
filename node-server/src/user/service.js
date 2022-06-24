const User = require('../../models/User')

//function to create an account
async function createUser(body, hashedPassword) {
    const {
        name,
        email,
    } = body

    //create the user
    const user = new User({
        name,
        email,
        password: hashedPassword})
    return await user.save();
}

//search users by email (used on login and signup)
async function getUserByEmail(email) {
    return await User.findOne({email})
}

module.exports = {createUser, getUserByEmail}