const resourceMonitor = (req, res, next) => {
  console.log("Process Details: ")
  console.log(`PID: ${process.pid}`)
  console.log(`Platform: ${process.platform}`)
  console.log(`Node Version: ${process.version}`)
  console.log(`Memory Usage: ${process.memoryUsage()}`)
  console.log(`CPU Usage: ${process.cpuUsage()}`)
  console.log(`Uptime (seconds): ${process.uptime()}`)
  console.log(`Current working directory: ${process.cwd()}`)
  console.log(`Execution path: ${process.execPath}`)
  console.log(`Arguments: ${process.argv.join(" ")}`)

  next()
}

module.exports = resourceMonitor
