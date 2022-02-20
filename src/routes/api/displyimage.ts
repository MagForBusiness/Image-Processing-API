import express from 'express';
import logger from '../../utilites/logger';
import sharp from 'sharp';
import path from 'path';

// set up route
export const image_disply = express.Router();
//Resize prosses
export function ResizImage(filename: string, width: number, height: number) {
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

image_disply.get('/', logger, (req, res) => {
  //get URL Parameters
  //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
  const filename = String(req.query.filename);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  //Simple Check  User Input
  if (
    isNaN(width) ||
    isNaN(height) ||
    (filename == null && filename == undefined)
  ) {
    res.send(
      'Enter The Parameters As image-disply?filename=icelandwaterfall&width=200&height=300 **Please Make Sure to Enter Width And height in Number Format And filename not null '
    );
  } else {
    //call resize function.
    ResizImage(filename, width, height);

    //display in browser
    res.sendFile(path.resolve() + `/assets/thumb/${filename}-resize.jpg`);
  }
});
