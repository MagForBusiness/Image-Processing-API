import express from 'express';
import myFunc from '../index';
import supertest from 'supertest';
const app = express();
it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    }
)});