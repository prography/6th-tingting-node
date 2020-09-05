const express = require('express');
const usersRouter = require("./api/usersRouter");

const router = express.Router();

router.use("/admin", usersRouter);

module.exports = router;