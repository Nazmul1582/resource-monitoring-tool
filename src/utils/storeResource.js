const fs = require("fs")
const path = require("path")

const resourcesDir = path.join(__dirname, "../resources.json")

const storeResource = async (resource) => {
  let data = []
  if (fs.existsSync(resourcesDir)) {
    let raw = fs.readFileSync(resourcesDir)
    let existingData = raw ? JSON.parse(raw) : []
    data = existingData
  }
  data.push(resource)
  fs.writeFileSync(resourcesDir, JSON.stringify(data, null, 2))
}

module.exports = storeResource
