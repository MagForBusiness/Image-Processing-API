import sharp from 'sharp';

export async function ResizImage(
  filename: string,
  width: number,
  height: number
) {
  try {
    await sharp(`assets/full/${filename}.jpg`)
      .resize(width, height)
      .toFile(`assets/thumb/${filename}-resize.jpg`);

    ///for testing in jasmine return width for new file
    const NewImageWideth = (await GetMetadata(`${filename}`)).width;
    // console.log(metadata);
    return NewImageWideth;
  } catch (error) {
    console.log(error);
  }
}
export async function GetMetadata(imageName: string) {
  const metadata = await sharp(
    `assets/thumb/${imageName}-resize.jpg`
  ).metadata();
  return metadata;
}
