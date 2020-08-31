//: [GET] /api/v1/admin/thumbnails와 관련된 router 
const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.json('hi')
})

module.exports = router;