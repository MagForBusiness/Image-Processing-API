import express from 'express';
import logger from '../../utilites/logger';
import sharp from 'sharp';

// set up route
const image_disply = express.Router();
const app=express();


image_disply.get('/', logger, (req, res) => {
  //get URL Parameters
  //http://localhost:3000/api/image-disply?filename=icelandwaterfall&width=200&height=300
  const filename = req.query.filename;
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
  
  sharp(`assets/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`assets/thumb/${filename}-resize.jpg`);
    // res.send(express.static('/assets/thumb'))
    res.sendFile(__dirname + '/index.html');
    // res.send({
    // filename: filename,
    // width: width,
    // height: height
    //  });
    });
export default image_disply;
