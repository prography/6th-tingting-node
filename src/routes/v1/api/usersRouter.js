const express = require('express')
const verifyToken = require('../../../middlewares/auth')
const { getUserList, getUserByIdName } = require('../../../controllers/userViewController')

const router = express.Router()

router.get('/users', verifyToken, getUserList)

router.get('/users/:id', verifyToken, getUserByIdName)

module.exports = router;