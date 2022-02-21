import { ResizImage, GetMetadata } from '../routes/api/ResizeProcess';

//test Resize Prosses

describe('Test The Resize Process', () => {
  it('get the width of file = icelandwaterfall after process with Sharp will be 500 ', async () => {
    const result = await ResizImage('icelandwaterfall', 500, 300);
    expect(result).toBe(500);
  });
  it('get the width of file = icelandwaterfall will be 500 ', async () => {
    const result = GetMetadata('icelandwaterfall', 500, 300);
    expect((await result).width).toBe(500);
  });
});
