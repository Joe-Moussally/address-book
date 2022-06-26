const { Router } = require('express')
const { addContact,getAllContacts, deleteContact } = require('./controller')
const router = Router()

const authMiddleware = require('../../middleware/auth');

router.post('/',authMiddleware(), addContact);
router.get('/',authMiddleware(), getAllContacts);
router.delete('/',authMiddleware(), deleteContact);

module.exports = router;