import multer from 'multer';
import { publicPaths } from './../../utils/public-path.js';
import { logString } from './../../utils/string.js';

/**
 * @file Manage the API multer-images middleware controller 
 * @uploadImg is the only function used
 * multer & publicPaths for image storage
 * use for download img on good path, set an unique name
 * and send the imgUrl for the next controller in the request body  
**/

const { img_download } = logString;
const { IMAGES } = publicPaths;
const { PWD , ENV_URL } = process.env;
const imgMimeType = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg'
}

const imgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PWD + IMAGES);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}.${imgMimeType[file.mimetype]}`;
    req.body.imgUrl = `${ENV_URL+IMAGES}/${filename}`;
    console.log(file ,img_download, filename);
    cb(null, filename);
  }
})

export const uploadImg = multer({storage: imgStorage});