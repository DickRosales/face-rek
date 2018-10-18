"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// import { uploadImage } from '../upload'
const shelljs_1 = __importDefault(require("shelljs"));
const onoff_1 = require("onoff");
const PATHS = {
    root: path_1.default.join(__dirname, "../../"),
    images: path_1.default.join(__dirname, "../../tmp/")
};
class Camera {
    constructor() {
        this.turnOn = () => {
            this.setWatcher();
            return 'turnOn';
        };
        this.turnOff = () => {
            this.unSetWatcher();
            return 'turnOff';
        };
        this.getPicture = () => {
            let filename = this.takePicture();
            return filename;
        };
        this.takePicture = () => {
            let filename = `${PATHS.images}${new Date().toISOString()}.png`;
            shelljs_1.default.exec(`raspistill -vf -hf -o ${filename}`);
            return filename;
        };
        this.setWatcher = () => {
            this.motionSensor.watch((err, value) => {
                if (err) {
                    throw err;
                }
                console.log('motion: ', value);
                let filename = this.takePicture();
                shelljs_1.default.echo(`image taken: ${filename}`);
            });
        };
        this.unSetWatcher = () => {
            this.motionSensor.unwatch((err, value) => {
                if (err) {
                    throw err;
                }
                console.log('turned off: ', value);
            });
        };
        this.motionSensor = new onoff_1.Gpio(17, 'in');
    }
}
exports.default = Camera;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NlcnZlci9saWIvY2FtZXJhL2NhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsc0RBQTJCO0FBQzNCLGlDQUE0QjtBQUU1QixNQUFNLEtBQUssR0FBRztJQUNaLElBQUksRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDcEMsTUFBTSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztDQUMzQyxDQUFBO0FBRUQsTUFBcUIsTUFBTTtJQUd6QjtRQUlPLFdBQU0sR0FBRyxHQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBRWpCLE9BQU8sUUFBUSxDQUFBO1FBQ2pCLENBQUMsQ0FBQTtRQUVNLFlBQU8sR0FBRyxHQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBRW5CLE9BQU8sU0FBUyxDQUFBO1FBQ2xCLENBQUMsQ0FBQTtRQUVNLGVBQVUsR0FBRyxHQUFXLEVBQUU7WUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBRWpDLE9BQU8sUUFBUSxDQUFBO1FBQ2pCLENBQUMsQ0FBQTtRQUVPLGdCQUFXLEdBQUcsR0FBVyxFQUFFO1lBQ2pDLElBQUksUUFBUSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUE7WUFFL0QsaUJBQUssQ0FBQyxJQUFJLENBQUMseUJBQXlCLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFaEQsT0FBTyxRQUFRLENBQUE7UUFDakIsQ0FBQyxDQUFBO1FBRU8sZUFBVSxHQUFHLEdBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsTUFBTSxHQUFHLENBQUE7aUJBQ1Y7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFbEMsaUJBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFFTyxpQkFBWSxHQUFHLEdBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsTUFBTSxHQUFHLENBQUE7aUJBQ1Y7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDcEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFsREMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDeEMsQ0FBQztDQWtERjtBQXZERCx5QkF1REMifQ==