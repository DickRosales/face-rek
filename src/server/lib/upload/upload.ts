// Azure Utils
import { createBlobService } from 'azure-storage' 
import path from 'path'

const blobService = createBlobService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_KEY);

export async function listContainers () {
    return new Promise((resolve, reject) => {
        blobService.listContainersSegmented(null, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `${data.entries.length} containers`, containers: data.entries });
            }
        });
    });
};

export async function uploadImage (containerName: string, filePath: string) {
    return new Promise((resolve, reject) => {
            const fullPath = path.resolve(filePath);
        const blobName = path.basename(filePath);
        blobService.createBlockBlobFromLocalFile(containerName, blobName, fullPath, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Local file "${filePath}" is uploaded` });
            }
        });
    });
};

export async function deleteImage (containerName: string, fileName: string) {
    return new Promise((resolve, reject) => {
        blobService.deleteBlobIfExists(containerName, fileName, err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Block blob '${fileName}' deleted` });
            }
        });
    });
};

export async function getUrl (containerName, fileName) {
    return blobService.getUrl(containerName, fileName);
};
