"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Azure Utils
const azure_storage_1 = require("azure-storage");
const path_1 = __importDefault(require("path"));
const blobService = azure_storage_1.createBlobService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_KEY);
async function listContainers() {
    return new Promise((resolve, reject) => {
        blobService.listContainersSegmented(null, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ message: `${data.entries.length} containers`, containers: data.entries });
            }
        });
    });
}
exports.listContainers = listContainers;
;
async function uploadImage(containerName, filePath) {
    return new Promise((resolve, reject) => {
        const fullPath = path_1.default.resolve(filePath);
        const blobName = path_1.default.basename(filePath);
        blobService.createBlockBlobFromLocalFile(containerName, blobName, fullPath, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ message: `Local file "${filePath}" is uploaded` });
            }
        });
    });
}
exports.uploadImage = uploadImage;
;
async function deleteImage(containerName, fileName) {
    return new Promise((resolve, reject) => {
        blobService.deleteBlobIfExists(containerName, fileName, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ message: `Block blob '${fileName}' deleted` });
            }
        });
    });
}
exports.deleteImage = deleteImage;
;
async function getUrl(containerName, fileName) {
    return blobService.getUrl(containerName, fileName);
}
exports.getUrl = getUrl;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NlcnZlci9saWIvdXBsb2FkL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGNBQWM7QUFDZCxpREFBaUQ7QUFDakQsZ0RBQXVCO0FBRXZCLE1BQU0sV0FBVyxHQUFHLGlDQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRWpHLEtBQUssVUFBVSxjQUFjO0lBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDbkMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNwRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN2RjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsd0NBVUM7QUFBQSxDQUFDO0FBRUssS0FBSyxVQUFVLFdBQVcsQ0FBRSxhQUFxQixFQUFFLFFBQWdCO0lBQ3RFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDL0IsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM5RSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxRQUFRLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDaEU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVpELGtDQVlDO0FBQUEsQ0FBQztBQUVLLEtBQUssVUFBVSxXQUFXLENBQUUsYUFBcUIsRUFBRSxRQUFnQjtJQUN0RSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ25DLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzFELElBQUksR0FBRyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLFFBQVEsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBVkQsa0NBVUM7QUFBQSxDQUFDO0FBRUssS0FBSyxVQUFVLE1BQU0sQ0FBRSxhQUFhLEVBQUUsUUFBUTtJQUNqRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFGRCx3QkFFQztBQUFBLENBQUMifQ==