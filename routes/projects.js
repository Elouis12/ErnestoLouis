const express = require("express");
const router = express.Router();
const { getProjects } = require("../controller/project")





router.get("/", getProjects );





module.exports = router;