const express = require("express")
const router = express.Router()

router.get("/getmonitor", (req, res) => {
  res.status(200).send("Welcome to our Resource Monitoring Tool!")
})

module.exports = router
