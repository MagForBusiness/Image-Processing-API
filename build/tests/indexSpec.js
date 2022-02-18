"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
// import supertest from 'supertest';
it('expect myFunc(5) to equal 25', function () {
    expect((0, index_1.default)(5)).toEqual(25);
});
// const request = supertest(app);
// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async (done) => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//         done();
//     }
// )});
