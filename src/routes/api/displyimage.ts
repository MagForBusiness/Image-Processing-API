import express from 'express';
import logger from '../../utilites/logger';

const image_disply = express.Router();

image_disply.get('/', logger, (req, res) => {
  res.send('image prevew');
});
export default image_disply;
