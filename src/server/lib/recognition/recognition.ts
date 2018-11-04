import AWS from 'aws-sdk'
import path from 'path'

// Create an AWS client
AWS.config.update({
  region: 'us-west-2'
});
const rekognition = new AWS.Rekognition();
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
        if (error && error.code === 'InvalidParameterException') {
          console.log('No Faces detected in source')
          reject(error);
        } else if (error) {
          console.log('Faces detection failed')
          reject(error);
        } else {
          console.log('Faces detection success')
          resolve(data)
        }
      });
    });
  }
}

export default new Recognition()