import app from '../index';
import supertest from 'supertest';

//test EndPoints
const request = supertest(app);
describe('Test endpoint Routers responses', () => {
  it('gets the api (image-disply?filename=icelandwaterfall&width=400&height=1000) endpoint', async () => {
    const response = await request.get('/api/image-disply?filename=icelandwaterfall&width=400&height=1000');
    expect(response.status).toBe(200);
  });
});
