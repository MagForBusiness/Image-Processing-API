import router from '../routes/index';
import supertest from 'supertest';



//test EndPoints
const request = supertest(router);
describe('Test endpoint responses', () => {
   
    it('gets the api (image-disply) endpoint', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
     
  }
)});

