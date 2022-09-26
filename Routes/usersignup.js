const express = require('express')
const router = express.Router()

const SignUpController = require('../Controller/SignUpController')

router.get('/', SignUpController.index )
router.post('/show', SignUpController.show)
router.post('/store', SignUpController.store)
router.put('/update', SignUpController.update)
router.post('/delete', SignUpController.deleteUser)

module.exports = router