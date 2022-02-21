import express from 'express';
import logger from '../../utilites/logger';
import path from 'path';
import ResizImage from './ResizeProcess';
export const image_disply = express.Router();


// set up route
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
