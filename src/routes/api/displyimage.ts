import express from 'express';
import logger from '../../utilites/logger';
import sharp from "sharp";

// set up route 
const image_disply = express.Router();
image_disply.get('/', logger, (req, res) => {
  //get URL Parameters 
  //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
 const filename = req.query.filename;
 const width:number  = Number(req.query.width);
 const height:number = Number(req.query.height);
  
    sharp(`assets/full/${filename}.jpg`).resize(width, height).toFile(`assets/thumb/${filename}-resize.jpg`);
    res.send({
    'filename': filename,
    'width': width,
    'height': height
  })
  });

// convert image and display it in browser (from folder full) and make anew size image ( in folder thumb)
// const convertimage =async ()=> {
//   try {
//     sharp(`assets/full/${filename}.jpg`)
//       .resize(300, 300)
//   } catch (error) {
//     console.log(error);
//   }
// }
// convertimage();
//display coverted image 

export default image_disply;
