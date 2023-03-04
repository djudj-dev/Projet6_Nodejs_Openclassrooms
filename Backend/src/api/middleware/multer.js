import multer from 'multer';

const { PWD, PUBLIC_IMAGES } = process.env;
const imgMimeType = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg'
}

const imgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PWD + PUBLIC_IMAGES);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}.${imgMimeType[file.mimetype]}`;
    req.body.imgName = filename;
    cb(null, filename);
  }
})

export const uploadImg = multer({storage: imgStorage});