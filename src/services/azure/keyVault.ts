import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';

export const getSecretValue = async (keyVaultUri: string, secretName: string): Promise<string> => {
  const credential = new DefaultAzureCredential();
  const client = new SecretClient(keyVaultUri, credential);
  const secret = await client.getSecret(secretName);
  return secret.value;
}