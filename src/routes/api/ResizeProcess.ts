import sharp from 'sharp';
 
 
 
 function ResizImage(filename: string, width: number, height: number) {
    try {
      sharp(`assets/full/${filename}.jpg`)
        .resize(width, height)
        .toFile(`assets/thumb/${filename}-resize.jpg`);
      const newFilename = `${filename}-resize.jpg`;
      console.log(`Image Resize ${filename}-resize.jpg`);
      return newFilename;
    } catch (error) {
      console.log('error');
    }
  }

  export default ResizImage;