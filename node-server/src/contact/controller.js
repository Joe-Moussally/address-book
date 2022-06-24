const User = require('../../models/User')
const Contact = require('../../models/Contact')

const jwt = require('jsonwebtoken')

const { add } = require('./service')

//add contact for a user
async function addContact(req, res) {

    return res.status(200).send({
        body: req.body,
    })
    

}

module.exports = {
    addContact
}