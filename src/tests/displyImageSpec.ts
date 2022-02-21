import  ResizImage from '../routes/api/ResizeProcess';

//test Resize Prosses

describe('Test The Resize Process', () => {
  it('get the name of file = icelandwaterfall after process with Sharp will be icelandwaterfall-resize.jpg  ', () => {
    expect(ResizImage('icelandwaterfall', 500, 300)).toBe(
      'icelandwaterfall-resize.jpg'
    );
  });
});