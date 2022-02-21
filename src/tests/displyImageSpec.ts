import  ResizImage from '../routes/api/ResizeProcess';


//test Resize Prosses

describe('Test The Resize Process', () => {
  it('get the name of file = icelandwaterfall after process with Sharp will be icelandwaterfall-resize.jpg  ', () => {
    expect(ResizImage('', 500, 300)).toThrowError('Input file is missing')
    
  });
});
