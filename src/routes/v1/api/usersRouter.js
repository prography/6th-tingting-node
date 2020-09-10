const express = require('express')
const verifyToken = require('../../../middlewares/auth')
const { getUserList, getUserByIdName } = require('../../../controllers/userViewController')

const router = express.Router()

// 모든 사용자 가져오기
router.get('/', verifyToken, getUserList)

module.exports = router;