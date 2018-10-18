// import fetch from 'node-fetch'
// import Settings from '../../config/settings'
import Camera from '../lib/camera';
export default class Control {
    constructor() {
        // private getData = () => {
        // return fetch(Settings.API.cognitive_url, { 
        //     method: 'POST',
        //     body: JSON.stringify({url: 'https://facerek.blob.core.windows.net/face-rek/image.png'}),
        //     headers: { 
        //       'Content-Type': 'application/json',
        //       'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY
        //     },
        // })
        //   return 'shit'
        // }
        this.takeImage = (req, res) => {
            let filename = this.camera.takePicture();
            console.log(req.params, filename);
            res.send('random');
        };
        this.camera = new Camera();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2ZXIvY29udHJvbC9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGlDQUFpQztBQUNqQywrQ0FBK0M7QUFDL0MsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLE9BQU8sT0FBTztJQUcxQjtRQUlBLDRCQUE0QjtRQUMxQiw4Q0FBOEM7UUFDOUMsc0JBQXNCO1FBQ3RCLCtGQUErRjtRQUMvRixrQkFBa0I7UUFDbEIsNENBQTRDO1FBQzVDLCtEQUErRDtRQUMvRCxTQUFTO1FBQ1QsS0FBSztRQUNQLGtCQUFrQjtRQUNsQixJQUFJO1FBRUcsY0FBUyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQ2pELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7WUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBRWpDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFBO1FBckJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBcUJGIn0=