import sharp from 'sharp';

export async function ResizImage(
  filename: string,
  vwidth: number,
  vheight: number
) {
  try {
    await sharp(`assets/full/${filename}.jpg`)
      .resize(vwidth, vheight)
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