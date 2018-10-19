import path from 'path'
// import { uploadImage } from '../upload'
import shell from "shelljs"
import { Gpio } from 'onoff'

const PATHS = {
  root: path.join(__dirname, "../../../../../../"),
  images: path.join(__dirname, "../../../../../../tmp/")
}

export default class Camera {
  private motionSensor: any

  constructor() {
    this.motionSensor = new Gpio(17, 'in')
  }

  public turnOn = (): string => {
    this.setWatcher()

    return 'turnOn'
  }

  public turnOff = (): string => {
    this.unSetWatcher()

    return 'turnOff'
  }

  public getPicture = (): string => {
    let filename = this.takePicture()

    return filename
  }

  private takePicture = (): string => {
    let filename = `${PATHS.images}${new Date().toISOString()}.png`

    shell.exec(`raspistill -vf -hf -o ${filename}`);

    return filename
  }

  private setWatcher = (): void => {
    this.motionSensor.watch((err, value) => {
      if (err) {
        throw err
      }

      console.log('motion: ', value)
      let filename = this.takePicture();

      shell.echo(`image taken: ${filename}`);
    })
  }

  private unSetWatcher = (): void => {
    this.motionSensor.unwatch((err, value) => {
      if (err) {
        throw err
      }

      console.log('turned off: ', value)
    })
  }
}
