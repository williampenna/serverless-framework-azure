import { expect } from 'chai';
import PhotoBusiness from '../src/business/photo';

describe('Tests suit - Photo Business.', () => {
  const photoBusiness = new PhotoBusiness();

  it.only('SUCESS: Should get blob signed URL successfully.', async () => {
    const url = await photoBusiness.getPhotoUrl();
    console.log('URL ::', url);
    expect(url).to.be.an('string');
  });
});
