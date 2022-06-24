const Contact = require('../../models/Contact')
const jwt = require('jsonwebtoken')
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

module.exports = {
    add
  }