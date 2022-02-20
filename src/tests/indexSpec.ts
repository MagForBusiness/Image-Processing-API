// import myFunc from '../index';
import app from '../index';
import supertest from 'supertest';


//test EndPoints
const request = supertest(app);
describe('Test endpoint Main root responses', () => {
  it('gets the api Main root endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
