import express from 'express';
import logger from '../../utilites/logger';
import sharp from "sharp";


// set up route
const image_disply = express.Router();
image_disply.get('/', logger, (req, res) => {
  res.send('image prevew');
  // res.send(`<img src="assets/thumb/icelandwaterfall-compressd.jpg"/>`);


});

// convert image and display it in browser (from folder full) and make anew size image ( in folder thumb)
const convertimage =async ()=> {
  try {
    await sharp("assets/full/icelandwaterfall.jpg")
      .resize(300,300)
      .toFile("assets/thumb/icelandwaterfall-compressd.jpg");
  } catch (error) {
    console.log(error);
  }
}
convertimage();
//display coverted image 

export default image_disply;
