import express from 'express';
import logger from '../../utilites/logger';
import sharp from "sharp";


// set up route
const image_disply = express.Router();
image_disply.get('/', logger, (req, res) => {
  res.send('image prevew');
});

// convert image and display it in browser (from folder full) and make anew size image ( in folder thumb)
const convertimage =async ()=> {
  try {
    await sharp("../assets/full/icelandwaterfall.jpg")
      .resize({
        width: 300,
        height: 200
      })
      .toFormat("jpeg", { mozjpeg: true })
      .toFile("../assets/thumb/icelandwaterfall-compressd.jpg");
  } catch (error) {
    console.log(error);
  }
}

convertimage();

export default image_disply;
