
import express from 'express';
import compression from "compression"  // compresses requests
import bodyParser from "body-parser"
import lusca from "lusca"
import dotenv from "dotenv"
// import path from "path"
// import expressValidator from "express-validator"

// Controllers (route handlers)
import Control from "./control"
const control = new Control();

// Create Express server
const app = express()

// Express configuration
app.set("port", process.env.PORT || 3000)
dotenv.config()
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(expressValidator())
app.use(lusca.xframe("SAMEORIGIN"))
app.use(lusca.xssProtection(true))

// app.use(
//   express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// )

/**
 * API routes.
 */
app.get("/api/takePicture", control.takePicture )
app.get("/api/turnOn", control.turnOn )
app.get("/api/turnOff", control.turnOff )
app.get("/api/checkMotion", control.checkMotion )

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  )
  console.log("  Press CTRL-C to stop\n")
})
