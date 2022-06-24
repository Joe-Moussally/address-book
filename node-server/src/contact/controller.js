const User = require('../../models/User')
const Contact = require('../../models/Contact')

const jwt = require('jsonwebtoken')

const { add } = require('./service')

//add contact for a user
async function addContact(req, res) {

    try {
        const headers = req.headers

        const result = await add(req.body,headers)
        console.log(req.headers)
        return res.status(200).send({
            result: result
        })
    } catch (err) {
        console.log(err)
    }
    

}

module.exports = {
    addContact
}