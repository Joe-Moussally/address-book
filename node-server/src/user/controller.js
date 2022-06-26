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
        console.log(req.body)

        const salt = await bcrypt.genSalt(5)
        const hashPassword = await bcrypt.hash(req.body.password,salt)

        const addedUser = await createUser(req.body, hashPassword)
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

//funtion to handle login
async function login(req, res) {

    try {
        const user = await getUserByEmail(req.body.email)
        
        //if user doesn't exist
        if(!user) return res.status(400).send('invalid credentials')

        //check for password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('invalid credentials');

        const token = jwt.sign(
            {_id: user._id, name: user.name, email: user.email},
            TOKEN_SECRET
        )

        return res.header('auth-token', token).send(token)

    } catch(err) {

        console.log(err)
        res.status(500).send(error)

    }

}

module.exports = { register, login };