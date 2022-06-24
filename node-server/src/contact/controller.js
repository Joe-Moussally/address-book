const User = require('../../models/User')
const Contact = require('../../models/Contact')

const jwt = require('jsonwebtoken')

const { add } = require('./service')

//add contact for a user
async function addContact(req, res) {

    try {
        const result = await add(req.body)
        console.log(result)
        return res.status(200).send({
            result: result
        })
    } catch (err) {
        console.log('error')
    }
    

}

module.exports = {
    addContact
}