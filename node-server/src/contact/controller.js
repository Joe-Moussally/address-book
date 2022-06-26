const User = require('../../models/User')
const Contact = require('../../models/Contact')

const secret = process.env.TOKEN_SECRET
const jwt = require('jsonwebtoken')

const { add,getContacts,remove } = require('./service')

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

//get all user's contacts
async function getAllContacts(req,res) {
    try {
        const user = jwt.verify(req.headers.authorization,secret)
        const userId = user._id
        const contacts = await getContacts(userId)

        return res.status(200).send({
            contacts: contacts
        })
    } catch (err) {
        console.log(err)
    }
}

async function deleteContact(req,res) {
    try {
        const contactId = req.body.id
        const result = await remove(contactId)
        console.log(contactId)

        return res.status(200).send({
            response: result
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addContact,
    getAllContacts,
    deleteContact
}