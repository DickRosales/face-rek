import { Request, Response } from 'express';
import Camera from '../lib/camera';

export default class Control {
  public camera: any;

  constructor() {
    this.camera = new Camera();
  }

  public turnOn = (req: Request, res: Response) => {
    let response = this.camera.turnOn()

    console.log(req.params)

    res.send(response)
  } 

  public turnOff = (req: Request, res: Response) => {
    let response = this.camera.turnOff()

    console.log(req.params)

    res.send(response)
  } 

  public takePicture = (req: Request, res: Response) => {
    let filename = this.camera.getPicture()

    console.log(req.params)

    res.send(filename)
  }

  public checkMotion = (req: Request, res: Response) => {
    console.log(req.params)

    res.send(`pin value: ${this.camera.checkMotion()}`)
  }
}
