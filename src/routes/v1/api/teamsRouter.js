//[GET] /api/v1/admin/teams와 관련된 라우터 
const express = require('express')

const {searchTeam , searchTeamById , deleteTeam} = require('../../../controllers/teamController')

const router = express.Router()

router.get('/', searchTeam )


router.post('/:teamId',searchTeamById )

router.post('/delete/:teamId',deleteTeam )

module.exports = router;