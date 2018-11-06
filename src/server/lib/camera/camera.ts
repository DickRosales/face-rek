import path from 'path'
import shell from "shelljs"
import rpio from "rpio";
import uuidv4 from 'uuid/v4'
rpio.init({mapping: 'gpio'});
rpio.open(17, rpio.INPUT);

import Upload from '../upload'
import Recognition from '../recognition';

const PATHS = {
  root: path.join(__dirname, "../../../../../"),
  images: path.join(__dirname, "../../../../tmp/")
}

class Camera {
  public turnOn = async (socket): Promise<void> => {
    rpio.poll(17, async (pin) => {
      try {
        const filename = await this.getPicture()
        const uploadedImage = await Upload.uploadImage(filename)
        const compareFaces = await Recognition.compareFaces(filename)
        const faceMatch = (compareFaces['FaceMatches'].length && uploadedImage) ? true : false
    
        socket.emitImage({
          url: `https://s3-us-west-2.amazonaws.com/satans-pi/${path.basename(filename)}`,
          faceMatch: faceMatch
        })
      } catch (error) {
        console.log(error)
      }
    }, rpio.POLL_HIGH);
  }

  public turnOff = (): void => {
    rpio.close(17);
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
}

export default new Camera()