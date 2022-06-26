const Contact = require('../../models/Contact')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')
const secret = process.env.TOKEN_SECRET

async function add(body,headers) {
    const {
        name,
        number,
        status,
        email,
        location
    } = body

    const user = jwt.verify(headers.authorization,secret)
    const userId = user._id

    const contact = new Contact({
        name,
        number,
        status,
        email,
        location,
        userId
    })

    return await contact.save()
}

async function getContacts(userId) {
    return Contact.find({userId: userId})
}

async function remove(contactId) {
    return Contact.deleteOne({_id: ObjectId(contactId)})
}
 
module.exports = {
    add,
    getContacts,
    remove
  }