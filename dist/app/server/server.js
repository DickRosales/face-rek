"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const dotenv_1 = __importDefault(require("dotenv"));
// import path from "path"
// import expressValidator from "express-validator"
// Controllers (route handlers)
const control_1 = __importDefault(require("./control"));
const control = new control_1.default();
// Create Express server
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3000);
dotenv_1.default.config();
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(expressValidator())
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
// app.use(
//   express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// )
/**
 * API routes.
 */
app.get("/api/takePicture", control.takePicture);
app.get("/api/turnOn", control.turnOn);
app.get("/api/turnOff", control.turnOff);
/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxzREFBOEI7QUFDOUIsOERBQXFDLENBQUUsc0JBQXNCO0FBQzdELDhEQUFvQztBQUNwQyxrREFBeUI7QUFDekIsb0RBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQixtREFBbUQ7QUFFbkQsK0JBQStCO0FBQy9CLHdEQUErQjtBQUMvQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUU5Qix3QkFBd0I7QUFDeEIsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFBO0FBRXJCLHdCQUF3QjtBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQTtBQUN6QyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVyxFQUFFLENBQUMsQ0FBQTtBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNsRCw4QkFBOEI7QUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7QUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFFbEMsV0FBVztBQUNYLDRFQUE0RTtBQUM1RSxJQUFJO0FBRUo7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUUsQ0FBQTtBQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUE7QUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBRSxDQUFBO0FBRXpDOztHQUVHO0FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUNULG9EQUFvRCxFQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ2YsQ0FBQTtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUMsQ0FBQSJ9