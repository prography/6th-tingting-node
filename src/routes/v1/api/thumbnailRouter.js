const express = require('express')

const {acceptUserThumbnail, rejectUserThumbnail, profileReivewTarget} = require('../../../controllers/thumbNailController')

const router = express.Router()

router.get('/accept/:userId', acceptUserThumbnail )

router.get('/reject/:userId', rejectUserThumbnail )

router.get('/', profileReivewTarget )

module.exports = router;