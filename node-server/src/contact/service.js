const Contact = require('../../models/Contact')

async function add(body) {
    const {
        name,
        number,
        status,
        email,
        location
    } = body

    const contact = new Contact({
        name,
        number,
        status,
        email,
        location
    })

    return await contact.save()
}

module.exports = {
    add
  }