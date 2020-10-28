//: [GET] /api/v1/admin/thumbnails와 관련된 router 
const express = require('express');
const router = express.Router();
const verifyToken = require('../../../middlewares/auth')
const getProfileSubjectInfo = require('../../../controllers/profileController')

// 프로필 심사가 필요한 사용자 정보 가져오기
router.get('/', verifyToken, getProfileSubjectInfo)

module.exports = router;