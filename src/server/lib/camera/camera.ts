import path from 'path'
// import { uploadImage } from '../upload'
import shell from "shelljs"
// import { Gpio } from 'onoff'
import rpio from "rpio";
rpio.init({mapping: 'gpio'});
rpio.open(17, rpio.INPUT);

const PATHS = {
  root: path.join(__dirname, "../../../../../"),
  images: path.join(__dirname, "../../../../../tmp/")
}

export default class Camera {
  public turnOn = (): string => {
    this.setWatcher()

    console.log('motion: ', this.getValue())

    return 'turnOn'
  }

  public turnOff = (): string => {
    this.unSetWatcher()

    return 'turnOff'
  }

  public getPicture = (): string => {
    let filename = this.takePicture()

    console.log('motion: ', this.getValue())

    return filename
  }

  public checkMotion = (): string => {
    console.log('motion: ', this.getValue())

    return this.getValue()
  }

  private takePicture = (): string => {
    let filename = `${PATHS.images}${new Date().toISOString()}.png`

    shell.exec(`raspistill -vf -hf -o ${filename}`);

    return filename
  }

  private getValue = (): any => {
    return rpio.read(17);
  }

  private setWatcher = (): void => {
    rpio.poll(17, (pin) => {
      console.log('motion: ', pin);

      let filename = this.takePicture();

      shell.echo(`image taken: ${filename}`);

    }, rpio.POLL_HIGH);
  }

  private unSetWatcher = (): void => {
    rpio.close(17);
  }
}
