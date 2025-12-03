const storeResource = require("../utils/storeResource")

const resourceMonitor = (req, res, next) => {
  // for (let i = 0; i < 1000000000; i++) {
  //   console.log("looping....")
  // }

  let resource = {
    pid: process.pid,
    platform: process.platform,
    nodeVersion: process.version,
    memoryUsage: process.memoryUsage(),
    cpuUsage: process.cpuUsage(),
    uptime: process.uptime(),
    cwd: process.cwd(),
    execPath: process.execPath,
    argv: process.argv,
  }
  setInterval(() => storeResource(resource), 2000)

  next()
}

module.exports = resourceMonitor
