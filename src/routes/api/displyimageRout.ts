import express from 'express';
import logger from '../../utilites/logger';
import path from 'path';
import {ResizImage,GetMetadata} from './ResizeProcess';
import fs = require('fs');

// set up route
export const image_disply = express.Router();
image_disply.get(
  '/',
  logger,
   (req: express.Request, res: express.Response) => {
    //get URL Parameters
    //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
    const filename = String(req.query.filename);
    const vWidth = Number(req.query.width);
    const vheight = Number(req.query.height);
    //Simple Check  User Input
    if (
      isNaN(vWidth) ||
      isNaN(vheight) ||
      (filename == null && filename == undefined)
    ) {
      res.send(
        'Enter The Parameters As image-disply?filename=icelandwaterfall&width=200&height=300 **Please Make Sure to Enter Width And height in Number Format And filename not null '
      );
    } else {
      //test if image already exists-Cash Check
      const imagePath = path.resolve() + `/assets/thumb/${filename}-resize.jpg`;

      try {
        if (fs.existsSync(imagePath)) {
          //get image metadata (width and height)
          const metadata =  GetMetadata(imagePath);
          console.log(metadata) 
          res.sendFile(
              path.resolve() + `/assets/thumb/${filename}-resize.jpg`
            );
          
          // if (metadata.width === vWidth || metadata.height === vheight) {
          //   //image exists with the same aspects
          //   //display in browser
          //   console.log('image already exists');
          //   res.sendFile(
          //     path.resolve() + `/assets/thumb/${filename}-resize.jpg`
          //   );
          // }
        } else {
          //call resize function.
          ResizImage(filename, vWidth, vheight);
          console.log('image Successfully Resize');
          res.sendFile(path.resolve() + `/assets/thumb/${filename}-resize.jpg`);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
);
