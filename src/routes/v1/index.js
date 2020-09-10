const express = require('express');

const usersRouter = require("./api/usersRouter");
const loginRouter = require("./api/loginRouter")
const thumbnailRotuer = require("./api/thumbnailRouter")
const router = express.Router();

router.use("/users", usersRouter);
router.use("/login", loginRouter); 
router.use("/thumbnails", thumbnailRotuer); 

module.exports = router;