import sharp from 'sharp';

export async function ResizImage(
  filename: string,
  vwidth: number,
  vheight: number
) {
  try {
    await sharp(`assets/full/${filename}.jpg`)
      .resize(vwidth, vheight)
      .toFile(`assets/thumb/${filename}${vwidth}${vheight}-resize.jpg`);

    ///for testing in jasmine return width for new file
    const NewImageWideth = (await GetMetadata(`${filename}`,vwidth,vheight)).width;
    // console.log(metadata);
    return NewImageWideth;
  } catch (error) {
    console.log(error);
  }
}
export  function GetMetadata(imageName: string,iwidth:number ,iheight:number) {
  const metadata =  sharp(`assets/thumb/${imageName}${iwidth}${iheight}-resize.jpg`).metadata();
  return metadata;
}