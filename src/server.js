const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const router = require("./routes/router.js")
const resourceMonitor = require("./middleware/resourceMonitor.js")

app.use("/api", resourceMonitor, router)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
