const express = require('express')
const verifyToken = require('../../../middlewares/auth')
const { getUserList, getUserByIdName } = require('../../../controllers/userViewController')

const router = express.Router()

router.get('/', verifyToken, getUserList)


router.get('/:userId', verifyToken, getUserByIdName)

module.exports = router;