import sharp from 'sharp';
 
 
 
async function ResizImage(filename: string, width: number, height: number) {
    try {
      await sharp(`assets/full/${filename}.jpg`)
        .resize(width, height)
        .toFile(`assets/thumb/${filename}-resize.jpg`);
      // const newFilename = `${filename}-resize.jpg`;
      // console.log(`Image Resize ${filename}-resize.jpg`);
     
    } catch (error) {
      console.log(error);
      throw (error);
    }
  }

  export default ResizImage;