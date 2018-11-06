import { Request, Response, NextFunction } from 'express';
import Upload from '../lib/upload'
import Camera from '../lib/camera';
import Recognition from '../lib/recognition';
// import Socket from '../lib/socket';

class Control {

  /* tslint:disable-next-line */
  public turnOn = (req: Request, res: Response) => {
    Camera.turnOn(res.socket)

    res.status(200).json({
      status: 200,
      message: 'Listening for motion',
      error: false,
      errorMessage: ''
    })
  } 

  /* tslint:disable-next-line */
  public turnOff = (req: Request, res: Response) => {
    Camera.turnOff()

    res.status(200).json({
      status: 200,
      message: 'Not listening for motion',
      error: false,
      errorMessage: ''
    })
  } 

  /* tslint:disable-next-line */
  public takePicture = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filename = await Camera.getPicture()
      const uploadedImage = await Upload.uploadImage(filename);
      const compareFaces = await Recognition.compareFaces(filename);

      if(compareFaces['FaceMatches'].length && uploadedImage) {
        res.status(200).json({
          status: 200,
          message: 'Successful Face Match',
          image: filename,
          error: false,
          errorMessage: '',
          faceMatch: true
        })
      } else {
        res.status(403).json({
          status: 403,
          message: 'Unsuccessful Face Match',
          error: false,
          errorMessage: '',
          faceMatch: false
        })
      }
    } catch (error) {
      console.log(error)
      if (error.code === 'InvalidParameterException') {
        res.status(400).json({
          status: 400,
          message: 'No Faces detected in source',
          error: true,
          errorMessage: error.message,
          faceMatch: false
        })
      } else {
        res.status(406).json({
          status: 406,
          message: 'Error Processing the Image',
          error: true,
          errorMessage: error.message,
          faceMatch: false
        })
      }
    }
  }

  /* tslint:disable-next-line */
  public checkMotion = (req: Request, res: Response) => {
    res.send(`pin value: ${Camera.checkMotion()}`)
  }

  /* tslint:disable-next-line */
  public listImages = async (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    
    let response = await Upload.listImages()

    let imageUrls = response['Contents'].map((image) => {
      return `https://s3-us-west-2.amazonaws.com/satans-pi/${image.Key}`
    })

    res.send(imageUrls)
  } 
}

export default new Control()