import { Request, Response, NextFunction } from 'express';
import { uploadImage } from '../lib/upload'
import Camera from '../lib/camera';
import Recognition from '../lib/recognition';
class Control {

  /* tslint:disable-next-line */
  public turnOn = (req: Request, res: Response) => {
    let response = Camera.turnOn()

    res.send(response)
  } 

  /* tslint:disable-next-line */
  public turnOff = (req: Request, res: Response) => {
    let response = Camera.turnOff()

    res.send(response)
  } 

  /* tslint:disable-next-line */
  public takePicture = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const filename = await Camera.getPicture()
      const uploadedImage = await uploadImage(filename);
      const compareFaces = await Recognition.compareFaces(filename);

      if(compareFaces['FaceMatches'].length && uploadedImage) {
        res.status(200).json({
          status: 200,
          message: 'Successful Face Match',
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
}

export default new Control()