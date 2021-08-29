import {
    BlobServiceClient, StorageSharedKeyCredential, generateBlobSASQueryParameters, BlobSASPermissions
} from '@azure/storage-blob';

export const getBlobSignedUrl = async (
    accountName: string, accountKey: string, containerName: string, blobName: string
): Promise<string> => {
    const cerds = new StorageSharedKeyCredential(accountName, accountKey);
    console.log('Cerds ::', cerds);
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`,cerds);
    console.log('blobServiceClient ::', blobServiceClient);
    const client =blobServiceClient.getContainerClient(containerName);
    console.log('client ::', client);
    const blobClient = client.getBlobClient(blobName);
    console.log('blobClient ::', blobClient);
    const blobSAS = generateBlobSASQueryParameters({
            containerName, 
            blobName, 
            permissions: BlobSASPermissions.parse("racwd"), 
            startsOn: new Date(),
            expiresOn: new Date(new Date().valueOf() + 86400)
        },
        cerds 
    ).toString();
    console.log('blobSAS ::', blobSAS);
    const sasUrl= blobClient.url+"?"+blobSAS;
    console.log(`SAS URL :: ${sasUrl}`);
    return sasUrl;
}
