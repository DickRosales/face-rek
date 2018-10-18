import path from 'path';
import fetch from 'node-fetch';
import { uploadImage } from './lib/azure';
// import shell from "shelljs"
const PATHS = {
    root: path.join(__dirname, "../../"),
    images: path.join(__dirname, "../../tmp/")
};
const execute = async () => {
    let file = `${PATHS.images}image.png`, response = await uploadImage('face-rek', file);
    console.log(response);
    // var sasUrl = blobService.getUrl(containerName, blobName, token);
};
if (process.env.NODE_ENV === 'production') {
    execute();
}
const url = 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false';
fetch(url, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQTtBQUN2QixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUE7QUFDOUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUN6Qyw4QkFBOEI7QUFFOUIsTUFBTSxLQUFLLEdBQUc7SUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7Q0FDM0MsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBRXpCLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sV0FBVyxFQUNqQyxRQUFRLEdBQUcsTUFBTSxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRWxELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckIsbUVBQW1FO0FBQ3JFLENBQUMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO0lBQ3pDLE9BQU8sRUFBRSxDQUFBO0NBQ1Y7QUFFRCxNQUFNLEdBQUcsR0FBRyx5R0FBeUcsQ0FBQTtBQUVySCxLQUFLLENBQUMsR0FBRyxFQUFFO0lBQ1AsTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSwwREFBMEQsRUFBQyxDQUFDO0lBQ3ZGLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO0tBQ3pEO0NBQ0YsQ0FBQztLQUNHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVyQyxrQ0FBa0M7QUFDbEMsK0RBQStEO0FBQzdELDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDbkIsSUFBSSJ9