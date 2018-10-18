"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import path from 'path'
// import { uploadImage } from '../upload'
const settings_1 = __importDefault(require("../../../config/settings"));
const node_fetch_1 = __importDefault(require("node-fetch"));
// const PATHS = {
//   root: path.join(__dirname, "../../"),
//   images: path.join(__dirname, "../../tmp/")
// }
class Recognition {
    constructor() {
        // constructor() {
        // }
        this.getFaceData = () => {
            return node_fetch_1.default(settings_1.default.API.cognitive_url, {
                method: 'POST',
                body: JSON.stringify({ url: 'https://facerek.blob.core.windows.net/face-rek/image.png' }),
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY
                },
            });
        };
    }
}
exports.default = Recognition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb2duaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2VydmVyL2xpYi9yZWNvZ25pdGlvbi9yZWNvZ25pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBCQUEwQjtBQUMxQiwwQ0FBMEM7QUFDMUMsd0VBQStDO0FBQy9DLDREQUE4QjtBQUU5QixrQkFBa0I7QUFDbEIsMENBQTBDO0FBQzFDLCtDQUErQztBQUMvQyxJQUFJO0FBRUosTUFBcUIsV0FBVztJQUFoQztRQUVFLGtCQUFrQjtRQUNsQixJQUFJO1FBRUcsZ0JBQVcsR0FBRyxHQUFRLEVBQUU7WUFDN0IsT0FBTyxvQkFBSyxDQUFDLGtCQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRTtnQkFDckMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsMERBQTBELEVBQUMsQ0FBQztnQkFDdkYsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtpQkFDdkQ7YUFDSixDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7SUFDSCxDQUFDO0NBQUE7QUFmRCw4QkFlQyJ9