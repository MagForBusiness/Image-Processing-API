import express from 'express';
import logger from '../../utilites/logger';
import sharp from 'sharp';


const image_disply = express.Router();
const semiTransparentRedPng = await sharp({
  create: {
    width: 48,
    height: 48,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
})
  .png()
  .toBuffer();
image_disply.get('/', logger, (req, res) => {
  res.send('image prevew');
});
export default image_disply;
