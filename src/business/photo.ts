import { getSecretValue } from '../services/azure/keyVault';
import { getBlobSignedUrl } from '../services/azure/blob';

class PhotoBusiness {
    constructor() {
    }

    async getPhotoUrl() {
        const containerSecret = await getSecretValue(
            'https://test-event-hub-secrets.vault.azure.net/', 'testeh-dev-sc-key'
        );
        console.log('Container Secret ::', containerSecret);
        const accountName = 'testehsayccg';
        const containerName = 'testeh-dev-sc';
        const blobName = 'tiagoSorrindo.jpeg';
        const signedPhotoUrl = await getBlobSignedUrl(accountName, containerSecret, containerName, blobName);
        return signedPhotoUrl;
    }
}

export default PhotoBusiness;
