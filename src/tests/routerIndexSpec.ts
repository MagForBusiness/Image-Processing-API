import router from '../routes/index';
import supertest from 'supertest';



//test EndPoints
const request2 = supertest(router);
describe('Test endpoint responses', () => {
   
    it('gets the api (image-disply) endpoint', async () => {
      const response2 = await request2.get('/api/image-disply');
      expect(response2.status).toBe(200);
     
  }
)});

