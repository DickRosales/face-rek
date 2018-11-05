import AWS from 'aws-sdk'
import path from 'path'
import fs from 'fs'

// Create an AWS client
AWS.config.update({
  region: 'us-west-2'
});
const s3 = new AWS.S3();

class Upload {
  public uploadImage = (filePath: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      const imagePath = path.resolve(filePath),
            imageName = path.basename(filePath);

      fs.readFile(imagePath, (error, image) => {
        if (error) { 
          reject(error)
        } else {
          s3.putObject({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: imageName,
            Body: image,
            ContentType: 'image/png',
            ACL: 'public-read'
          },
          (error, data) => {
            if (error) {
              console.log('failed to upload object in s3 \n')
              reject(error)
            } else {
              console.log('successful to upload object in s3 \n')
              resolve(data)
            }
          });
        }
      });
    });
  };

  public listImages = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      s3.listObjects({
        Bucket: process.env.AWS_S3_BUCKET,
      },
      (error, data) => {
        if (error) {
          console.log('failed to retrieve objects in s3 \n')
          reject(error)
        } else {
          console.log('successfully retrieved objects in s3 \n')
          resolve(data)
        }
      });
    });
  }
}

export default new Upload()