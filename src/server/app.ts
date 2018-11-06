
import express, { Request, Response, NextFunction } from 'express';
import compression from "compression"  // compresses requests
import bodyParser from "body-parser"
import lusca from "lusca"
import dotenv from "dotenv"
import cors from 'cors'
import { createServer } from 'http';
import socketIo from 'socket.io';

// Controllers (route handlers)
import Control from "./control"
import Socket from "./lib/socket"

// Set Env Variables
dotenv.config()

// Create Express server
const app = express()
const server = createServer(app);
const io = socketIo(server);
const socket = new Socket(io)

server.listen(9009);

// Express configuration
app.set("port", process.env.SERVER_PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(expressValidator())
app.use(lusca.xframe("SAMEORIGIN"))
app.use(lusca.xssProtection(true))
app.use((req: Request, res: Response, next: NextFunction) => {
  res.socket = socket
  next()
})
app.options('*', cors()) 

/**
 * API routes.
 */
app.get("/api/takePicture", Control.takePicture )
app.get("/api/turnOn", Control.turnOn )
app.get("/api/turnOff", Control.turnOff )
app.get("/api/checkMotion", Control.checkMotion )
app.get("/api/listImages", Control.listImages )

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
