const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const router = require("./routes/router.js")

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
