const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const TOKEN_SECRET = process.env.TOKEN_SECRET || ""

const { createUser, getUserByEmail } = require('./service')

async function register(req, res) {

    try {
        console.log(req.body)
        const email = req.body.email

        //check if email  already exists
        const oldUser = await User.findOne({email})
        if(oldUser) {
            return res.status(409).send('email already exists')
        }

        const salt = await bcrypt.genSalt(5)
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        const addedUser = await createUser(req.body)
        console.log('result => ',addedUser)

        //create token
        const token = jwt.sign(
            {user_id: addedUser._id,email},
            TOKEN_SECRET,
            {
                expiresIn: '1h'
            }
        )

        return res.send({
            user:addedUser._id,
            token:token 
        })

    } catch(err) {
        console.log(err)
    }

}

module.exports = { register };