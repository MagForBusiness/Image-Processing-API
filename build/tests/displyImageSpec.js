"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResizeProcess_1 = __importDefault(require("../routes/api/ResizeProcess"));
//test Resize Prosses
describe('Test The Resize Process', function () {
    it('get the name of file = icelandwaterfall after process with Sharp will be icelandwaterfall-resize.jpg  ', function () {
        expect((0, ResizeProcess_1.default)('', 500, 300)).toThrowError();
    });
});
