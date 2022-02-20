import express from 'express';
import logger from '../../utilites/logger';
import sharp from 'sharp';
import path from 'path';

// set up route
const image_disply = express.Router();
//Resize prosses
function ResizImage(filename : string,width: number,height: number) {
  try{  const ResizImage =  sharp(`assets/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`assets/thumb/${filename}-resize.jpg`);
    console.log(`Image Resize ${filename}-resize.jpg`);
    return filename;
  } catch(error){
    console.log('error');
  }
  };

image_disply.get('/', logger, (req, res) => {
 
  //get URL Parameters
  //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
  const filename : string = String(req.query.filename);
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
  //Simple Check  User Input 
  if (isNaN(width) || isNaN(height) || (filename == null && filename == undefined) ) {
     res.send("Enter The Parameters As image-disply?filename=icelandwaterfall&width=200&height=300 **Please Make Sure to Enter Width And height in Number Format And filename not null ");
  }else{
  //call resize function.
    ResizImage(filename,width,height);
 
  
  
  //display in browser
    res.sendFile(path.resolve()+`/assets/thumb/${filename}-resize.jpg`);
 
    };
  });
export default image_disply;


