const express = require('express');

const usersRouter = require("./api/usersRouter");
const loginRouter = require("./api/loginRouter")
const thumbnailRotuer = require("./api/thumbnailRouter")
const teamsRouter = require("./api/teamsRouter")

const router = express.Router();

router.use("/user", usersRouter);
router.use("/login", loginRouter); 
router.use("/thumbnails", thumbnailRotuer); 
router.use("/teams", teamsRouter)
module.exports = router;