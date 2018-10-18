// Azure Utils
import { createBlobService } from 'azure-storage';
import path from 'path';
const blobService = createBlobService(process.env.AZURE_STORAGE_ACCOUNT, process.env.AZURE_STORAGE_KEY);
export async function listContainers() {
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
;
export async function uploadImage(containerName, filePath) {
    return new Promise((resolve, reject) => {
        const fullPath = path.resolve(filePath);
        const blobName = path.basename(filePath);
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
;
export async function deleteImage(containerName, fileName) {
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
;
export async function getUrl(containerName, fileName) {
    return blobService.getUrl(containerName, fileName);
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXp1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmVyL2xpYi9henVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ2pELE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQTtBQUV2QixNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUV4RyxNQUFNLENBQUMsS0FBSyxVQUFVLGNBQWM7SUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNuQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3BELElBQUksR0FBRyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFBQSxDQUFDO0FBR0YsTUFBTSxDQUFDLEtBQUssVUFBVSxXQUFXLENBQUUsYUFBcUIsRUFBRSxRQUFnQjtJQUN0RSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxXQUFXLENBQUMsNEJBQTRCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDOUUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsUUFBUSxlQUFlLEVBQUUsQ0FBQyxDQUFDO2FBQ2hFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFDLEtBQUssVUFBVSxXQUFXLENBQUUsYUFBcUIsRUFBRSxRQUFnQjtJQUN0RSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ25DLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzFELElBQUksR0FBRyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLFFBQVEsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQUEsQ0FBQztBQUVGLE1BQU0sQ0FBQyxLQUFLLFVBQVUsTUFBTSxDQUFFLGFBQWEsRUFBRSxRQUFRO0lBQ2pELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUFBLENBQUMifQ==