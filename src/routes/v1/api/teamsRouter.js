//[GET] /api/v1/admin/teams와 관련된 라우터 
const express = require('express')

const {searchTeam} = require('../../../controllers/teamController')

const router = express.Router()

router.get('/', searchTeam )

module.exports = router;