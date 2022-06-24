const { Router } = require('express')
const { addContact } = require('./controller')
const router = Router()

const authMiddleware = require('../../middleware/auth');

router.post('/',authMiddleware(), addContact);

module.exports = router;