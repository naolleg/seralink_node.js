const multer = require('multer');
const fileFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      req.body.fileFilter = true;
      cb(null, true);
    } else {
      cb(null, true); 
    }
  };
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (req.body.fileFilter === 'image') {
        cb(null, 'public/'); 
      } else {
        cb(null, 'public/'); 
      }
    },
    filename: function (req, file, cb) {
      if (req.body.fileFilter === 'image') {
        cb(null, 'image-' + Date.now() + '-' + file.originalname); 
      } else {
        cb(null, 'file-' + Date.now() + '-' + file.originalname); 
      }
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
  });
module.exports=upload;