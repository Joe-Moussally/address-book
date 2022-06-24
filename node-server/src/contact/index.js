const { Router } = require('express')
const { addContact,getAllContacts } = require('./controller')
const router = Router()

const authMiddleware = require('../../middleware/auth');

router.post('/',authMiddleware(), addContact);
router.get('/',authMiddleware(), getAllContacts);

module.exports = router;