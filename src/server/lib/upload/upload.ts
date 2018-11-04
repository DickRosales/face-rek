import AWS from 'aws-sdk'
import path from 'path'
import fs from 'fs'

// Create an AWS client
AWS.config.update({
  region: 'us-west-2'
});
const s3 = new AWS.S3();

export function uploadImage(filePath: string): Promise<Object> {
  return new Promise((resolve, reject) => {
    const imagePath = path.resolve(filePath),
          imageName = path.basename(filePath);

    // const imagePath = '/Users/rrosales/Sites/face-rek/tmp/image.png',
    //       imageName = path.basename(filePath)

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
            console.log('failed to upload object in s3 \n', error.message)
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

export async function deleteImage(containerName: string, fileName: string) {
  // return new Promise((resolve, reject) => {
  //     blobService.deleteBlobIfExists(containerName, fileName, err => {
  //         if (err) {
  //             reject(err);
  //         } else {
  //             resolve({ message: `Block blob '${fileName}' deleted` });
  //         }
  //     });
  // });
};

export async function getUrl(containerName, fileName) {
  // return blobService.getUrl(containerName, fileName);
};

export default {
  uploadImage,
  deleteImage,
  getUrl
}