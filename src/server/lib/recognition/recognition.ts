import AWS from 'aws-sdk'
import path from 'path'

// Create an AWS client
AWS.config.update({
  region: 'us-west-2'
});
const rekognition = new AWS.Rekognition();

// const PATHS = {
//   root: path.join(__dirname, "../../"),
//   images: path.join(__dirname, "../../tmp/")
// }

class Recognition {
  public compareFaces = (filePath: string): Promise<Object> => {
    var params = {
      SourceImage: {
        S3Object: {
          Bucket: process.env.AWS_S3_BUCKET,
          Name: path.basename(filePath)
        }
      },
      TargetImage: {
        S3Object: {
          Bucket: process.env.AWS_S3_BUCKET,
          Name: "rich_image.png"
        }
      },
      SimilarityThreshold: 90
    };

    console.log('Comparing faces started');

    return new Promise((resolve, reject) => {
      rekognition.compareFaces(params, (error, data) => {
        if (error) {
          console.log('Faces detection failed', error)
          reject();
        } else {
          console.log('Faces detection success')
          resolve(data)
        }
      });
    });
  }
}

export default new Recognition()