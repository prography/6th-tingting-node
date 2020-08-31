const express = require('express');
const thumbnailRouter = require("./admin/thumbnailRouter");
const loginRouter = require("./amdin/loginRouter")
const teamsRouter = require("./amdin/teamsRouter")
const usersRouter =  require("./amdin/usersRouter")

const router = express.Router();

router.use("/login", loginRouter); 
router.use("/thumbnails", thumbnailRouter);
router.use("/teams", teamsRouter);
router.use("/user",usersRouter);

module.exports = router;
