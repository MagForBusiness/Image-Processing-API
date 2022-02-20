"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var displyimage_1 = require("../routes/api/displyimage");
//test Resize Prosses
describe('Test The Resize Process', function () {
    it('get the name of file = icelandwaterfall after process with Sharp will be icelandwaterfall-resize.jpg  ', function () {
        expect((0, displyimage_1.ResizImage)('icelandwaterfall', 500, 300)).toBe('icelandwaterfall-resize.jpg');
    });
});
