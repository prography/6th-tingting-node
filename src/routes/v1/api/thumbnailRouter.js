const express = require('express')

const {acceptUserThumbnail, rejectUserThumbnail} = require('../../../controllers/thumbNailController')

const router = express.Router()

router.get('/accept/:userId', acceptUserThumbnail )

router.get('/reject/:userId', rejectUserThumbnail )

module.exports = router;