import sharp from 'sharp';

async function ResizImage(filename: string, width: number, height: number) {
  try {
    await sharp(`assets/full/${filename}.jpg`)
      .resize(width, height)
      .toFile(`assets/thumb/${filename}-resize.jpg`);

    ///for testing in jasmine return width for new file
    const metadata = await sharp(
      `assets/thumb/${filename}-resize.jpg`
    ).metadata();
    // console.log(metadata);
    return metadata.width;
  } catch (error) {
    console.log(error);
  }
}
export default ResizImage;
