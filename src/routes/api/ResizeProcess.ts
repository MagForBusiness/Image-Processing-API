import sharp from 'sharp';
 
 
 
async function ResizImage(filename: string, width: number, height: number) {
    try {
      await sharp(`assets/full/${filename}.jpg`)
        .resize(width, height)
        .toFile(`assets/thumb/${filename}-resize.jpg`);
      // const newFilename = `${filename}-resize.jpg`;
      // console.log(`Image Resize ${filename}-resize.jpg`);
      throw (null);
    } catch (error) {
      console.log(error);
    
  }

  export default ResizImage;