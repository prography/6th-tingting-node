const express = require('express');
const pictureRouter = require("./api/pictureRouter");

const router = express.Router();

router.use("/picture", pictureRouter);

module.exports = router;