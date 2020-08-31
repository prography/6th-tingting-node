const express = require('express');
const api = require('./v1/api/index');
const router = express.Router();

router.use('/api', api);

module.exports = router;