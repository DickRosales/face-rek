"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camera_1 = __importDefault(require("../lib/camera"));
class Control {
    constructor() {
        this.turnOn = (req, res) => {
            let response = this.camera.turnOn();
            console.log(req.params);
            res.send(response);
        };
        this.turnOff = (req, res) => {
            let response = this.camera.turnOff();
            console.log(req.params);
            res.send(response);
        };
        this.takePicture = (req, res) => {
            let filename = this.camera.getPicture();
            console.log(req.params);
            res.send(filename);
        };
        this.camera = new camera_1.default();
    }
}
exports.default = Control;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvY29udHJvbC9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMkRBQW1DO0FBRW5DLE1BQXFCLE9BQU87SUFHMUI7UUFJTyxXQUFNLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUV2QixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQTtRQUVNLFlBQU8sR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUMvQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFBO1FBRU0sZ0JBQVcsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUNuRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFBO1FBekJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQXlCRjtBQTlCRCwwQkE4QkMifQ==