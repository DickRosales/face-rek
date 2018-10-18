"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const azure_1 = require("./lib/azure");
// import shell from "shelljs"
const PATHS = {
    root: path_1.default.join(__dirname, "../../"),
    images: path_1.default.join(__dirname, "../../tmp/")
};
const execute = async () => {
    let file = `${PATHS.images}image.png`, response = await azure_1.uploadImage('face-rek', file);
    console.log(response);
    // var sasUrl = blobService.getUrl(containerName, blobName, token);
};
if (process.env.NODE_ENV === 'production') {
    execute();
}
const url = 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false';
node_fetch_1.default(url, {
    method: 'POST',
    body: JSON.stringify({ url: 'https://facerek.blob.core.windows.net/face-rek/image.png' }),
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY
    },
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
// Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
// shell.echo('shit fam');
// shell.exit(1);
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXVCO0FBQ3ZCLDREQUE4QjtBQUM5Qix1Q0FBeUM7QUFDekMsOEJBQThCO0FBRTlCLE1BQU0sS0FBSyxHQUFHO0lBQ1osSUFBSSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUNwQyxNQUFNLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO0NBQzNDLENBQUE7QUFFRCxNQUFNLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRTtJQUV6QixJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLFdBQVcsRUFDakMsUUFBUSxHQUFHLE1BQU0sbUJBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyQixtRUFBbUU7QUFDckUsQ0FBQyxDQUFBO0FBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7SUFDekMsT0FBTyxFQUFFLENBQUE7Q0FDVjtBQUVELE1BQU0sR0FBRyxHQUFHLHlHQUF5RyxDQUFBO0FBRXJILG9CQUFLLENBQUMsR0FBRyxFQUFFO0lBQ1AsTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSwwREFBMEQsRUFBQyxDQUFDO0lBQ3ZGLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO0tBQ3pEO0NBQ0YsQ0FBQztLQUNHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVyQyxrQ0FBa0M7QUFDbEMsK0RBQStEO0FBQzdELDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDbkIsSUFBSSJ9