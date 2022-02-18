// import myFunc from '../index';
import app from '../index';
import router from '../routes/index';
import supertest from 'supertest';


// it('expect myFunc(5) to equal 25', () => {
//   expect(myFunc(5)).toEqual(25);
// });
//test EndPoints
const request = supertest(app);
const request2 = supertest(router);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
       
    })
    it('gets the api (image-disply) endpoint', async () => {
      const response2 = await request2.get('/api/image-disply');
      expect(response2.status).toBe(200);
     
  }
)});

