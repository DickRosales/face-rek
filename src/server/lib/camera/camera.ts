import path from 'path'
import shell from "shelljs"
import rpio from "rpio";
import uuidv4 from 'uuid/v4'
rpio.init({mapping: 'gpio'});
rpio.open(17, rpio.INPUT);

const PATHS = {
  root: path.join(__dirname, "../../../../../"),
  images: path.join(__dirname, "../../../../tmp/")
}

class Camera {
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
    let filename = `${PATHS.images}${uuidv4()}.png`

    shell.exec(`raspistill -vf -hf -n -o ${filename} -t 1`); 
    console.log('successfully took image \n')

    return filename
  }

  public checkMotion = (): string => {
    console.log('motion: ', this.getValue())

    return this.getValue()
  }

  // private deletePicture = (): string => {
    // fs.unlink('./' + name, function(error) {
    //     if (error) {
    //         reject();
    //         console.log('error deleting object');
    //     } else {
    //         resolve();
    //         console.log('object deleted from disk');
    //     }
    // });
  // }

  private getValue = (): any => {
    return rpio.read(17);
  }

  private setWatcher = (): void => {
    rpio.poll(17, (pin) => {
      console.log('motion: ', pin);

      // let filename = this.takePicture();
      // shell.echo(`image taken: ${filename}`);

      // uploadImage(filename).then((res) => {
    
      //   return res
      // }).then((res) => {
    
      //   return res
      // })

    }, rpio.POLL_HIGH);
  }

  private unSetWatcher = (): void => {
    rpio.close(17);
  }
}

export default new Camera()