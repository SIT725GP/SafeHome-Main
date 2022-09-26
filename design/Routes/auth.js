const express = require('express')
const router = express.Router()

const AuthController = require('../Controller/AuthController')
const authenticator = require('../Middleware/authenticate')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/', authenticator, AuthController.index)
router.put('/update', AuthController.update)

module.exports = router