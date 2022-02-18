// import myFunc from '../index';
import app from '../index';
import router from '../routes/index';
import supertest from 'supertest';


// it('expect myFunc(5) to equal 25', () => {
//   expect(myFunc(5)).toEqual(25);
// });
//test EndPoints
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
       
    }
)});
const request2 = supertest(router);
xdescribe('Test endpoint router responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request2.get('/api');
        expect(response.status).toBe(200);
        done();
    }
)});