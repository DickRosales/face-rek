// import path from 'path'
// import { uploadImage } from '../upload'
import Settings from '../../../config/settings'
import fetch from 'node-fetch'

// const PATHS = {
//   root: path.join(__dirname, "../../"),
//   images: path.join(__dirname, "../../tmp/")
// }

export default class Recognition {

  // constructor() {
  // }

  public getFaceData = (): any => {
    return fetch(Settings.API.cognitive_url, { 
        method: 'POST',
        body: JSON.stringify({url: 'https://facerek.blob.core.windows.net/face-rek/image.png'}),
        headers: { 
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY
        },
    })
  }
}
