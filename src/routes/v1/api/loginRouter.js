const express = require('express')

const {loginByLocal} = require('../../../controllers/authController')

const router = express.Router()


router.post('/', loginByLocal )

module.exports = router;

