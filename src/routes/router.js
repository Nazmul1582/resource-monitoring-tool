const express = require("express")
const router = express.Router()
const getResource = require("../consollers/resource")

router.get("/getmonitor", getResource)

module.exports = router
