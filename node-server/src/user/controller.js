const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { createUser, getUserByEmail } = require('./service')

async function register(req, res) {

    try {
        console.log(req.body)

        const salt = await bcrypt.genSalt(5)
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        const addedUser = await createUser(req.body)
        console.log('result => ',addedUser)

        return res.send({user:addedUser._id})

    } catch(err) {
        console.log(err)
    }

}

module.exports = { register };