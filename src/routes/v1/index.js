const express = require('express');

const usersRouter = require("./api/usersRouter");
const loginRouter = require("./api/loginRouter")

const router = express.Router();

router.use("/users", usersRouter);
router.use("/login", loginRouter); 


module.exports = router;