import multer from 'multer';

const imgMimeType = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg'
}

const storage = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, `${process.env.PWD}/public/images`)
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}.${imgMimeType[file.mimetype]}`
    req.body.imgName = filename;
    cb(null, filename);
  }
})

export const uploadFile = multer({ storage: storage });